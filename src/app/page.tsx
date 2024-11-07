"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import HoverButton from "@/components/button/hoverButton";
import ShowCase from "@/components/ShowCase";
import useScrollTriggeredCountUp from "@/hooks/useScrollTriggeredCountUp";
import AnimateTitle from "@/components/AnimateTitle";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import imageOne from "../assets/imageOne.jpg";
import imageTwo from "../assets/imageTwo.jpg";
import imageNine from "../assets/imageNine.jpg";
import imageTen from "../assets/imageTen.jpg";
import imageEleven from "../assets/imageEleven.jpg";
import imageTwelve from "../assets/imageTwelve.jpg";
import imageThirteen from "../assets/imageThirteen.jpg";
import imageFourteen from "../assets/imageFourteen.jpg";
import imageFifteen from "../assets/imageFifteen.jpg";

import personOne from "../assets/person/personOne.jpg";
import personTwo from "../assets/person/personTwo.jpg";
import personThree from "../assets/person/personThree.jpg";

export default function Home() {
  const officeRef = useRef<HTMLDivElement>(null);
  const countriesRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid gap-10 md:gap-16 my-8">
      {/* Carousel Image  */}
      <Carousel className="w-[80%] mx-auto max-h-[80vh] mb-20">
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="p-4 md:p-6 lg:p-10 w-full h-full max-h-[80vh]"
            >
              <div className="w-full h-full max-h-[80vh] rounded-lg relative ">
                <div className="absolute left-5 md:left-10 lg:left-20 top-5 md:top-10 lg:top-20 z-10 space-y-4">
                  <motion.p
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -30 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.12, 0.8, 0.17, 0.89],
                      delay: 0.3,
                    }}
                    className="text-white text-sm md:text-base"
                  >
                    Lessons from Past
                  </motion.p>
                  <motion.h1
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: -30 },
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.12, 0.8, 0.17, 0.89],
                      delay: 0.6,
                    }}
                    className="text-xl md:text-3xl lg:text-5xl font-bold text-white"
                  >
                    <span className="text-[#e0e0b6]">Building</span> your
                    vision, <br /> creating reality
                  </motion.h1>
                </div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 30 },
                  }}
                  transition={{
                    duration: 0.5,
                    ease: [0.12, 0.8, 0.17, 0.89],
                    delay: 0.6,
                  }}
                  className="hidden md:block absolute bottom-10 lg:bottom-20 right-10 lg:right-20 z-10"
                >
                  <Image
                    src={imageTen}
                    alt="Interior design"
                    loading="lazy"
                    placeholder="blur"
                    className="w-full h-40 lg:h-48 object-cover rounded-lg"
                  />
                </motion.div>
                <span className="absolute w-full h-full top-0 left-0 bg-black/50 rounded-lg"></span>
                <Image
                  src={imageOne}
                  alt="Interior design"
                  loading="lazy"
                  placeholder="blur"
                  className="w-full h-full max-h-[80vh] object-cover rounded-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="w-10 h-10" />
        <CarouselNext />
      </Carousel>
      {/* About Us */}
      <div className="grid gap-4 max-w-[650px] mx-auto">
        <AnimateTitle text="Our Love for Interior Design" />
        <div className="flex justify-between space-x-4">
          <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
          <p className="text-sm text-muted-foreground">About Us</p>
          <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
        </div>
        <p className="text-sm text-center">
          We are a passionate team dedicated to creating stunning interiors.
        </p>
      </div>
      {/* About Us Content */}
      <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row gap-4 justify-center md:justify-between">
        <Image
          src={imageOne}
          alt="Interior design"
          loading="lazy"
          placeholder="blur"
          className="w-full md:w-[70%] h-auto rounded-lg object-cover shadow-lg"
        />
        <div className="flex flex-col space-y-4 md:space-y-10 w-full md:w-[70%] my-auto">
          <p className="text-lg md:text-2xl font-semibold">
            We have extensive experience in interior design and a broad
            knowledge of the latest trends and techniques.
          </p>
          <p className="text-sm md:text-base  text-muted-foreground">
            At Interioz, we blend creativity and functionality to transform
            spaces into stunning environments. Our team of passionate interior
            designers is dedicated to bringing your vision to life with
            personalized, stylish, and innovative solutions. Let us make your
            dream space a reality.
          </p>
          <HoverButton href="/contact" text="Contact Us" />
        </div>
      </div>
      {/* Numbers */}
      <div className="min-h-96 bg-[#f5efe6] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 md:px-20 py-10 md:py-24">
        <div className="grid gap-2">
          <p ref={officeRef} className="text-8xl font-bold text-center">
            {useScrollTriggeredCountUp(officeRef, 16, 2000)}
          </p>
          <Separator className="bg-black w-32 mx-auto" />
          <p className="text-center text-sm md:text-base">OFFICES</p>
        </div>
        <div className="grid gap-2">
          <p ref={countriesRef} className="text-8xl font-bold text-center">
            {useScrollTriggeredCountUp(countriesRef, 47, 2500)}
          </p>
          <Separator className="bg-black w-32 mx-auto" />
          <p className="text-center text-sm md:text-base">COUNTRIES</p>
        </div>
        <div className="grid gap-2">
          <p ref={projectsRef} className="text-8xl font-bold text-center">
            {useScrollTriggeredCountUp(projectsRef, 216, 3000)}
          </p>
          <Separator className="bg-black w-40 mx-auto" />
          <p className="text-center text-sm md:text-base">PROJECTS</p>
        </div>
        <div className="grid gap-2">
          <p ref={yearRef} className="text-8xl font-bold text-center">
            {useScrollTriggeredCountUp(yearRef, 1994, 3500)}
          </p>
          <Separator className="bg-black w-52 mx-auto" />
          <p className="text-center text-sm md:text-base">SINCE</p>
        </div>
      </div>
      {/* Services */}
      <div className="grid gap-4 max-w-[650px] mx-auto">
        <AnimateTitle text="Expertly crafting your dream" />
        <div className="flex justify-between space-x-4">
          <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
          <p className="text-sm text-muted-foreground">Services</p>
          <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
        </div>
        <p className="text-sm text-center">
          We turn your interior design dreams into reality with our specialized
          touch in elegant and functional spaces.
        </p>
      </div>
      {/* Services Content */}
      <div className="flex w-full md:w-[90%] mx-auto">
        <Image
          src={imageTwo}
          alt="Interior design"
          loading="lazy"
          placeholder="blur"
          className="w-[50%] md:w-[70%] h-auto rounded-l-lg object-cover shadow-lg"
        />
        <div className="w-[50%] md:w-[30%] rounded-r-lg bg-[#f5efe6] flex flex-col justify-center p-10 space-y-10">
          <div className="flex flex-col group hover:cursor-pointer">
            <h1>
              <span className="text-xl md:text-2xl lg:text-4xl text-center font-semibold text-foreground/70 group-hover:text-foreground duration-300 bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_3px] md:bg-[length:0%_4px] lg:bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_3px] md:group-hover:bg-[length:100%_4px] lg:group-hover:bg-[length:100%_5px] transition-all ease-out">
                Residential
              </span>
            </h1>
            <p className="text-sm md:text-base text-foreground/60 group-hover:text-foreground duration-300">
              Personalized home interiors
            </p>
          </div>
          <div className="flex flex-col group hover:cursor-pointer">
            <h1>
              <span className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground/60 group-hover:text-foreground duration-300 bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_3px] md:bg-[length:0%_4px] lg:bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_3px] md:group-hover:bg-[length:100%_4px] lg:group-hover:bg-[length:100%_5px] transition-all ease-out">
                Planning
              </span>
            </h1>
            <p className="text-sm md:text-base text-foreground/60 group-hover:text-foreground duration-300">
              Optimized layouts
            </p>
          </div>
          <div className="flex flex-col group hover:cursor-pointer">
            <h1>
              <span className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground/60 group-hover:text-foreground duration-300 bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_3px] md:bg-[length:0%_4px] lg:bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_3px] md:group-hover:bg-[length:100%_4px] lg:group-hover:bg-[length:100%_5px] transition-all ease-out">
                Renovation
              </span>
            </h1>
            <p className="text-sm md:text-base text-foreground/60 group-hover:text-foreground duration-300">
              Seamless space updates
            </p>
          </div>
          <div className="flex flex-col group hover:cursor-pointer">
            <h1>
              <span className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground/60 group-hover:text-foreground duration-300 bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_3px] md:bg-[length:0%_4px] lg:bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_3px] md:group-hover:bg-[length:100%_4px] lg:group-hover:bg-[length:100%_5px] transition-all ease-out">
                Redesign
              </span>
            </h1>
            <p className="text-sm md:text-base text-foreground/70 group-hover:text-foreground duration-300">
              Innovative transformations
            </p>
          </div>
        </div>
      </div>
      {/* Showcase */}
      <div className="grid gap-10">
        <div className="grid gap-4 max-w-[650px] w-full mx-auto">
          <AnimateTitle text="Showcase" />
          <div className="flex justify-between items-center w-full space-x-0 md:space-x-4">
            <span className="h-0.5 bg-muted-foreground w-[35%] md:w-[40%] my-auto"></span>
            <p className="text-sm text-muted-foreground">Quiet Space</p>
            <span className="h-0.5 bg-muted-foreground w-[35%] md:w-[40%] my-auto"></span>
          </div>
        </div>
      </div>
      <ShowCase />
      {/* Process */}
      <div className="grid gap-4 max-w-[650px] mx-auto">
        <AnimateTitle text="Interior Process" />
        <div className="flex justify-between space-x-4">
          <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
          <p className="text-sm text-muted-foreground">Process</p>
          <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
        </div>
        <p className="text-sm text-center">
          Transforming a space involves understanding and applying key design
          principles to create a harmonious and functional environment.
        </p>
        <HoverButton
          className="w-[90%] md:w-[50%] mx-auto"
          href="/contact"
          text="Get In Touch!"
        />
      </div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full md:w-[90%] mx-auto">
        <div className="grid gap-4">
          <Image
            src={imageTen}
            alt="image"
            className="w-full h-56 object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
          <h3 className="text-lg md:text-xl font-semibold text-center">
            Discovering Your Vision
          </h3>
          <p className="text-muted-foreground text-sm md:text-base text-center">
            We meet with you to discuss your vision, needs, budget, and
            timeline. This helps us understand your unique style and
            requirements.
          </p>
        </div>
        <div className="grid gap-4">
          <Image
            src={imageNine}
            alt="image"
            className="w-full h-56 object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
          <h3 className="text-lg md:text-xl font-semibold text-center">
            Sketching Your Dreams
          </h3>
          <p className="text-muted-foreground text-sm md:text-base text-center">
            Based on our consultation, we create initial design concepts and
            mood boards to visualize the space and overall aesthetic.
          </p>
        </div>

        <div className="grid gap-4">
          <Image
            src={imageEleven}
            alt="image"
            className="w-full h-56 object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
          <h3 className="text-lg md:text-xl font-semibold text-center">
            Bringing Ideas to Life
          </h3>
          <p className="text-muted-foreground text-sm md:text-base text-center">
            Once you approve the concept, we develop detailed plans, 3D
            renderings, and material selections to bring your vision to life.
          </p>
        </div>
        <div className="grid gap-4">
          <Image
            src={imageTwelve}
            alt="image"
            className="w-full h-56 object-cover rounded-lg"
            loading="lazy"
            placeholder="blur"
          />
          <h3 className="text-lg md:text-xl font-semibold text-center">
            Transforming Your Space
          </h3>
          <p className="text-muted-foreground text-sm md:text-base text-center">
            We oversee the transformation of your space, coordinating with
            contractors and managing the installation of furnishings and decor.
          </p>
        </div>
      </div>
      {/* Latest News */}
      <div className="grid gap-8 bg-[#f5efe6] p-4 py-10">
        <div className="grid gap-4 max-w-[650px] mx-auto">
          <AnimateTitle text="Stay Updated Be Inspired" />
          <div className="flex justify-between space-x-4">
            <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
            <p className="text-sm text-muted-foreground">Latest News</p>
            <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
          </div>
          <p className="text-sm text-center">
            Stay current, stay informed. Your source for the latest news,
            bringing you insights and updates in real-time.
          </p>
          <HoverButton
            className="w-[90%] md:w-[50%] mx-auto"
            href="/news"
            text="Latest News"
          />
        </div>
        <div className="grid gap-8 w-full md:w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group">
            <div className="w-full md:w-[70%] h-56 mx-auto rounded-lg overflow-hidden flex justify-center items-center">
              <Image
                src={imageThirteen}
                alt="image"
                className="object-cover rounded-lg group-hover:scale-105 duration-300"
                loading="lazy"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-6">
              <Link
                href={"/news"}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                News
              </Link>
              <h1>
                <span className="text-xl md:text-2xl lg:text-4xl text-center font-semibold text-foreground/70 group-hover:text-foreground duration-300 bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_3px] md:bg-[length:0%_4px] lg:bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_3px] md:group-hover:bg-[length:100%_4px] lg:group-hover:bg-[length:100%_5px] transition-all ease-out">
                  Sustainable and Eco-Friendly Materials
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid gap-8 w-full md:w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group">
            <div className="w-full md:w-[70%] h-56 mx-auto rounded-lg overflow-hidden flex justify-center items-center">
              <Image
                src={imageFourteen}
                alt="image"
                className="object-cover group-hover:scale-105 duration-300"
                loading="lazy"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-6">
              <Link
                href={"/news"}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                News
              </Link>
              <h1>
                <span className="text-xl md:text-2xl lg:text-4xl text-center font-semibold text-foreground/70 group-hover:text-foreground duration-300 bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_3px] md:bg-[length:0%_4px] lg:bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_3px] md:group-hover:bg-[length:100%_4px] lg:group-hover:bg-[length:100%_5px] transition-all ease-out">
                  Influence of Smart Home Technology
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="grid gap-8 w-full md:w-[90%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 group">
            <div className="w-full md:w-[70%] h-56 mx-auto rounded-lg overflow-hidden flex justify-center items-center">
              <Image
                src={imageFifteen}
                alt="image"
                className="object-cover rounded-lg group-hover:scale-105 duration-300"
                loading="lazy"
                placeholder="blur"
              />
            </div>
            <div className="flex flex-col justify-center items-center space-y-6">
              <Link
                href={"/news"}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                News
              </Link>
              <h1>
                <span className="text-xl md:text-2xl lg:text-4xl text-center font-semibold text-foreground/70 group-hover:text-foreground duration-300 bg-left-bottom bg-gradient-to-r from-foreground to-foreground bg-[length:0%_3px] md:bg-[length:0%_4px] lg:bg-[length:0%_5px] bg-no-repeat group-hover:bg-[length:100%_3px] md:group-hover:bg-[length:100%_4px] lg:group-hover:bg-[length:100%_5px] transition-all ease-out">
                  Bold Colors and Patterns: <br /> Current Design Aesthetics
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* Meet Our Team */}
      <div className="grid gap-10">
        <div className="grid gap-4 max-w-[650px] mx-auto">
          <AnimateTitle text="Meet Our Designers" />
          <div className="flex justify-between space-x-4">
            <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
            <p className="text-sm text-muted-foreground">Team</p>
            <span className="h-0.5 bg-muted-foreground w-[40%] my-auto"></span>
          </div>
          <p className="text-sm text-center">
            Our team of passionate experts transforms your vision into stunning
            and impactful designs.
          </p>
          <HoverButton
            className="w-[90%] md:w-[50%] mx-auto"
            href="/contact"
            text="Contact Us"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full md:w-[90%] mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: -60 },
            }}
            transition={{
              duration: 1,
              ease: [0.12, 0.8, 0.17, 0.89],
              delay: 0.5,
            }}
            className="overflow-hidden rounded-lg relative group bg-black w-full md:w-80 mx-auto"
          >
            <Image
              src={personOne}
              alt="image"
              className="object-cover group-hover:scale-105 duration-300 opacity-70"
              loading="lazy"
              placeholder="blur"
            />
            <div className="absolute inset-x-0 bottom-6 w-full grid gap-4">
              <p className="text-sm text-primary-foreground text-center">
                Junior Designer
              </p>
              <p className="text-sm md:text-base font-semibold text-primary-foreground text-center">
                Sophia Mitchell
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, y: 10, scale: 1.02 },
              hidden: { opacity: 0, y: 70, scale: 1 },
            }}
            transition={{
              duration: 1,
              ease: [0.12, 0.8, 0.17, 0.89],
              delay: 0.5,
            }}
            className="overflow-hidden rounded-lg relative group bg-black w-full md:w-80 mx-auto"
          >
            <Image
              src={personThree}
              alt="image"
              className="object-cover group-hover:scale-105 duration-300 opacity-70"
              loading="lazy"
              placeholder="blur"
            />
            <div className="absolute inset-x-0 bottom-6 w-full grid gap-4">
              <p className="text-sm text-primary-foreground text-center">
                Lead Designer
              </p>
              <p className="text-sm md:text-base font-semibold text-primary-foreground text-center">
                Alexander Reynolds
              </p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { opacity: 1, x: 0 },
              hidden: { opacity: 0, x: 60 },
            }}
            transition={{
              duration: 1,
              ease: [0.12, 0.8, 0.17, 0.89],
              delay: 0.5,
            }}
            className="overflow-hidden rounded-lg relative group bg-black w-full md:w-80 mx-auto"
          >
            <Image
              src={personTwo}
              alt="image"
              className="object-cover group-hover:scale-105 duration-300 opacity-70"
              loading="lazy"
              placeholder="blur"
            />
            <div className="absolute inset-x-0 bottom-6 w-full grid gap-4">
              <p className="text-sm text-primary-foreground text-center">
                Senior Project Manager
              </p>
              <p className="text-sm md:text-base font-semibold text-primary-foreground text-center">
                Ethan Parker
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-[#f5efe6] py-8 md:py-20">
        <div className="grid gap-10 max-w-[650px] mx-auto">
          <AnimateTitle text="Join us in inspiring dialogue" />
          <p className="text-sm text-center">
            Excited to meet you in person! Come visit us at our office to
            discuss your new design. We’re looking forward to connecting
            face-to-face. See you soon!
          </p>
          <HoverButton
            className="w-[90%] md:w-[50%] mx-auto"
            href="/contact"
            text="Lets Talk"
          />
        </div>
      </div>
      {/* Location Section */}
      <div className="flex flex-col md:flex-row gap-5 justify-between w-full md:w-[90%] mx-auto">
        <div className="w-full max-w-[350px]">
          <AnimateTitle text="Let's Connect" />
        </div>
        <div className="grid gap-4">
          <p className="text-center text-lg md:text-xl font-semibold">
            Amsterdam
          </p>
          <p className="text-center text-muted-foreground">
            010-1234567 <br /> info@interiozwars.org
          </p>
          <p className="text-center text-muted-foreground">
            56 Tulip Terrace, 1023 EF Amsterdam, <br /> Netherlands
          </p>
        </div>
        <Separator orientation="vertical" className="hidden md:block" />
        <div className="grid gap-4">
          <p className="text-center text-lg md:text-xl font-semibold">
            Amsterdam
          </p>
          <p className="text-center text-muted-foreground">
            010-1234567 <br /> info@interiozwars.org
          </p>
          <p className="text-center text-muted-foreground">
            101 Canal View, 4567 GH Eindhoven, <br /> Netherlands
          </p>
        </div>
      </div>
    </div>
  );
}
