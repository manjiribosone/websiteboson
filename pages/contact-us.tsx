import {
  Flex,
  Box,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  Button,
  Heading,
  VStack,
  Text,
  useColorModeValue,
  Center,
} from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react'

const ContactUs: NextPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here, such as sending the data to an API or email service
    console.log('Form submitted:', { name, email, message })
  }

  // Define color mode values
  const bg = useColorModeValue('gray.50', 'gray.800')
  const inputBg = useColorModeValue('gray.100', 'gray.700')
  const color = useColorModeValue('black', 'white')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Center p={8} mt={20}>
      <Flex width="100%" direction={{ base: 'column', md: 'row' }} gap={8}>
        <Box flex={1} color={color}>
          <Heading as="h2" fontFamily= 'Mitr' fontWeight='300' fontSize='x-large' mb={4} variant="primary">
            Contact Info
          </Heading>
          <Text fontFamily= 'Mitr' fontWeight='50' fontSize='large'  mb={2}>
            Bosone
          </Text>
          <Text fontFamily='Roboto' fontWeight="300" fontSize='md' color='#777' mb={2}>
            Mumbai - HQ
          </Text>
          <Text fontFamily='Roboto' fontWeight="300" fontSize='md' color='#777' mb={2}>
            Address: 76/612, Motilal Nagar no.1, Goregaon West, Mumbai - 400104
          </Text>
          <Text fontFamily='Roboto' fontWeight="300" fontSize='md' color='#777' mb={2}>
            +91 9870983696
          </Text>
          <Text fontFamily='Roboto' fontWeight="300" fontSize='md' color='#777'>
            support@bosonex.com
          </Text>
        </Box>
        <Box flex={2} shadow="md" borderRadius="lg" overflow="hidden" p={8} bg={bg} color={color}>
          <VStack spacing={6}>
            <Heading as="h1" fontFamily= 'Mitr' fontWeight='300' fontSize='xx-large'  textAlign="center" variant="primary">
              Contact Us
            </Heading>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <VStack spacing={4}>
                <FormControl id="name" isRequired>
                  <FormLabel fontFamily='Roboto' fontWeight="300" fontSize='16px' >Name</FormLabel>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    bg={inputBg}
                    borderColor={borderColor}
                    _hover={{ borderColor: 'teal.500' }}
                    _focus={{ borderColor: 'teal.500' }}
                  />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel fontFamily='Roboto' fontWeight="300" fontSize='16px'>Email</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    bg={inputBg}
                    borderColor={borderColor}
                    _hover={{ borderColor: 'teal.500' }}
                    _focus={{ borderColor: 'teal.500' }}
                  />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel fontFamily='Roboto' fontWeight="300" fontSize='16px'>Message</FormLabel>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    bg={inputBg}
                    borderColor={borderColor}
                    _hover={{ borderColor: 'teal.500' }}
                    _focus={{ borderColor: 'teal.500' }}
                  />
                </FormControl>
                <Button type="submit" fontFamily= 'Mitr' fontWeight='300'  variant="primary" size="lg" width="full">
                  Send Message
                </Button>
              </VStack>
            </form>
          </VStack>
        </Box>
      </Flex>
    </Center>
  )
}

export default ContactUs
