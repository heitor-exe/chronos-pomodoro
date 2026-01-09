import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

function App() {
  return (
    <>
      <Heading attr={123} attr2='string'>
        Hi there!
      </Heading>
        <h1>Welcome to the App!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, est
          laboriosam aut labore ipsam odit similique harum, molestias, assumenda
          aspernatur dolores porro maxime. Quas quam natus corporis. Debitis,
          repellat repellendus!
        </p>
    </>
  );
}

export { App };
