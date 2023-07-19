"use client";

import Link from "next/link";
import React from "react";
import {
  FaGitlab,
  FaGithub,
  FaFacebookSquare,
  FaStackOverflow,
} from "react-icons/fa";
import { BiSun, BiMoon } from "react-icons/bi";
import { motion } from "framer-motion";
import useThemeMode from "@/app/hooks/useThemeMode";

type Props = {};

const links = [
  {
    name: "gitlab",
    href: "https://gitlab.com/alhdrinskie",
    icon: <FaGitlab size={25} />,
  },
  {
    name: "github",
    href: "https://github.com/dhrin1",
    icon: <FaGithub size={25} />,
  },
  {
    name: "stackoverflow",
    href: "https://stackoverflow.com/users/18772815/alhdrin-gungon",
    icon: <FaStackOverflow size={25} />,
  },
  {
    name: "facebook",
    href: "https://web.facebook.com/alhdrinskie",
    icon: <FaFacebookSquare size={25} />,
  },
];

export default function Header({}: Props) {
  const [themeMode, setThemeMode] = useThemeMode();
  return (
    <header className="sticky top-0 z-20 backdrop-blur-lg md:backdrop-filter-nones">
      <div className="max-w-7xl mx-auto flex  items-center justify-between h-16 px-2">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center space-x-2 list-none"
        >
          {links.map((el, idx) => (
            <div className="p-2 transform rounded-full" key={idx}>
              <Link
                href={el.href}
                rel="noopener noreferrer"
                target="_blank"
                className="text-black-primary dark:text-white"
              >
                {el.icon}
              </Link>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row"
        >
          <button
            type="button"
            onClick={() =>
              setThemeMode(themeMode === "light" ? "dark" : "light")
            }
            className="text-black-primary dark:text-white"
          >
            {themeMode !== "light" ? <BiSun size={25} /> : <BiMoon size={25} />}
          </button>
        </motion.div>
      </div>
    </header>
  );
}
