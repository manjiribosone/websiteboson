import {
    Button,
    Center,
    Container,
    Heading,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import { FunctionComponent } from "react";
  
  interface HeroSectionProps {}
  
  export const HeroSection: FunctionComponent<HeroSectionProps> = () => {
    return (
      <Container maxW="container.lg">
        <Center p={4} minHeight="70vh">
          <VStack>
            <Container maxW="container.md" textAlign="center">
              <Heading size="2xl" mb={4} color="white">
                The Business App
              </Heading>
  
              <Text fontSize="xl" color="white">
                Freelancers use Biller to accept payments and send invoices to
                clients with a single click
              </Text>
  
              <Button mt={8} bg='brand.100' _hover={{bg: 'brand.200'}} >Login</Button>

  
              <Text my={4} fontSize="sm" color="gray.500">
                102+ builders have signed up in the last 30 days
              </Text>
            </Container>
          </VStack>
        </Center>
      </Container>
    );
  };

  export default HeroSection;
