import React from "react";
import { motion } from "framer-motion";

type Props = {};

const lists = [
  { title: "React", icon: "" },
  { title: "Nextjs", icon: "" },
  { title: "Taiwindcss", icon: "" },

  { title: "Bootstrap 5", icon: "" },
  { title: "PHP", icon: "" },
  { title: "C#", icon: "" },

  { title: "Git", icon: "" },
  { title: "Sourcetree", icon: "" },
  { title: "DevExpress", icon: "" },

  { title: "VSCode", icon: "" },
  { title: "MongoDB", icon: "" },
  { title: "Git", icon: "" },

  { title: "Sourcetree", icon: "" },
  { title: "DevExpress", icon: "" },
  { title: "DevExpress", icon: "" },
];

const staggerAnimate = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Card = ({ title, classes, key }: any) => {
  console.log(classes);
  return (
    <div className={`rounded-3xl p-5 border h-52 w-52 ${classes}`} key={key}>
      {title}
    </div>
  );
};

export default function Technology({}: Props) {
  function separate(entry: number) {
    let counter = 5;
    let val = Math.floor(entry / counter);
    let number = [];
    for (let i of Array.from({ length: entry }, (_, i) => i + 1)) {
      number.push(i);

      if (number.length === counter) {
        break;
      }
    }
    return number;
  }

  console.log(separate(15));

  return (
    <div className="h-screen">
      <div className="max-w-7xl mx-auto h-full">
        <div className="w-full flex justify-center my-10">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false }}
            transition={{
              duration: 1.2,
              delayChildren: 0.2,
              staggerChildren: 0.2,
            }}
            className="inline-block text-center space-y-4"
          >
            <motion.h4
              className="text-2xl font-medium text-black-primary dark:text-white"
              variants={staggerAnimate}
            >
              Stacks
            </motion.h4>
            <motion.h1
              className="text-6xl font-bold text-black-primary dark:text-white"
              variants={staggerAnimate}
            >
              Technology's I Used
            </motion.h1>
            <motion.p
              className="text-lg text-black-primary dark:text-gray-300"
              variants={staggerAnimate}
            >
              Deliver innovative and latest technology outside Lorem ipsum dolor
              sit amet, consectetur adipisicing elit. Error impedit aliquid
              voluptates exercitationem, voluptatum, debitis commodi eum dolore
              iusto distinctio dolor necessitatibus asperiores deleniti
              molestiae est vitae minus consequuntur rerum.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: false }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
          className="grid grid-cols-5 gap-x-5 gap-y-10"
        >
          {lists.map((el, idx) => (
            <Card
              key={idx}
              title={el.title}
              //   classes={idx === 1 ? "mt-5" : "mt-0"}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}
