"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function About({}: Props) {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center h-full w-full">
        <div className="max-w-7xl w-full px-2 ">
          <div className="flex md:hidden my-5">
            <div className="shadow-2xl rounded-3xl w-full h-full relative">
              <div className="p-5 absolute z-10">
                <h2 className=" font-title text-4xl md:text-6xl lg:text-7xl font-bold text-black-primary dark:text-white">
                  About
                </h2>
                <span className="text-sm md:text-xl lg:text-2xl text-black-primary dark:text-gray-300">
                  Here's my little background
                </span>
                <p className="text-md md:text-xl lg:text-3xl text-black-primary dark:text-white">
                  I'm Alhdrin A. Gungon residing in Baco, Oriental Mindoro,
                  Philippines. In my free time, I enjoy pursuing my hobbies,
                  which include listening to music, watching movies, playing
                  games, and staying up-to-date with the latest technologies
                  through research. I find great pleasure in exploring new
                  advancements and learning about cutting-edge developments in
                  various fields. It's a way for me to relax, unwind, and expand
                  my knowledge beyond my professional life.
                </p>
              </div>
              <div className="relative mt-10">
                <img
                  src="/assets/images/porfolio/about-remove.png"
                  className="object-cover rounded-b-3xl opacity-70"
                />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-2 ">
              <div className="relative ">
                <motion.img
                  initial={{
                    x: -200,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 1.2,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  src="/assets/images/porfolio/about.jpg"
                  width={480}
                  height={480}
                  className="object-cover rounded-3xl"
                />
              </div>
              <motion.div
                className="inline-block space-y-3"
                initial={{
                  opacity: 0,
                }}
                transition={{
                  duration: 2,
                }}
                whileInView={{
                  opacity: 1,
                }}
                viewport={{
                  once: false,
                }}
              >
                <h2 className=" font-title text-4xl md:text-6xl lg:text-7xl font-bold text-black-primary dark:text-white">
                  About
                </h2>
                <span className="text-md md:text-xl lg:text-2xl text-black-primary dark:text-gray-300">
                  Here's my little background
                </span>
                <p className="text-md md:text-xl lg:text-3xl text-black-primary dark:text-white">
                  I'm Alhdrin A. Gungon residing in Baco, Oriental Mindoro
                  Philippines currently working as Junior Frontend Developer at
                  MVSoftech. I graduated at Mindoro State University and
                  successfully earned a degree in Bachelor of Science in
                  Information Technology. My technical skills include having
                  knowledge about HTML, CSS, and JavaScript. Furthermore, I also
                  possess the knowledge in the C Programming Language, ReactJS,
                  NodeJS, ExpressJS, MongoDB, Bootstrap, Tailwindcss, Figma,
                  PHP, and MySQL with CMS Wordpress. Asside from that I do
                  freelancing as a Full Stack Developer when end of working
                  hours at MVSoftech.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
