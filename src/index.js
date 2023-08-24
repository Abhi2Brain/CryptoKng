import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
import ColorMOdeSwitcher from "./ColorModeSwitcher"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ChakraProvider>
      <ColorMOdeSwitcher/>
      <App />
    </ChakraProvider>
  </>
);

export const server= 'https://api.coingecko.com/api/v3';

