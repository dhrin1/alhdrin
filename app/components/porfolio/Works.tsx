"use client";

import React, { useEffect } from "react";
import FeatureList from "./feature/feature-list";
import { Colors, Music, Scheduling, Team, Todo } from "./feature/feature-card";
import {
  ColorVisual,
  MusicVisual,
  SchedVisual,
  TeamVisual,
  TodoVisual,
} from "./feature/feature-visual";
import { stagger, useAnimate } from "framer-motion";
import { useFeatureStore } from "./feature/store";

type Props = {};

const features = [
  {
    title: "Use yout calendar as a todo list",
    id: "todo-list",
    card: Todo,
    visual: TodoVisual,
  },
  {
    title: "Color your calendar organinze",
    id: "colors",
    card: Colors,
    visual: ColorVisual,
  },
  {
    title: "Track what you listened to when",
    id: "music",
    card: Music,
    visual: MusicVisual,
  },
  {
    title: "Send scheduling link guest to love",
    id: "scheduling-links",
    card: Scheduling,
    visual: SchedVisual,
  },
  {
    title: "Always know what your team is up to",
    id: "team",
    card: Team,
    visual: TeamVisual,
  },
];

export default function Works({}: Props) {
  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  useEffect(() => {
    if (fullscreenFeature) {
      animate(
        ".feature-title",
        { opacity: 0, x: "-200px" },
        { duration: 0.3, delay: stagger(0.05) }
      );
    } else {
      animate(
        ".feature-title",
        { opacity: 1, x: "0px" },
        { duration: 0.3, delay: stagger(0.05) }
      );
    }
  }, [fullscreenFeature]);

  return (
    <div className="mx-auto max-w-7xl px-2 ">
      <div ref={scope}>
        {features.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        {fullscreenFeature && (
          <button
            onClick={() => setFullscreenFeature(null)}
            className="fixed bottom-6 left-1/2 z-10 -translate-x-1/2 bg-black-normal text-white rounded-xl px-3 py-2 shadow-lg"
          >
            Back to site
          </button>
        )}
        <div className="flex w-full gap-20 items-start">
          <div className="w-full py-[50vh]">
            <ul>
              {features.map((feature) => (
                <li key={feature.id}>
                  <FeatureList id={feature.id}>{feature.title}</FeatureList>
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky top-0 w-full h-screen flex items-center">
            <div className="relative aspect-square w-full bg-gray-200 rounded-3xl">
              {features.map((feature) => (
                <feature.card id={feature.id} key={feature.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen ">More toom to scroll</div>
    </div>
  );
}
