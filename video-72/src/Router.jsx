import { createBrowserRouter, Outlet } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Navbar } from "./Navbar";
import { Team } from "./Team";
import { TeamMember } from "./TeamMember";
import { TeamNav } from "./TeamNav";

export const Router = createBrowserRouter([
  {
    element: <NavbarLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      {
        path: "/team",
        element:<TeamNavigation/>,
        children: [
          { index:true, element: <Team /> },
          { path: "ansh", element: <TeamMember name="ansh" /> },
          { path: "jay", element: <TeamMember name="jay" /> },
        ],
      },
    ],
  },
]);

function NavbarLayout() {
  return (
    <>
      <Navbar />
      {/* we can also use outlet context to pass values */}
      <Outlet />
    </>
  );
}

function TeamNavigation() {
  return (
    <>
      <TeamNav />
      <Outlet />
    </>
  );
}
