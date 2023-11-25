import AuthorPage from "./pages/AuthorPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/blogs/:slut", element: <BlogPage /> },
  { path: "/authors/:slug", element: <AuthorPage /> },
];

export default routes;
