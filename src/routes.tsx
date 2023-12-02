import AuthorPage from "./pages/AuthorPage";
import BlogPage from "./pages/BlogPage";
import HomePage from "./pages/HomePage";
import CreatePost from "./pages/CreatePost";
const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/blogs", element: <h1>All the posts</h1> },
  { path: "/blogs/:slug", element: <BlogPage /> },
  { path: "/authors", element: <h1>All the Authors</h1> },
  { path: "/authors/:slug", element: <AuthorPage /> },
  { path: "/create-post", element: <CreatePost /> },
];

export default routes;
