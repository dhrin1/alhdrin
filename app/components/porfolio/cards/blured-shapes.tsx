import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BluredShapes({}: Props) {
  return (
    <motion.div
      className="absolute"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }}
    >
      <div className="flex justify-around">
        <div className="absolute top-0 -left-2 h-72 w-72 bg-yellow-400 dark:bg-indigo-500 rounded-full light:mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-2 w-72 h-72 bg-indigo-400 dark:bg-pink-500 rounded-full light:mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 w-72 h-72 bg-pink-400 dark:bg-yellow-500 rounded-full light:mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
    </motion.div>
  );
}
