import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ChakraProvider } from '@chakra-ui/react';
import { UserProvider } from './Contexts/UserContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <UserProvider>
      <ChakraProvider>
        <ColorModeScript />
        <App />
      </ChakraProvider>
    </UserProvider>
  </StrictMode>
);

serviceWorker.unregister();
