import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import carouselData from '@/data/carouselData'
import './solutions.css'
import { Features } from '../features'
import { FiSmile } from 'react-icons/fi'
import { FallInPlace } from '../motion/fall-in-place'
import { BackgroundGradient } from '../gradients/background-gradient'
import { Box, ButtonGroup, Container, Stack, Button, Heading, Text } from '@chakra-ui/react'
import { Hero } from '../hero'
import { Br, Em } from '../typography'
import { ButtonLink } from '../button-link'
import Image from 'next/image'
import { Float } from '../motion/float'

const Solutions = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  return (
    <div>
      <header>
        {/* Add your header content here */}
      </header>
      <section>
        <Slider {...settings}>
          {carouselData.map((slide, index) => (
            <div key={index} className={`carousel-slide ${index % 2 === 0 ? 'left-align' : 'right-align'}`}>
              <img src={slide.imgSrc} alt={slide.altText} className="carousel-image" />
              <div className="carousel-overlay">
                <Heading as="h2" size="lg" color="white" mb={2}>
                  {slide.title}
                </Heading>
                <Text fontSize="md" color="white" mb={4}>
                  {slide.subheading}
                </Text>
                <Text fontSize="sm" color="white" mb={6}>
                  {slide.description}
                </Text>
                <Button colorScheme="teal" size="md">
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* Other content of the page */}
      <Box position="relative" overflow="hidden">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
          <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
            <Hero
              id="home"
              justifyContent="flex-start"
              px="0"
              title={
                <FallInPlace fontFamily='Mitr' fontWeight='50' fontSize='xxx-large'>
                  Bosone 
                </FallInPlace>
              }
              description={
                <FallInPlace delay={0.4} fontFamily='Roboto' fontWeight="300" fontSize='20px'>
                  Bosone is a dynamic <Em>B2B</Em> app that lets businesses create profiles, build and manage product catalogs, 
                  sell products, and connect with other enterprises, all in one seamless platform.<Br />
                </FallInPlace>
              }
            >
              <FallInPlace delay={0.8}><Br />
                <ButtonGroup spacing={4} alignItems="center">
                  <ButtonLink fontFamily='Roboto' fontWeight="300" fontSize='20px' colorScheme="primary" size="lg" href="/signup">
                    Sign Up
                  </ButtonLink>
                </ButtonGroup>
              </FallInPlace>
            </Hero>
            <Box
              height="600px"
              position="absolute"
              display={{ base: "none", lg: "block" }}
              left={{ lg: "60%", xl: "55%" }}
              width="80vw"
              maxW="800px"
              maxH="100px"
              margin="0 auto"
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%">
                  <Image
                    src="/bosonlogo.png"
                    layout="fixed"
                    width={1200}
                    height={100}
                    alt="Screenshot of a ListPage in Saas UI Pro"
                    quality="90"
                    priority
                  />
                </Box>
              </FallInPlace>
            </Box>
          </Stack>
        </Container>
        <Br /><Br /><Br /><Br />
      </Box>
    </div>
  )
}

export default Solutions
