import { useQuery } from "@apollo/client";
import { Avatar, Container, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { GET_AUTHOR_INFO } from "../../graphql/queries";
//components
import CardComponent from "../HomePage/CardComponent";
import Loader from "../../Components/Loader/Loader";
//types
import { PostType } from "../../types/model";

function AuthorPage() {
  const { slug } = useParams();
  const { data, loading, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h1>Error: {error.message}</h1>;
  const {
    avatar: { url },
    description: { html },
    field,
    name,
    posts,
  } = data.author;
  return (
    <Container maxWidth="lg">
      <Stack mt={4} paddingX={3}>
        <Stack alignItems="center">
          <Avatar
            sx={{
              width: { xs: 80, sm: 120, md: 160 },
              height: { xs: 80, sm: 120, md: 160 },
            }}
            src={url}
          />
          <Typography variant="h4" mt={6} fontWeight={700}>
            {name}
          </Typography>
          <Typography color="text.secondary" variant="h5" mt={4}>
            {field}
          </Typography>
        </Stack>
        <Typography
          align="justify"
          dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
        />

        <Stack>
          <Typography variant="h5" mt={5} mb={3}>
            مقالات {name}
          </Typography>
          <Grid container spacing={2}>
            {posts.map((post: PostType) => (
              <CardComponent key={post.id} {...post} />
            ))}
          </Grid>
        </Stack>
      </Stack>
    </Container>
  );
}

export default AuthorPage;
