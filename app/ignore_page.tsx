// "use client"
// import * as React from 'react'
// import { 
//   Container,
//   ChakraProvider,
//   Button,
//   extendTheme,
//   DarkMode,
//   ThemeConfig,
//  } from '@chakra-ui/react'
//  import type { StyleFunctionProps } from '@chakra-ui/styled-system'


// import Image from "next/image";
// import { color } from 'framer-motion';
// import Nav from './components/header/header';
// import { HeroSection } from './components/heroSection';
// import { FeatureSection } from './components/featureSection';
// import { PricingBox, PricingSection } from './components/pricingSection';
// import { HighlightSection } from './components/highlightsSection';
// import { SliderComponent } from './components/slider/sliderComponent';



// const config: ThemeConfig = {
//   initialColorMode: 'dark',
//   useSystemColorMode: false,
// }
// const theme = extendTheme({
//   config,
//   styles: {
//     global : {
//       body: {
//         bg: 'black',
//         color: 'white',
//       },
//     },
//   },
//   colors: {
//     brand: {
//       100: "#479ef5",
//     },
//   },
// })


// export default function Home() {
//   return (
//     <ChakraProvider theme={theme}>
//       <Nav></Nav>
//       <HeroSection></HeroSection>
//       <FeatureSection></FeatureSection>  
//       <Container py={28} maxW="container.lg" w="full" id="pricing">
//           <PricingSection />
//         </Container>
//         <Container py={28} maxW="container.lg" w="full" id="highlights">
//           <HighlightSection></HighlightSection>
//         </Container>
         
//     </ChakraProvider>
//   );
// }
