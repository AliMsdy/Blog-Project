import { CssBaseline } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Layout from "./Components/Layout";
import router from "./routes";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const Router = useRoutes(router);

  return (
    <>
      <CssBaseline />
      <Layout>{Router}</Layout>
      <ToastContainer rtl={true} />
    </>
  );
}

export default App;
