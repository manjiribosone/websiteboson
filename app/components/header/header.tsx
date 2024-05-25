import { ChakraProvider, Flex, Box, Link, Button, ButtonGroup } from '@chakra-ui/react';
import Image from 'next/image';
import theme from '@/app/theme/theme';

const Navigate = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="black" className="w-full h-20 sticky top-0 z-50">
        <Flex className="container mx-auto px-4 h-full" justify="space-between" align="center">
          <Image
            src="/BoLo.png"
            alt="Bosone Logo"
            width={100}  // Set appropriate width
            height={70} // Set appropriate height
            className="justify-start"
          />
          <Flex as="nav" gap={6} align="center" className="hidden md:flex text-white">
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/contacts">Contacts</Link>
          </Flex>
          <ButtonGroup spacing={6} className="hidden md:flex">
            <Button>Sign up</Button>
            <Button bg="brand.dark-brand-bg1" _hover={{ bg: 'brand.dark-brand-bg1-pressed', color: 'white' }}>Login</Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Navigate;
