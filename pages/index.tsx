import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Block, blockss } from '@/data/scrolldata';
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
import { blocks } from "@/data/category";
import ScrollableSection from "@/components/scrollable/ScrollableSection";





const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Bosone Landing Page"
        description="The Business App"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        {/* <HomePage /> */}
       
       {/* <Section /> */}

        {/* <FeaturesSection /> */}

        {/* <TestimonialsSection /> */}

        {/* <PricingSection /> */}

        {/* <FaqSection /> */}
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (

    
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Bosone 
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Bosone is a dynamic <Em>B2B</Em> app that lets businesses create profiles, build and manage product catalogs, 
                sell products, and connect with other enterprises, all in one seamless platform.<Br />
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}><Br />
              {/* <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack> */}

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/sigunp">
                  Sign Up
                </ButtonLink>
                {/* <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink> */}
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/bosonlogo.png"
                  layout="fixed"
                  width={1200}
                  height={500}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="90"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container><Br /><Br />

      <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="center"
          as="p"
        >
          <Em>Bosone Toolkit</Em>
          <Br /> Unlock New Possibilities with Our Toolkit.
        </Heading>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Bosonex",
            icon: FiSmile,
            description: "Connecting Businesses, Empowering Growth",
            iconPosition: "left",
            delay: 0.6,
          },
          // {
          //   title: "Themable",
          //   icon: FiSliders,
          //   description:
          //     "Fully customize all components to your brand with theme support and style props.",
          //   iconPosition: "left",
          //   delay: 0.8,
          // },
          // {
          //   title: "Composable",
          //   icon: FiGrid,
          //   description:
          //     "Compose components to fit your needs and mix them together to create new ones.",
          //   iconPosition: "left",
          //   delay: 1,
          // },
          // {
          //   title: "Productive",
          //   icon: FiThumbsUp,
          //   description:
          //     "Designed to reduce boilerplate and fully typed, build your product at speed.",
          //   iconPosition: "left",
          //   delay: 1.1,
          // },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    
    
    
    <Highlights>    
      
      <HighlightsItem colSpan={[1, null, 2]} title="Bosonex Features">
        <VStack alignItems="flex-start" spacing="8">
        <Text color="muted" fontSize="lg">
        Unlock the ultimate commerce experience with our all-in-one platform! Effortlessly sign up or log in, 
          craft your personalized profile, and build stunning product catalogs. Seamlessly buy and sell products while 
          efficiently managing your sales and purchase orders. With secure payment and checkout features, our app ensures 
          a smooth transaction process, making it the perfect solution to power your online business with ease and style.
        </Text>
        <Wrap mt="8">
          {[
              "Sign Up",
              "Create Profile",
              "Switch User Mode",
              "Build Catalog",
              "Add Products",
              "Create Cart",
              "Share Catalog",
              "MarketPlace",
              "Add to Cart",
              "Wishlist",
              "Place Order",
              "Payments & Checkouts",
              "Track Order",
              "Manage Sales Order",
              "Manage Purchase Order",
              "Generate & Download Invoice",

            
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>


          {/* <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}> */}
          
            {/* <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box> */}
            {/* <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            /> */}
          {/* </Flex> */}
        </VStack>
      </HighlightsItem>
      {/* <HighlightsItem title="Solid foundations"> */}
      <Image
            src="/mmbosone.png"
            alt="Bosone mindmap"
            width={500}  // Set appropriate width
            height={70} // Set appropriate height
            className="justify-end"/>
      {/* </HighlightsItem> */}
      <HighlightsTestimonialItem
        name=""
        description=""
        avatar={""}
        gradient={["pink.200", "purple.500"]}    
        >
  <Box align="left">
    <Box columns={[1, 2, 3]}>
      <Icon as={FiLock} boxSize={5} />
      <Text fontWeight="bold"><Em>Privacy Policy </Em></Text>
      <Text>
        Your Data , Your Privacy !
      </Text>
    </Box>
    <Box mt={4}>
      <Text>
      
      
      </Text><br/>
    </Box>
    <ButtonGroup  alignItems="center">
                <ButtonLink colorScheme="primary"  href="/privacy-policy">
                  Learn More
                </ButtonLink></ButtonGroup>
  </Box>
</HighlightsTestimonialItem>

      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Frequently Asked Questions !"
      >
        {/* <Box align="left">
    <Box columns={[1, 2, 3]}>
      <Icon as={FiSearch} boxSize={5} />
      <Text fontWeight="bold"><Em>Privacy Policy </Em></Text>
      <Text>
        Your Data , Your Privacy !
      </Text>
    </Box>
    <Box mt={4}>
      <Text>
      
      
      </Text><br/>
    </Box>
    <ButtonGroup  alignItems="center">
                <ButtonLink colorScheme="primary"  href="/privacy-policy">
                  Learn More
                </ButtonLink></ButtonGroup>
  </Box> */}
  <Box align="left">
  <Box mb={4}>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon as={FiSearch} boxSize={5} />
      <Link href="/faqs" fontWeight="italics" ml={2}>
        <em>What is Bosone?</em>
      </Link>
    </Box>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon as={FiSearch} boxSize={5} />
      <Link href="/faqs" fontWeight="italics" ml={2}>
        <em>Why Bosone?</em>
      </Link>
    </Box>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon as={FiSearch} boxSize={5} />
      <Link href="/faqs" fontWeight="italics" ml={2}>
        <em>What is the customer networking feature? </em>
      </Link>
    </Box>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon as={FiSearch} boxSize={5} />
      <Link href="/faqs" fontWeight="italics" ml={2}>
        <em>Do you offer international shipping?</em>
      </Link>
    </Box>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon as={FiSearch} boxSize={5} />
      <Link href="/faqs" fontWeight="italics" ml={2}>
        <em>Is my personal information secure on your website?</em>
      </Link>
    </Box>
    <Box display="flex" alignItems="center" mb={2}>
      <Icon as={FiSearch} boxSize={5} />
      <Link href="/faqs" fontWeight="italics" ml={2}>
        <em>How can I update my account information?</em>
      </Link>
    </Box>
  </Box>
  {/* <Text mb={4}>
    Your Data, Your Privacy!
  </Text> */}
  <Box mt={4}></Box>
</Box>

        {/* <Text color="muted" fontSize="lg">
        Unlock the ultimate commerce experience with our all-in-one platform! Effortlessly sign up or log in, 
          craft your personalized profile, and build stunning product catalogs. Seamlessly buy and sell products while 
          efficiently managing your sales and purchase orders. With secure payment and checkout features, our app ensures 
          a smooth transaction process, making it the perfect solution to power your online business with ease and style..
        </Text>
        <Wrap mt="8">
          {[
            "authentication",
            "navigation",
            "crud",
            "settings",
            "multi-tenancy",
            "layouts",
            "billing",
            "a11y testing",
            "server-side rendering",
            "documentation",
            "onboarding",
            "storybooks",
            "theming",
            "upselling",
            "unit testing",
            "feature flags",
            "responsiveness",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap> */}

        
      </HighlightsItem><Br/><Br/><Br/><Br/>

        

      <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="center"
          as="p"
        >
          <Em>Categories & Industries</Em>
          
        </Heading><Br/>

        <HighlightsTestimonialItem
        name=""
        description=""
        avatar={""}
        gradient={["pink.200", "purple.500"]}    
        >
  <Box align="left">
    <Box columns={[1, 2, 3]}>
    <Image
            src="/ppc.png"
            alt="Bosone mindmap"
            width={500}  // Set appropriate width
            height={70} // Set appropriate height
            className="justify-end"/><Br />

      {/* <Icon as={FiLock} boxSize={5} /> */}
      <Text fontWeight="bold"><Em> Paper Packaging </Em></Text>
      <Text>
      Innovative paper packaging for a sustainable and eco-conscious future.
      </Text>
    </Box>
    <Box mt={4}>
      <Text>
      
      
      </Text><br/>
    </Box>
    {/* <ButtonGroup  alignItems="center">
                <ButtonLink colorScheme="primary"  href="/privacy-policy">
                  Learn More
                </ButtonLink></ButtonGroup> */}
  </Box>
        
        </HighlightsTestimonialItem>
        {/* <HighlightsTestimonialItem
        name=""
        description=""
        avatar={""}
        gradient={["pink.200", "purple.500"]}    
        >
  <Box align="left">
  <Image
            src="/ppc.png"
            alt="Bosone mindmap"
            width={500}  // Set appropriate width
            height={70} // Set appropriate height
            className="justify-end"/>
    <Box columns={[1, 2, 3]}>
      <Icon as={FiLock} boxSize={5} />
      <Text fontWeight="bold"><Em>Privacy Policy </Em></Text>
      <Text>
        Your Data , Your Privacy !
      </Text>
    </Box>
    <Box mt={4}>
      <Text>
      
      
      </Text><br/>
    </Box>
    <ButtonGroup  alignItems="center">
                <ButtonLink colorScheme="primary"  href="/privacy-policy">
                  Learn More
                </ButtonLink></ButtonGroup>
  </Box>
        
        </HighlightsTestimonialItem>
        <HighlightsTestimonialItem
        name=""
        description=""
        avatar={""}
        gradient={["pink.200", "purple.500"]}    
        >
  <Box align="left">
  <Image
            src="/ppc.png"
            alt="Bosone mindmap"
            width={500}  // Set appropriate width
            height={70} // Set appropriate height
            className="justify-end"/>
    <Box columns={[1, 2, 3]}>
      <Icon as={FiLock} boxSize={5} />
      <Text fontWeight="bold"><Em>Privacy Policy </Em></Text>
      <Text>
        Your Data , Your Privacy !
      </Text>
    </Box>
    <Box mt={4}>
      <Text>
      
      
      </Text><br/>
    </Box>
    <ButtonGroup  alignItems="center">
                <ButtonLink colorScheme="primary"  href="/privacy-policy">
                  Learn More
                </ButtonLink></ButtonGroup>
  </Box>
        
        </HighlightsTestimonialItem> */}
    </Highlights>
    
  );
};

