import { useState } from 'react'
import theme from '@/app/theme/theme';

import {
	Flex, Box,
	Link, Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
    ButtonGroup,
    ChakraProvider
} from "@chakra-ui/react";


const Nav = () => {

	return (
      <ChakraProvider theme={theme}>
        <Box bg='black' className="w-full h-20 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            <img src='@/public/bosone-logo.png' alt="Bosone Logo" style={{ width: 100, height: 'auto' }}></img>
            <ul className="hidden md:flex gap-x-6 text-white">
              <li>
                <Link href="/about">
                  <p>About Us</p>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <p>Services</p>
                </Link>
              </li>
              <li>
                <Link href="/contacts">
                  <p>Contacts</p>
                </Link>
              </li>
            </ul>
            <ButtonGroup spacing='6'>
            <Button >Signup</Button>
            <Button bg='brand.dark-brand-bg1' _hover={{bg: 'brand.dark-brand-bg1-pressed', color: 'white'}} >Login</Button>
            </ButtonGroup>
          </div>
        </div>
      </Box>
      </ChakraProvider>
	);
  
};
export default Nav;
