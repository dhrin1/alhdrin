import { useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { useFeatureStore } from "./store";

type Props = {
  children: React.ReactNode;
  id: string;
};

export default function FeatureList({ children, id }: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
  });
  const setInViewFeature = useFeatureStore((state) => state.setInViewFeature);
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);

  useEffect(() => {
    if (isInView) setInViewFeature(id);
    if (!isInView && inViewFeature === id) setInViewFeature(null);
  }, [isInView, id, setInViewFeature]);

  return (
    <p
      ref={ref}
      className={`feature-title py-16 font-semibold text-5xl transition-colors ${
        isInView
          ? `text-black-primary dark:text-white`
          : `text-gray-300 dark:text-gray-600`
      }`}
    >
      {children}
    </p>
  );
}
