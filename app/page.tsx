import React from "react";
import Header from "./components/porfolio/Header";
import Hero from "./components/porfolio/Hero";
import About from "./components/porfolio/About";
import Experience from "./components/porfolio/Experience";
import Works from "./components/porfolio/Works";
import Technology from "./components/porfolio/Technology";

type Props = {};

export const metadata = {
  title: "Alhdrin's Porfolio",
  description: "**",
};

export default function HomePage({}: Props) {
  return (
    <main className="scroll-smooth bg-white dark:bg-black-primary">
      <Header />
      <Hero />
      <About />
      <Works />
      <Technology />
      <Experience />
    </main>
  );
}
