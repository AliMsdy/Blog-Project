import { CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Layout from "./Components/Layout";
import router from "./routes";

function App() {
  const Router = useRoutes(router);

  return (
    <>
      <CssBaseline />
      <Layout>{Router}</Layout>
    </>
  );
}

export default App;
