import { Auth } from '@saas-ui/auth'
import { Link } from '@saas-ui/react'
import { BackgroundGradient } from '@/components/gradients/background-gradient'
import { PageTransition } from '@/components/motion/page-transition'
import { Section } from '@/components/section'
import { NextPage } from 'next'
import { Center, Box, Text as ChakraText, Card, CardBody } from '@chakra-ui/react'
import next from 'next'
import { FallInPlace } from '@/components/motion/fall-in-place'



const PrivacyPolicy: NextPage = () => {
  return (
    <Center p={10} mt={20}>
    <Card width="1g" shadow="md" borderRadius="lg" overflow="hidden">
    <FallInPlace>
    <ChakraText as="h1" textAlign="center"  fontFamily= 'Mitr' fontWeight='50'  fontSize='xx-large'>
            Privacy Policy
          </ChakraText>
    </FallInPlace>
      <CardBody>
        <Box textAlign="justify">
          

          <ChakraText   fontFamily= 'Roboto' fontWeight='50' fontSize='16px' mb={6}>
            Welcome to bosonex.com! At Bosone, we deeply value the privacy and security of your personal information. We are committed to protecting your personal information through stringent security measures in compliance with legal standards. This Privacy Policy outlines the methods by which we collect, use, share, store, and protect your personal information. We encourage you to read this Privacy Policy thoroughly to understand how your personal information is handled and to make informed decisions.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="50" mb={2}>
            I. Scope of Application
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            This Privacy Policy applies to the Bosone website located at www.bosonex.com and governs the collection and usage of personal information through the website. It does not extend to websites with their own privacy policies or third-party websites linked through our site.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            II. Collection and Use of Information
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={2}>
            While you use our website, we may collect personal information in the following ways:
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={2}>
            <ChakraText as="b">Information you provide:</ChakraText> This includes details such as your name, contact number, email address, and additional information you may provide via forms or when you subscribe to updates from Bosone.
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            <ChakraText as="b">Information collected during use:</ChakraText> To enhance your experience and improve our website, we collect certain data such as IP address, browser type, and usage times.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            III. Cookies
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            We use cookies to ensure the smooth functioning of the Bosone website and to enhance security. You have the option to accept or decline cookies. Declining cookies may impact your user experience as certain functionalities might become restricted.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            IV. Sharing and Disclosure of Information
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={2}>
            We do not share your personal information with outside parties except under these conditions:
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={2}>
            <ChakraText as="b">With our affiliates:</ChakraText> To provide you services upon your request.
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={2}>
            <ChakraText as="b">As required by law:</ChakraText> To comply with legal processes or government requests.
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px'  mb={2}>
            <ChakraText as="b">To prevent or address potential illegal activities or fraud:</ChakraText>
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            <ChakraText as="b">With your explicit consent:</ChakraText>
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            V. Your Rights
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            You can access, modify, or request deletion of your personal information by contacting us at support@bosonex.com.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            VI. Information Storage and Security Measures
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            Your personal information is securely stored and processed on servers that adhere to strict security protocols. We use advanced security technologies to prevent unauthorized access and ensure data integrity.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            VII. Third-party Links and Related Policies
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            Our website may contain links to third-party sites that are not operated by us. We are not responsible for the privacy practices of these sites and recommend you review their privacy policies.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            VIII. Policy Update
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            This Privacy Policy may be updated periodically. We encourage you to review this page frequently to stay informed of any changes.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            IX. Protection of Minors
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            Our services are not targeted towards minors. If you are under the legal age of majority, you must have consent from your parent or guardian to use our services.
          </ChakraText>

          <ChakraText as="h2" fontFamily= 'Mitr' fontSize="24px" fontWeight="60" mb={2}>
            X. Contact Us
          </ChakraText>
          <ChakraText fontFamily= 'Roboto' fontWeight='30' fontSize='16px' mb={6}>
            For any questions or concerns regarding this Privacy Policy, please contact us at <b>support@bosonex.com</b>.
          </ChakraText>
        </Box>
      </CardBody>
    </Card>
  </Center>
)
}

export default PrivacyPolicy;