// const FeaturesSection = () => {
//   return (
//     <Features
//       id="features"
//       title={
//         <Heading
//           lineHeight="short"
//           fontSize={["2xl", null, "4xl"]}
//           textAlign="left"
//           as="p"
//         >
//           Not your standard
//           <Br /> dashboard template.
//         </Heading>
//       }
//       description={
//         <>
//           Saas UI Pro includes everything you need to build modern frontends.
//           <Br />
//           Use it as a template for your next product or foundation for your
//           design system.
//         </>
//       }
      // align="left"
      // columns={[1, 2, 3]}
      // iconSize={4}
      // features={[
      //   {
      //     title: "Components.",
      //     icon: FiBox,
      //     description:
      //       "All premium components are available on a private NPM registery, no more copy pasting and always up-to-date.",
      //     variant: "inline",
      //   },
//         {
//           title: "Starterkits.",
//           icon: FiLock,
//           description:
//             "Example apps in Next.JS, Electron. Including authentication, billing, example pages, everything you need to get started FAST.",
//           variant: "inline",
//         },
//         {
//           title: "Documentation.",
//           icon: FiSearch,
//           description:
//             "Extensively documented, including storybooks, best practices, use-cases and examples.",
//           variant: "inline",
//         },
//         {
//           title: "Onboarding.",
//           icon: FiUserPlus,
//           description:
//             "Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.",
//           variant: "inline",
//         },
//         {
//           title: "Feature flags.",
//           icon: FiFlag,
//           description:
//             "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
//           variant: "inline",
//         },
//         {
//           title: "Upselling.",
//           icon: FiTrendingUp,
//           description:
//             "Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.",
//           variant: "inline",
//         },
//         {
//           title: "Themes.",
//           icon: FiToggleLeft,
//           description:
//             "Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
//           variant: "inline",
//         },
//         {
//           title: "Generators.",
//           icon: FiTerminal,
//           description:
//             "Extend your design system while maintaininig code quality and consistency with built-in generators.",
//           variant: "inline",
//         },
//         {
//           title: "Monorepo.",
//           icon: FiCode,
//           description: (
//             <>
//               All code is available as packages in a high-performance{" "}
//               <Link href="https://turborepo.com">Turborepo</Link>, you have full
//               control to modify and adjust it to your workflow.
//             </>
//           ),
//           variant: "inline",
//         },
//       ]}
//     />
//   );
// };

