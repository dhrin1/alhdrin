import React from "react";
import { useFeatureStore } from "../feature/store";

type Props = {
  gradient: string;
  children: React.ReactNode;
} & CardProps;

type CardProps = {
  id: string | null;
};

export default function FeatureCard({ gradient, children, id }: Props) {
  const inViewFeature = useFeatureStore((state) => state.inViewFeature);
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );
  return (
    <div
      className={`absolute inset-0 h-full w-full rounded-3xl bg-gradient-to-br transition-opacity ${gradient}  ${
        inViewFeature === id ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
      <button
        onClick={() => setFullscreenFeature(id)}
        className="absolute bottom-6 right-6 rounded-xl text-sm bg-black-primary px-3 py-2 text-md text-white shadow-lg"
      >
        Show me
      </button>
    </div>
  );
}

export const Todo = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7f0ff] to-[#a78afe]">
      <span />
    </FeatureCard>
  );
};

export const Colors = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fbff] to-[#addeff]">
      <span />
    </FeatureCard>
  );
};

export const Availability = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f5fff7] to-[#adf8ff]">
      <span />
    </FeatureCard>
  );
};

export const Music = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#f7fff5] to-[#adf8ff]">
      <span />
    </FeatureCard>
  );
};

export const Scheduling = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fff7f5] to-[#ffd8ad]">
      <span />
    </FeatureCard>
  );
};

export const Team = ({ id }: CardProps) => {
  return (
    <FeatureCard id={id} gradient="from-[#fef5ff] to-[#ffade1]">
      <span />
    </FeatureCard>
  );
};
