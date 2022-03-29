import "./App.css";
import { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("**********************");
  //Add UseState to use the event handler "onClick" later on
  const generatePassword = () => {
    // Create a random password
    const randomPassword =
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    // Set the generated password as state
    setPassword(randomPassword);
    // Copy the password to the clipboard
    navigator.clipboard.writeText(randomPassword);
  };
  return (
    <div className="background">
      <h1 className="heading">Generate a random password</h1>
      <div className="wrapper">
        <div className="password">{password}</div>
        <button className="generatePassword" onClick={generatePassword}>
          Generate password
        </button>
      </div>
    </div>
  )
};

export default App;