// const TestimonialsSection = () => {
//   const columns = React.useMemo(() => {
//     return testimonials.items.reduce<Array<typeof testimonials.items>>(
//       (columns, t, i) => {
//         columns[i % 3].push(t);

//         return columns;
//       },
//       [[], [], []]
//     );
//   }, []);

//   return (
//     <Testimonials
//       title={testimonials.title}
//       columns={[1, 2, 3]}
//       innerWidth="container.xl" description={undefined}    >
//       <>
//         {columns.map((column, i) => (
//           <Stack key={i} spacing="8">
//             {column.map((t, i) => (
//               <Testimonial key={i} {...t} />
//             ))}
//           </Stack>
//         ))}
//       </>
//     </Testimonials>
//   );
// };

// const PricingSection = () => {
//   return (
//     <Pricing {...pricing}>
//       <Text p="8" textAlign="center" color="muted">
//         VAT may be applicable depending on your location.
//       </Text>
//     </Pricing>
//   );
// };

// const FaqSection = () => {
//   return <Faq {...faq} />;
// };

// const CategorysSection = () => {
//     const columns = React.useMemo(() => {
//       return categories.items.reduce<Array<typeof categories.items>>(
//         (columns, t, i) => {
//           columns[i % 3].push(t);
  
//           return columns;
//         },
//         [[], [], []]
//       );
//     }, []);
  
//     return (
//       <CategorySection
//         title={categories.title}
//         columns={[1, 2, 3]}
//         innerWidth="container.xl" description={undefined} >
//         <>
//           {columns.map((column, i) => (
//             <Stack key={i} spacing="8">
//               {column.map((t, i) => (
//                 <categories key={i} {...t} />
//               ))}
//             </Stack>
//           ))}
//         </>
//       </CategorySection>
//     );
//   };

// const Section: React.FC = () => {
//   return (
//     <div className="section">
//     <h2 className="section-heading">Section Heading</h2>
//     <div className="blocks-container">
//       {blocks.map((block, index) => (
//         <div className="block" key={index}>
//           <Image src={block.imageSrc} alt={block.title} width={300} height={200} />
//           <h3 className="block-title">{block.title}</h3>
//           <p className="block-description">{block.description}</p>
//           <button className="view-more-button">View More</button>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// const HomePage: React.FC = () => {
//   return (
//     <div>
//       <ScrollableSection heading="Scrollable Section" blocks={blocks} />
//     </div>
//   );
// };

export type { Block };
export { blockss };
export default Home;

// export async function getStaticProps() {
//   return {
//     props: {
//       announcement: {
//         title: "Support us by becoming a stargazer! 🚀 ",
//         description:
//           '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
//         href: "https://github.com/saas-js/saas-ui",
//         action: false,
//       },
//     },
//   };
// }
