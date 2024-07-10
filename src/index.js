import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { LoginContextProvider } from "./Context/LoginContext";
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
      <LoginContextProvider>
        <ChakraProvider>
        <ColorModeScript  initialColorMode={theme.config.initialColorMode} />
          <App />
        </ChakraProvider>
      </LoginContextProvider>
  </BrowserRouter>
);