import BookIcon from "@mui/icons-material/Book";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
function Appbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" flex={1}>
            وبلاگ بوتواستارت
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
