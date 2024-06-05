import * as React from "react";
import type { NextPage } from "next";
import { Container, Heading, Box, SimpleGrid, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";
import { FallInPlace } from "@/components/motion/fall-in-place";

const Faqs: NextPage = () => {
  return (
    <Container maxW="container.xl" px={8} py={12}>
      <FeaturesSection />
    </Container>
  );
};

export default Faqs;

const FeaturesSection = () => {
  const headingColor = useColorModeValue("gray.800", "gray.200");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const bgColor = useColorModeValue("white", "gray.800");

  const features = [
    {
      title: "What is Bosone?",
      icon: FiSearch,
      description:
        "Bosone was created with a vision to revolutionize e-commerce by offering a comprehensive platform that simplifies online business operations. Founded in [year], Bosone emerged to address the challenges faced by businesses in profile creation, catalog management, product selling, and customer engagement. With a commitment to innovation and customer-centric solutions, Bosone aims to empower businesses of all sizes to succeed in the digital marketplace effortlessly.",
    },
    {
      title: "Why Bosone?",
      icon: FiSearch,
      description:
        "Bosone is designed to streamline and enhance your business operations by providing an integrated suite of tools. It offers a robust marketplace for seamless transactions, a comprehensive catalog for easy product management, efficient order maintenance to track and fulfill orders, and powerful marketing features to boost your business’s visibility and reach. Additionally, Bosone's customer networking feature helps you connect with potential clients and partners, facilitating better communication and collaboration. By consolidating these essential tools into one platform, Bosone saves you time, increases efficiency, and supports your business growth.",
    },
    {
      title: "What is the customer networking feature?",
      icon: FiSearch,
      description:
        "The customer networking feature is designed to facilitate connections between businesses and their potential clients or partners. This feature enables seamless communication, collaboration, and relationship-building by providing tools and platforms for networking. It helps businesses expand their reach, foster strong connections, and enhance their customer base through efficient and effective networking capabilities.",
    },
    {
      title: "Do you offer international shipping?",
      icon: FiSearch,
      description:
        " Yes, we offer international shipping. Our global logistics network ensures timely and reliable delivery to various international destinations, catering to your business needs worldwide.",
    },
    {
      title: "Is my personal information secure on your website?",
      icon: FiSearch,
      description:
        "Yes, your personal information is secure on our website. We implement advanced encryption and stringent privacy measures to protect your data and ensure your privacy.",
    },
    {
      title: "How can I update my account information?",
      icon: FiSearch,
      description:
        "You can update your account information by logging into your account and navigating to the edit page. From there, you can make and save the necessary changes to your profile.",
    },
  ];

  return (
    <Box>
      <Heading
      padding="20px"
        fontWeight="300"
        fontFamily="Montserrat"
        lineHeight="short"
        fontSize={["2xl", null, "4xl"]}
        textAlign="center"
        as="p"
        mb={8}
        color={headingColor}
      >
        <FallInPlace textAlign="center"  fontFamily= 'Montserrat' fontWeight='300' fontSize='xx-large'>
                Frequently Asked Questions !
              </FallInPlace>
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {features.map((feature, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={bgColor}>
            <Icon as={feature.icon} w={5} h={5} mb={0} color="teal.500" />
            <Heading fontSize="lg" mb={4} fontFamily="Montserrat" color={headingColor}>{feature.title}</Heading>
            <Text mt={4} fontFamily="Roboto" color={textColor}>{feature.description}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};
