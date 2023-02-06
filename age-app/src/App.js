import "./App.css";
import AgeDisplay from "./components/AgeDisplay";
import AgeForm from "./components/AgeForm";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([{ name: "Sody15", age: 32 }]);

  const addUserHandler = (user) => {
    setUsers((prevUsers) => [...prevUsers, user]);
  };

  return (
    <main>
      <AgeForm addUser={addUserHandler} />
      <AgeDisplay users={users} />
    </main>
  );
}

export default App;
