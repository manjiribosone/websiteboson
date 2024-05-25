import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  VStack,
  Heading,
  Text,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";
import { useClipboard } from "@chakra-ui/react";
import { Em } from "@/components/typography";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "@/components/highlights";





import { Auth } from '@saas-ui/auth'
import { Br, Link } from '@saas-ui/react'
import { BackgroundGradient } from '@/components/gradients/background-gradient'
import { PageTransition } from '@/components/motion/page-transition'
import { Section } from '@/components/section'
import next from 'next'
import { Features } from "@/components/features";
import { FiBox, FiCode, FiFlag, FiLock, FiSearch, FiTerminal, FiToggleLeft, FiTrendingUp, FiUserPlus } from "react-icons/fi";

const Faqs: NextPage = () => {
  return (
    <Container maxW="container.xl" px={4}>
      {/* <HighlightsSection /> */}
      <FeaturesSection />
    </Container>
  );
};

export default Faqs;


const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Frequently Asked Questions!
        </Heading>
      }
      description={
        <>
          Saas UI Pro includes everything you need to build modern frontends.
          <Br />
          Use it as a template for your next product or foundation for your
          design system.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "What is Bosone?",
          icon: FiSearch,
          
          description:
            "Bosone was created with a vision to revolutionize e-commerce by offering a comprehensive platform that simplifies online business operations. Founded in [year], Bosone emerged to address the challenges faced by businesses in profile creation, catalogmanagement, product selling, and customer engagement. With a commitment to innovation and customer-centric solutions, Bosone aims to empower businesses of all sizes to succeed in the digital marketplace effortlessly.",
          variant: "inline",
        },
        {
          title: "Why Bosone?",
          icon: FiSearch,
          description:
            "Bosone is designed to streamline and enhance your business operations by providing an integrated suite of tools. It offers a robust marketplace for seamless transactions, a comprehensive catalog for easy product management, efficient order maintenance to track and fulfill orders, and powerful marketing features to boost your business’s visibility and reach Additionally, Bosone's customer networking feature helps you connect with potential clients and partners, facilitating better communication and collaboration. By consolidating these essential tools into one platform, Bosone saves you time, increases efficiency, and supports your business growth.",
          variant: "inline",
        },
        {
          title: "What is the customer networking feature?",
          icon: FiSearch,
          description:
            "The customer networking feature is designed to facilitate connections between businesses and their potential clients or partners. This feature enables seamless communication, collaboration, and relationship-building by providing tools andplatforms for networking. It helps businesses expand their reach,foster strong connections, and enhance their customer base through efficient and effective networking capabilities.",
          variant: "inline",
        },
        {
          title: "Do you offer international shipping?",
          icon: FiSearch,
          description:
            " Yes, we offer international shipping. Our global logistics network ensures timely and reliable delivery to various international destinations, catering to your business needs worldwide.",
          variant: "inline",
        },
        {
          title: "Is my personal information secure on your website?",
          icon: FiSearch,
          description:
            "Yes, your personal information is secure on our website. We implement advanced encryption and stringent privacy measures to protect your data and ensure your privacy.",
          variant: "inline",
        },
        {
          title: "How can I update my account information?",
          icon: FiSearch,
          description:
            "You can update your account information by logging into your account and navigating to the edit page. From there, you can make and save the necessary changes to your profile.",
          variant: "inline",
        },
       
      ]}
    />
  );
};

 