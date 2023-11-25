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

//types
import { PostType } from "../../types/model";
function CardComponent(props: PostType) {
  const {
    title,
    coverPhoto: { url },
    author: {
      name,
      avatar: { url: authorPhoto },
    },
    slug,
  } = props;
  return (
    <Grid xs={12} md={6} lg={4}>
      <Card
        className="rounded-lg shadow-lg flex flex-col"
        sx={{ height: { xs: "auto", md: 450 } }}
      >
        <Box className="m-4 mr-8 flex items-center gap-x-6">
          <Avatar sx={{ width: 42, height: 42 }} src={authorPhoto} />
          <Typography>{name}</Typography>
        </Box>
        <CardActionArea>
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
            className="rounded-2xl px-6 w-full mx-6 my-3"
          >
            مطالعه مقاله
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
export default CardComponent;
