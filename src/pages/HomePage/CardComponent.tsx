import {
  Avatar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Link } from "react-router-dom";

//types
import { PostType } from "../../types/model";

function CardComponent(props: PostType) {
  const {
    title,
    coverPhoto: { url },
    slug,
    author,
  } = props;

  let name, authorPhoto, authorSlug;

  if (author) {
    ({
      name,
      avatar: { url: authorPhoto },
      slug: authorSlug,
    } = author);
  }

  return (
    <Grid xs={12} md={6} lg={4}>
      <Card
        className="rounded-lg shadow-lg flex flex-col"
        sx={{ height: { xs: "auto", md: author ? 450 : 400 } }}
      >
        {author && (
          <Box className="m-4 mr-8">
            <Link
              to={`/authors/${authorSlug}`}
              className="flex items-center gap-x-6 no-underline text-inherit w-max"
            >
              <Avatar sx={{ width: 42, height: 42 }} src={authorPhoto} />
              <Typography>{name}</Typography>
            </Link>
          </Box>
        )}
        <CardActionArea>
          <Link to={`/blogs/${slug}`}>
            <CardMedia
              image={url}
              component="img"
              sx={{
                height: { sx: 140, md: 160 },
                maxWidth: { xs: "auto", sm: 600, md: "auto" },
                mx: "auto",
              }}
              alt={slug}
            />
          </Link>
        </CardActionArea>
        <CardContent>
          <Typography
            variant="h5"
            fontWeight={600}
            fontSize={{ xs: 18, sm: 24, lg: 20 }}
            component="p"
          >
            {title}
          </Typography>
        </CardContent>
        <div className="px-8 mt-auto">
          <Divider />
        </div>
        <CardActions>
          <Button
            variant="outlined"
            className="rounded-2xl p-0 w-full mx-6 my-3"
          >
            <Link
              className="no-underline py-1 w-full active:text-inherit"
              to={`/blogs/${slug}`}
            >
              مطالعه مقاله
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default CardComponent;
