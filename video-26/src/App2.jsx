import { useEffect, useState } from "react";

export function App2() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  });
  return <>
  <h1>This is App2.jsx code</h1>
  <h3>{width}</h3>
  </>;
}
