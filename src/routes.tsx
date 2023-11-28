import AuthorPage from "./pages/AuthorPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/blogs/:slug", element: <BlogPage /> },
  { path: "/authors/:slug", element: <AuthorPage /> },
];

export default routes;
