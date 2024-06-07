export function Item({ name }) {
  return (
    <>
      <div className="mainContainer">
        <div className="subContainer">
          {name}
          <input type="text" />
        </div>
      </div>
    </>
  );
}
