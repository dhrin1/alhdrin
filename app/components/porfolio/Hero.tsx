"use client";

import React from "react";
import { motion } from "framer-motion";
import BluredShapes from "./cards/blured-shapes";
import ReachButton from "./cards/reach-button";

type Props = {};

export default function Hero({}: Props) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center w-full h-full items-center relative overflow-hidden">
          <BluredShapes />
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="inline-block space-y-1 md:space-y-3 lg:space-y-4 max-w-4xl px-2 relative"
          >
            <motion.div className="flex justify-center" variants={item}>
              <div className="relative h-36 w-36">
                <div className="absolute inset-0 h-36 w-36 rounded-full bg-gradient-to-r to-blue-600 via-pink-500  from-purple-800 animate-gradient-xy border-black-normal border-1 shadow-sm shadow-black-primary">
                  <div className="relative items-center w-full h-full justify-center p-1">
                    <img
                      src="/assets/images/porfolio/hero.jpg"
                      alt="profile"
                      className="object-center object-cover w-full h-full  rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-center tracking-tight text-black-primary dark:text-white"
              variants={item}
            >
              Hi 👋🏼 I'm Alhdrin
            </motion.h1>
            <motion.p
              className="text-center font-semibold text-md md:text-lg lg:text-2xl tracking-widest uppercase text-black-primary dark:text-white"
              variants={item}
            >
              Web Developer
            </motion.p>
            <motion.div
              className="p-2 w-full text-center tracking-tight text-sm md:text-lg lg:text-xl "
              variants={item}
            >
              <p className="text-black-primary dark:text-white text-normal">
                Hello, I'm Alhdrin Gungon, a versatile developer experienced in
                both frontend and backend development. I specialize in crafting
                captivating user interfaces and building robust server-side
                solutions. With a problem-solving mindset and a keen eye for
                detail, I deliver successful projects by bridging the gap
                between technical complexities and client expectations. With a
                diverse project background and a constant drive to learn and
                grow, I'm ready to collaborate on innovative solutions. Let's
                create something extraordinary together!
              </p>
            </motion.div>
            <motion.div className="w-full flex justify-center" variants={item}>
              <ReachButton />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
