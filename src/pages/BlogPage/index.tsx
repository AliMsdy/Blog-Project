import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import sanitizeHtml from "sanitize-html";
import { GET_POST_INFO } from "../../graphql/queries";
//components
import {
  Avatar,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Loader from "../../Components/Loader/Loader";
import SendCommentForm from "../../Components/SendCommentForm";
//icon
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CommentBox from "../../Components/CommentBox/CommentBox";

//type
import { CommentType } from "../../types/model";
function BlogPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useQuery(GET_POST_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  const {
    author: {
      name,
      field,
      avatar: { url: authorAvatar },
    },
    content: { html },
    coverPhoto: { url },
    title,
    comments,
  } = data.post;
  return (
    <Container maxWidth="lg">
      <Stack paddingX={3} mt={6} rowGap={4}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            fontWeight={600}
            color="primary"
            variant="h4"
            component="h1"
          >
            {title}
          </Typography>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon />
          </IconButton>
        </Stack>
        <Stack mx="auto" width="100%" maxWidth={800}>
          <img
            className="rounded-lg h-auto max-h-[450px] object-cover"
            src={url}
            alt={slug}
          />
        </Stack>
        <Stack direction="row" alignItems="center" columnGap={2}>
          <Avatar sx={{ width: 72, height: 72 }} src={authorAvatar} />
          <Stack>
            <Typography fontWeight={800} fontSize={20}>
              {name}
            </Typography>
            <Typography color="text.secondary">{field}</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="h5" fontWeight={700}>
            {title}
          </Typography>
          <Typography
            dangerouslySetInnerHTML={{ __html: sanitizeHtml(html) }}
          />
        </Stack>
        <Stack>
          <SendCommentForm slug={slug!} />
        </Stack>
        <Stack bgcolor="#fff" borderRadius={4} padding={2} px={3}>
          <Typography color="primary" fontSize={20} fontWeight={500}    >
            کامنت ها
          </Typography>
          {
            comments.map((comment:CommentType) => (
              <CommentBox key={comment.id} {...comment} />
            ))
          }
        </Stack>
      </Stack>
    </Container>
  );
}

export default BlogPage;
