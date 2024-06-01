import data from "./user.json";
import { UserCard } from "./UserCard";
import  {UserCardClass}  from "./UserCardClass";
function App() {
  return (
    <>
      <UserCard
        name={data.name}
        age={data.age}
        address={data.address}
        phoneNumber={data.phoneNumber}
      ></UserCard>

      <UserCardClass
        name={data.name}
        age={data.age}
        address={data.address}
        phoneNumber={data.phoneNumber}
      ></UserCardClass>
    </>
  );
}

export default App;
