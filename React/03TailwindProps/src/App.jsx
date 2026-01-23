import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-black p-3 font-bold underline  bg-blue-600 rounded-xl">
        Tailwind test
      </h1>
      <Card name="Mann" role="Developer" />
      <Card name="Patel" role="Fullstack" />
      <Card name="ABC"  />
      <Card name="XYZ" role="Backend" />
    </>
  );
}

export default App;
