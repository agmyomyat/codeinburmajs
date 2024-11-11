import React from "react";
import type { GlobalProvider } from "@ladle/react";
import "../src/app/globals.css";
import '@mantine/core/styles.css';
import {createTheme,MantineProvider,ColorSchemeScript} from '@mantine/core'

const theme = createTheme({
  /** Put your mantine theme override here */
});


export const Provider: GlobalProvider = ({ children }) => {
  return <>
          <ColorSchemeScript />
      <MantineProvider theme={theme}>

      {children}
      </MantineProvider>
    </>;
}; 