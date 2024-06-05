import React from "react";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { Br, Em } from "../typography";
import Image from "next/image";
import { HighlightsTestimonialItem } from "../highlights";
import styles from "./CategorySection.module.css";
import { category } from "@/data/dummydata";
import { FallInPlace } from "../motion/fall-in-place";

const settings = {
  dots: true,
  infinite: true,
  speed: 900,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow className={undefined} style={undefined} onClick={undefined} />,
  prevArrow: <SamplePrevArrow className={undefined} style={undefined} onClick={undefined} />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 900,
        dots: true,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 900,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

function SampleNextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "10px", }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
}

const CategorySection = ({  }) => (
  <section className={styles.category}>
    <div className={styles.container}>
      <div className={styles.headingTitle}>
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="center"
          as="p"
        > 
       
        </Heading>
        <FallInPlace textAlign="center"  fontFamily= 'Montserrat' fontWeight='300' fontSize='xx-large'>
        Categories & Industries
      </FallInPlace>
        <Br />
        <Br />
        
      </div>
     
      <div className={styles.sliderWrapper}>
      <Slider {...settings}>
          {category.map((user, index) => (
            <div key={index} className={styles.sliderItem}>
              <div className={styles.card}>
                <div className={styles.Image}>
                  <div className={styles.img}>
                    <img src={user.Image} alt="" />
                  </div>
                  <div className={styles.imgText}>
                    <h3>{user.description}</h3>
                    {/* <span>{user.description}</span> */}
                  </div>
                </div>
                
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
);

export default CategorySection;
