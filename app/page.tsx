"use client"
import * as React from 'react'
import { 
  ChakraProvider,
  Button,
  extendTheme,
  DarkMode,
  ThemeConfig,
 } from '@chakra-ui/react'
 import type { StyleFunctionProps } from '@chakra-ui/styled-system'


import Image from "next/image";
import { color } from 'framer-motion';
import Nav from './components/header/header';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({
  config,
  styles: {
    global : {
      body: {
        bg: 'black',
        color: 'white',
      },
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
    },
  },
})


export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Nav></Nav>
    </ChakraProvider>
  );
}
