import { Link, Outlet, ScrollRestoration, useNavigate, useNavigation } from "react-router-dom";

export function RootElement() {
  const {state} = useNavigation()
  const isLoading  = state === "loading"
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </nav>
      {/* navigates to top page when we change the page */}
      <ScrollRestoration/>
      {isLoading && <div className="laoding-spinner"/>}
      <div className={`container ${isLoading ? "loading" : undefined}`}>
        <Outlet />
      </div>
    </>
  );
}
