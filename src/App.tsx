import { CountDown } from "./components/CountDown";
import { DefaultInput } from "./components/DefaultInput";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";
import { Menu } from "./components/Menu";

import "./styles/theme.css";
import "./styles/global.css";
import { Cycles } from "./components/Cycles";
import { DefaultButton } from "./components/DefaultButton";
import { Heading } from "./components/Heading";
import { PlayCircleIcon } from "lucide-react";
import { Footer } from "./components/Footer";
import { useState } from "react";

function App() {
  // Que todos os componentes que usam numero saibam das mudancas em seu valor.

  // Sempre que eu usar useState, não vou usar atribuição diretamente.
  // const [num, setNum] = useState(() => {
  //   console.log("Lazy initialization");
  //   return 0;
  // });

  const [num, setNum] = useState(0);

  function handleClick() {
    // setNum((prevState) => prevState + 1);
    setNum(1);
  }
  return (
    <>
      <Heading>Número: {num}</Heading>
      <button onClick={handleClick}>Aumentar</button>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <CountDown />
      </Container>

      <Container>
        <form className="form" action="">
          <div className="formRow">
            <DefaultInput
              labelText={num.toString()}
              id="inputTask"
              type="text"
              placeholder="Digite algo..."
            />
          </div>

          <div className="formRow">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="formRow">
            <Cycles />
          </div>

          <div className="formRow">
            <DefaultButton icon={<PlayCircleIcon />} color="green" />
          </div>
        </form>
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  );
}

export { App };
