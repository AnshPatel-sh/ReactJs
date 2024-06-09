import { useEffect, useState } from "react";
import { User } from "./User";

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  /* The abort controller is used so that if the component is unmounted then the useEffect still can have a fetch 
  request going on due to the function asynchronous behaviour so it should not update the state of the coponent 
  while the component is unmounted 
  
  because this can lead to memory leak
  so cleanup function that is the return fucntion runs in two conditions:
  .. first before the component unmounts so it cancels the network request
  .. seconds before useEffect re-runs but hear it wont happen until the component is re-mounted again 
  because empty array is passed */

  useEffect(() => {
    const controller = new AbortController()
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",{
            signal:controller.signal
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError(error?.message ?? error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    return ()=>{
      controller.abort()
    }
  }, []);

  return (
    <>

    {/* until this point apde avite data extract kartata 
    
    key={user.key}
    name={user.name}
    email={user.email}

    but we can spread the user object like this to access all the property
    {...user}
    then you can use any property inside the user object in the same way in other component
    like for this example in the User component code remains same
    */}
      <h1>User List</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul>
          {users.map((user) => {
            // video 39 oode
            // return <User key={user.id} name={user.name} />;
            // video 40 code
            return <User key={user.key} {...user}/>
            
          })}
        </ul>
      )}
    </>
  );
}

export default App;
