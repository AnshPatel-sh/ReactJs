export function User({ name, email }) {
  return (
    <>
      <li>
        {name}
        <ul>
          <li>
            <span>
              <b>Email:</b>
            </span>
            {email}
          </li>
        </ul>
      </li>
    </>
  );
}
