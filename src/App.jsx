import "./App.css";
import { Background } from "./background"
import { Heading } from './heading';
import { Wrapper } from './wrapper';
import { usePassGen } from "./services";

const App = () => {
  const passGen = usePassGen();
  return (
    <Background>
      <Heading />
      <Wrapper>
        <div className="password">{passGen.password}</div>
        <button className="generatePassword" onClick={passGen.generatePassword}>
          Generate password
        </button>
      </Wrapper>
    </Background >
  )
};

export default App;

