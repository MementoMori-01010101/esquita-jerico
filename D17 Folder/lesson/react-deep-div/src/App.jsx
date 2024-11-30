import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Greeting from "./components/Greeting";
import DisplayName from "./components/DisplayName";
import Counter from "./components/Counter";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Welcome />
      <Greeting />
      <DisplayName name="John Doe" />
      <Counter />
      <ConditionalRender />
    </div>
  );
}

export default App;
