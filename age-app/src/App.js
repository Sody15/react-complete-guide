import "./App.css";
import AgeDisplay from "./components/AgeDisplay";
import AgeForm from "./components/AgeForm";
import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (userName, age) => {
    setUsers((prevUsers) => [
      ...prevUsers,
      { userName, age, id: Math.random().toString() },
    ]);
  };

  return (
    <main>
      <AgeForm onAddUser={addUserHandler} />
      <AgeDisplay users={users} />
    </main>
  );
}

export default App;
