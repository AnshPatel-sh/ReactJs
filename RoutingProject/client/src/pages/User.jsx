import { Link, useLoaderData } from "react-router-dom";
import { getUser } from "../api/users.js";

export function User() {
  const user = useLoaderData();

  return (
    <>
      <h1>{user.name}</h1>
      <p>
        <b>Email</b> - {user.email}
      </p>
      <p>
        <b>Company</b> - {user.company.name}
      </p>
      <p>
        <b>Website</b> - {user.website}
      </p>
      <p>
        <b>Address</b> - {user.address.street}
      </p>
    </>
  );
}

export function loader({ request: { signal }, params }) {
  return getUser(params.userId, { signal });
}

export const userRoute = {
  loader,
  element: <User />,
};
