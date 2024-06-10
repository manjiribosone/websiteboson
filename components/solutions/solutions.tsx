import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import carouselData from '@/data/carouselData'
import './solutions.css'
import { Features } from '../features'
import { FiActivity, FiSmile, FiShoppingCart, FiBarChart2, FiHeadphones, FiPackage, FiUsers, FiShoppingBag } from 'react-icons/fi';
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
                <Button colorScheme="teal" size="md">
                  {slide.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      {/* Other content of the page */}
      <Br/><Br/>
      <FallInPlace textAlign="center"  fontFamily= 'Montserrat' fontWeight='300' fontSize='xx-large'>
                Features of Bosonex
              </FallInPlace>
      <Features
        id="benefits"
        columns={[1, 1, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Profile Management",
            icon: FiUsers,
            description: "Connecting Businesses, Empowering Growth",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Product Catalog",
            icon: FiPackage,
            description: "Connecting Businesses, Empowering Growth",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Sales Order Tracking",
            icon: FiActivity,
            description: "Connecting Businesses, Empowering Growth",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Purchase Order Management",
            icon:  FiShoppingCart,
            description: "Connecting Businesses, Empowering Growth",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "MarketPlace",
            icon: FiShoppingBag ,
            description: "Connecting Businesses, Empowering Growth",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Business Analytics",
            icon: FiBarChart2,
            description: "Connecting Businesses, Empowering Growth",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "24/7 Customer Support",
            icon: FiHeadphones ,
            description: "Connecting Businesses, Empowering Growth",
            iconPosition: "left",
            delay: 0.6,
          },
          
          
        ]}
        reveal={FallInPlace}
      />
    </div>
  )
}

export default Solutions
