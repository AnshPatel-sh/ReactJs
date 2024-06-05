import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if(!response.ok){
          Promise.reject(res)
        }else{
          return response.json();
        }
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  console.log(users);

  let jsx;
  if (loading) {
    jsx = <h2>Loading the data....</h2>;
  } else if(error!=null) {
    jsx  = <h2>Error!</h2>
  }else{
    
    jsx = JSON.stringify(users);
  }

  return (
    <>
      <div>{jsx}</div>
    </>
  );
}

export default App;
