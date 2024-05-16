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

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({
  config,
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'regular'
      },
      defalutProps: {
        size: 'md',
        colorScheme: 'blue',
      },
    },
  },
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
      100: '#479ef5',
      200: 'green',
    },
  }
})

export default theme;
