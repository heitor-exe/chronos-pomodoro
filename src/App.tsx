import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Heading>
        Hi there! 
        <button><TimerIcon /></button>
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
