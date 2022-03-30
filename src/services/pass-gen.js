import { useState } from 'react';

export const usePassGen = () => {
  const [password, setPassword] = useState("**********************");
  //Add UseState to use the event handler "onClick" later on
  const generatePassword = () => {
    // Create a random password
    const randomPassword = Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);
    // Set the generated password as state
    setPassword(randomPassword);
  }
  return { password, generatePassword };
  //Return the parameters
}