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
import { Link } from '@saas-ui/react'
import { BackgroundGradient } from '@/components/gradients/background-gradient'
import { PageTransition } from '@/components/motion/page-transition'
import { Section } from '@/components/section'
import next from 'next'

const Faqs: NextPage = () => {
  return (
    <Container maxW="container.xl" px={4}>
      <HighlightsSection />
    </Container>
  );
};

export default Faqs;
const HighlightsSection = () => {
  const { onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <Heading
      
        lineHeight="short"
        fontSize={["2xl", "3xl", "4xl"]}
        textAlign="center"
        as="p"
        whiteSpace="nowrap"
        mt={4}
      >
        <Em>Frequently Asked Questions!</Em>
        
      </Heading>
<br/><br />
      <HighlightsItem colSpan={[1, 1, 2]} title="What is Bosone?">
        <VStack alignItems="flex-start" spacing={4}>
          <Text color="muted" fontSize={["sm", "md", "lg"]}>
            Bosone was created with a vision to revolutionize e-commerce by
            offering a comprehensive platform that simplifies online business
            operations. Founded in [year], Bosone emerged to address the
            challenges faced by businesses in profile creation, catalog
            management, product selling, and customer engagement. With a
            commitment to innovation and customer-centric solutions, Bosone
            aims to empower businesses of all sizes to succeed in the digital
            marketplace effortlessly.
          </Text>
        </VStack>
      </HighlightsItem>

      {/* <Box textAlign="center" py={4}>
        <Image
          src="/What.png"
          alt="Bosone mindmap"
          width={500}
          height={300}
          layout="responsive"
          style={{ borderRadius: "8px", width: "100%", height: "auto" }}
        />
      </Box> */}

      {/* <Box textAlign="center" py={4}>
        <Image
          src="/how.png"
          alt="Bosone mindmap"
          width={500}
          height={300}
          layout="responsive"
          style={{ borderRadius: "8px", width: "100%", height: "auto" }}
        />
      </Box> */}

      <HighlightsItem colSpan={[1, 1, 2]} title="Why Bosone?">
        <VStack alignItems="flex-start" spacing={4}>
          <Text color="muted" fontSize={["sm", "md", "lg"]}>
            Why Bosone? Bosone is designed to streamline and enhance your
            business operations by providing an integrated suite of tools. It
            offers a robust marketplace for seamless transactions, a
            comprehensive catalog for easy product management, efficient order
            maintenance to track and fulfill orders, and powerful marketing
            features to boost your business’s visibility and reach.
            Additionally, Bosone's customer networking feature helps you connect
            with potential clients and partners, facilitating better
            communication and collaboration. By consolidating these essential
            tools into one platform, Bosone saves you time, increases
            efficiency, and supports your business growth.
          </Text>
        </VStack>
      </HighlightsItem>

      <HighlightsItem colSpan={[1, 1, 2]} title="What is the customer networking feature?">
        <VStack alignItems="flex-start" spacing={4}>
          <Text color="muted" fontSize={["sm", "md", "lg"]}>
            The customer networking feature is designed to facilitate
            connections between businesses and their potential clients or
            partners. This feature enables seamless communication,
            collaboration, and relationship-building by providing tools and
            platforms for networking. It helps businesses expand their reach,
            foster strong connections, and enhance their customer base through
            efficient and effective networking capabilities.
          </Text>
        </VStack>
      </HighlightsItem>
      <br/><br/>

      {/* <Box textAlign="center" py={4}>
        <Image
          src="/network.png"
          alt="Bosone mindmap"
          width={500}
          height={300}
          layout="responsive"
          style={{ borderRadius: "8px", width: "100%", height: "auto" }}
        />
      </Box> */}

      {/* <SimpleGrid columns={[1, null, 3]} spacing={4} py={4}>
        <HighlightsTestimonialItem
          name=""
          description=""
          avatar=""
          gradient={["pink.200", "purple.500"]}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <strong>Do you offer international shipping?</strong>
         
          <Text>
            Yes, we offer international shipping. Our global logistics network
            ensures timely and reliable delivery to various international
            destinations, catering to your business needs worldwide.
          </Text>
        </HighlightsTestimonialItem>

        <HighlightsTestimonialItem
          name=""
          description=""
          avatar=""
          gradient={["pink.200", "purple.500"]}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <strong>Is my personal information secure on your website?</strong>
        
          <Text>
            Yes, your personal information is secure on our website. We
            implement advanced encryption and stringent privacy measures to
            protect your data and ensure your privacy.
          </Text>
        </HighlightsTestimonialItem>

        <HighlightsTestimonialItem
          name=""
          description=""
          avatar=""
          gradient={["pink.200", "purple.500"]}
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <strong>How can I update my account information?</strong>
          
          <Text>
            You can update your account information by logging into your account
            and navigating to the edit page. From there, you can make and save
            the necessary changes to your profile.
          </Text>
        </HighlightsTestimonialItem>
      </SimpleGrid> */}

<Flex
        direction={["column", "column", "row"]}
        wrap="wrap"
        justifyContent="space-between"
        width="240%"
        spacing={6}
      >
        <HighlightsTestimonialItem
          name=""
          description=""
          avatar=""
          gradient={["pink.200", "purple.500"]}
          style={{
            flex: 1,
            margin: "10px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <strong>Do you offer international shipping?</strong>
          <br />
          <br />
          <p>
            Yes, we offer international shipping. Our global logistics network
            ensures timely and reliable delivery to various international
            destinations, catering to your business needs worldwide.
          </p>
        </HighlightsTestimonialItem>
        <HighlightsTestimonialItem
          name=""
          description=""
          avatar=""
          gradient={["pink.200", "purple.500"]}
          style={{
            flex: 1,
            margin: "10px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <strong>Is my personal information secure on your website?</strong>
          <br />
          <br />
          <p>
            Yes, your personal information is secure on our website. We
            implement advanced encryption and stringent privacy measures to
            protect your data and ensure your privacy.
          </p>
        </HighlightsTestimonialItem>
        <HighlightsTestimonialItem
          name=""
          description=""
          avatar=""
          gradient={["pink.200", "purple.500"]}
          style={{
            flex: 1,
            margin: "10px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <strong>How can I update my account information?</strong>
          <br />
          <br />
          <p>
            You can update your account information by logging into your account
            and navigating to the edit page. From there, you can make and save
            the necessary changes to your profile.
          </p>
        </HighlightsTestimonialItem>
      </Flex>
    </Highlights>
  );
};



