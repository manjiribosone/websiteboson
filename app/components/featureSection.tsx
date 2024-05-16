import {
    Button,
    Center,
    Container,
    Heading,
    Text,
    HStack,
    Card, 
    CardHeader, 
    CardBody, 
    CardFooter
  } from "@chakra-ui/react";
  import { FunctionComponent } from "react";
  
  interface FeatureSectionProps {}
  
  export const FeatureSection: FunctionComponent<FeatureSectionProps> = () => {
    return (
      <Container maxW="container.lg">
        <Center p={4} minHeight="70vh">
          <HStack>
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
            <Container>
            <Card p={10}>
              <CardBody>
                 <Text>View a summary of all your customers over the last month.</Text>
              </CardBody>
            </Card>
            </Container>
          </HStack>
        </Center>
      </Container>
    );
  };

  export default FeatureSection;
