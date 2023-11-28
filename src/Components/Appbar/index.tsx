import BookIcon from "@mui/icons-material/Book";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
function Appbar() {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" flex={1}>
            <Link className="no-underline text-inherit" to="/">وبلاگ بوتواستارت</Link>
          </Typography>
          <BookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Appbar;
