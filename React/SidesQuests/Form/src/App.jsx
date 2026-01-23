import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [userdata, setUserdata] = useState([]);
  const addUser = (user) => {
    setUserdata((prev) => [...prev, user]);
  };
  return (
    <>
      <Form setUserdata={addUser} />
      {userdata &&
        userdata.map((user, index) => (
          <Card
            key={index}
            firstName={user.firstName}
            lastName={user.lastName}
            gender={user.gender}
            email={user.email}
            imageUrl={user.imageUrl}
          />
        ))}{" "}
    </>
  );
}

export default App;
