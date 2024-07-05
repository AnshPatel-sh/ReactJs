import { About } from "./About";
import { Home } from "./Home";

export function App() {
  let component;
  switch (window.location.pathname) {
    case "/home":
      component = <Home />;
      break;
    case "/about":
      component = <About />;
      break;
  }
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
      {component}
    </>
  );
}
