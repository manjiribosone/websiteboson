import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "@/components/seo/seo";
import { FallInPlace } from "@/components/motion/fall-in-place";
import { Hero } from "@/components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "@/components/typography";
import { NextjsLogo, ChakraLogo } from "@/components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "@/components/features";
import { BackgroundGradient } from "@/components/gradients/background-gradient";
import { Faq } from "@/components/faq";
import { Pricing } from "@/components/pricing/pricing";
import { ButtonLink } from "@/components/button-link/button-link";
import { Testimonial, Testimonials } from "@/components/testimonials";
import faq from "@/data/faq";
import testimonials from "@/data/testimonials";
import pricing from "@/data/pricing";
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "@/components/highlights";

const Faqs: NextPage = () => {
  return (
    <div>
      <HighlightsSection />
    </div>
  );
};

export default Faqs;

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <Heading
        lineHeight="short"
        fontSize={["2xl", null, "4xl"]}
        textAlign="center"
        as="p"
        whiteSpace="nowrap" // Prevents text wrapping
      >
        <Em>Frequently Asked Questions !</Em>
      </Heading>
      <Br />

      <HighlightsItem colSpan={[1, null, 2]} title="What is Bosone ? ">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="lg">
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
      <Image
        src="/What.png"
        alt="Bosone mindmap"
        width={500}
        height={300}
        style={{ justifyContent: "flex-end", width: "100%", height: "auto" }}
      />

      <Image
        src="/how.png"
        alt="Bosone mindmap"
        width={500}
        height={300}
        style={{ justifyContent: "flex-end", width: "100%", height: "auto" }}
      />
      <HighlightsItem colSpan={[1, null, 2]} title="Why Bosone? ">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="lg">
            Why Bosone? Bosone is designed to streamline and enhance your
            business operations by providing an integrated suite of tools. It
            offers a robust marketplace for seamless transactions, a
            comprehensive catalog for easy product management, efficient order
            maintenance to track and fulfill orders, and powerful marketing
            features to boost your business’s visibility and reach.
            Additionally, Bosone's customer networking feature helps you
            connect with potential clients and partners, facilitating better
            communication and collaboration. By consolidating these essential
            tools into one platform, Bosone saves you time, increases
            efficiency, and supports your business growth.
          </Text>
        </VStack>
      </HighlightsItem>

      <HighlightsItem colSpan={[1, null, 2]} title="What is the customer networking feature? ">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="lg">
            The customer networking feature is designed to facilitate
            connections between businesses and their potential clients or
            partners. This feature enables seamless communication,
            collaboration, and relationship-building by providing tools and
            platforms for networking. It helps businesses expand their reach,
            foster strong connections, and enhance their customer base through
            efficient and effective networking capabilities."
          </Text>
        </VStack>
      </HighlightsItem>

      <Image
        src="/network.png"
        alt="Bosone mindmap"
        width={500}
        height={300}
        style={{ justifyContent: "flex-end", width: "100%", height: "auto" }}
      />

      <Flex
        direction={["column", "column", "row"]}
        wrap="wrap"
        justifyContent="space-between"
        width="100%"
        spacing={4}
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
          <Br />
          <Br />
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
          <Br />
          <Br />
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
          <Br />
          <Br />
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