"use client";

import React from "react";
import ExperienceCard from "./cards/experience-card";

type Props = {};

const cards = [
  {
    title: "MVSoftech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aperiam magni sunt nulla aliquid dolorem obcaecati itaque necessitatibus maxime provident, cupiditate alias iste sed, ratione velit odio temporibus dignissimos.",
    date: "Feb 2020",
  },
  {
    title: "CodeSkitch Solution",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aperiam magni sunt nulla aliquid dolorem obcaecati itaque necessitatibus maxime provident, cupiditate alias iste sed, ratione velit odio temporibus dignissimos.",
    date: "Feb 2020",
  },
  {
    title: "Philippine Statistics Authority",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aperiam magni sunt nulla aliquid dolorem obcaecati itaque necessitatibus maxime provident, cupiditate alias iste sed, ratione velit odio temporibus dignissimos.",
    date: "Feb 2020",
  },
  {
    title: "EESD (Peso)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aperiam magni sunt nulla aliquid dolorem obcaecati itaque necessitatibus maxime provident, cupiditate alias iste sed, ratione velit odio temporibus dignissimos.",
    date: "Feb 2020",
  },
  {
    title: "MVSoftech",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aperiam magni sunt nulla aliquid dolorem obcaecati itaque necessitatibus maxime provident, cupiditate alias iste sed, ratione velit odio temporibus dignissimos.",
    date: "Feb 2020",
  },
  {
    title: "CodeSkitch Solution",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aperiam magni sunt nulla aliquid dolorem obcaecati itaque necessitatibus maxime provident, cupiditate alias iste sed, ratione velit odio temporibus dignissimos.",
    date: "Feb 2020",
  },
  {
    title: "Philippine Statistics Authority",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aperiam magni sunt nulla aliquid dolorem obcaecati itaque necessitatibus maxime provident, cupiditate alias iste sed, ratione velit odio temporibus dignissimos.",
    date: "Feb 2020",
  },
  {
    title: "EESD (Peso)",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus non aperiam magni sunt nulla aliquid dolorem obcaecati itaque necessitatibus maxime provident, cupiditate alias iste sed, ratione velit odio temporibus dignissimos.",
    date: "Feb 2020",
  },
];

export default function Experience({}: Props) {
  return (
    <div className="h-screen">
      <div className="flex items-center h-full">
        <div>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-semibold text-7xl text-black-primary dark:text-white">
              Collaborate
            </h2>
          </div>
          <div className="w-full flex p-5 snap-x snap-mandatory overflow-x-scroll overflow-scroll-hidden space-x-10">
            {cards.map((el, idx) => (
              <ExperienceCard key={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
