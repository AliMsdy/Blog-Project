import { Typography } from "@mui/material";
function Footer() {
  return (
    <footer className="mt-auto">
      <Typography
        variant="body2"
        mt={5}
        textAlign="center"
        component="p"
        color="primary"
        bgcolor="#f7f7f7"
        padding={2}
      >
        پروژه وبلاگ با GraphQL - دوره سایت بوتواستارت
      </Typography>
    </footer>
  );
}

export default Footer;
