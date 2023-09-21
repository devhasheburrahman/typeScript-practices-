import './App.css';
import { Greet } from './Components/Greet';
import { Person } from './Components/Person';
import { PersonList } from './Components/PersonList';
import { Users } from './Components/User/Users';
import { UserContextProvider } from './Components/User/userContext';

function App() {
  // const personName = {
  //   first: "Bruce",
  //   last: "jabin",
  // }

  // const nameList = [
  //   {
  //     first: "Bruce",
  //     last: "akbor",
  //   },
  //   {
  //     first: "rubel",
  //     last: "jabin",
  //   },
  //   {
  //     first: "salma",
  //     last: "Reja",
  //   },
  // ]
  return (
    <div className="App">
      {/* <Greet name="hashebur" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      <UserContextProvider>
        <Users />
      </UserContextProvider>
    </div>
  );
}

export default App;
