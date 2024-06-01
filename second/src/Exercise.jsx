import { Childern } from "./Childern";

export function Exercise({ children, isComplete }) {
  return (
    <>
      <label>
        <input type="checkbox" checked={isComplete} />
        {children}
      </label>
    </>
  );
}
