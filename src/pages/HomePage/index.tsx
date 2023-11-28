import { useQuery } from "@apollo/client";
import { Container, List, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { GET_POSTS_INFO } from "../../graphql/queries";
//type
import { AuthorType, PostType } from "../../types/model";
//components
import AuthorsComponent from "./AuthorsComponent";
import CardComponent from "./CardComponent";
import Loader from "../../Components/Loader/Loader";

function HomePage() {
  const { data, loading, error } = useQuery(GET_POSTS_INFO);
  if (loading) return <Loader />;
  if (error) return <h1>{error.message}</h1>;
  return (
    <Container maxWidth="lg">
      <Grid container className="mt-6" spacing={3} paddingX={3}>
        <Grid xs={12} md={3}>
          <Typography variant="h4" fontWeight={400} className="mb-5 pr-2">
            نویسنده ها
          </Typography>
          <List className="bg-white rounded-lg shadow-lg">
            {data.authors.map((author: AuthorType, i: number) => (
              <AuthorsComponent key={author.id} data={author} index={i} />
            ))}
          </List>
        </Grid>

        <Grid xs={12} md={9}>
          <Typography variant="h4" fontWeight={400} className="mb-4 pr-2">
            مقالات
          </Typography>
          <Grid container spacing={2}>
            {data.posts.map((post: PostType) => (
              <CardComponent key={post.id} {...post} />
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default HomePage;
