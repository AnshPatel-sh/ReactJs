import { createBrowserRouter, Navigate, useRouteError } from "react-router-dom";
import { userListRoute } from "./pages/UserList";
import { postListRoute } from "./pages/PostList";
import { todoList } from "./pages/TodoList";
import { RootElement } from "./Layouts/RootElement";
import { postRoute } from "./pages/Post.jsx";
import { userRoute } from "./pages/User.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootElement />,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          { index: true, element: <Navigate to="/posts" /> },
          {
            path: "/posts",
            children: [
              {
                index: true,
                ...postListRoute,
              },
              { path: ":postId", ...postRoute },
            ],
          },
          {
            path: "/users",
            children: [
              { index: true, ...userListRoute },
              { path: ":userId", ...userRoute },
            ],
          },
          { path: "/todos", ...todoList },
          {
            path: "*",
            element: <h1>Page not found</h1>,
          },
        ],
      },
    ],
  },
]);

function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <h1>Error Something went wrong</h1>
      {import.meta.env.MODE !== "production" && (
        <>
          <pre>{error.message}</pre>
          <pre>{error.stack}</pre>
        </>
      )}
    </>
  );
}
