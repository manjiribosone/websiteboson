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
  fonts: {
    heading: "Montserrat, sans-serif",
    body: "Montserrat, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        fontFamily: "Montserrat, sans-serif",
        backgroundColor: "#f9fafb",
        color: "#333",
        body: {
          bg: 'black',
          color: 'white',
        },
      },
    },
  },
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
 
  colors: {
    brand: {
      'dark-brand-fg1': '#479ef5',
      'dark-brand-fg1-pressed': '#96C6FA',
      'dark-brand-bg1': '#0F6CBD',
      'dark-brand-bg1-pressed': '#0E4775',

    },
    grey: {
      12: '#1F1F1F',
      18: '#2E2E2E'
    }
  }
})

export default theme;
