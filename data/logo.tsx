import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const color = useColorModeValue('#231f20', '#fff');
  return (
    <chakra.img
      src="/bosone-logo.svg"
      alt="Bosone Logo"
      {...props}
      _dark={{
        filter: ''
      }}
      _light={{
        filter:'invert(1)'
      }}
    />
  );
};
