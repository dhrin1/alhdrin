import React from "react";
import { useFeatureStore } from "./store";

type Props = {
  id: string;
};
type VisualProps = {
  children: React.ReactNode;
} & Props;

export default function FeatureVisual({ children, id }: VisualProps) {
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center transition-opacity ${
        fullscreenFeature === id
          ? `opacity-100`
          : `opacity-0 pointer-events-none`
      } `}
    >
      <div className="max-w-6xl px-2">{children}</div>
    </div>
  );
}

export const MusicVisual = ({ id }: Props) => {
  return (
    <FeatureVisual id={id}>
      <img src={"/assets/images/porfolio/macos-ventura.jpg"} />
    </FeatureVisual>
  );
};

export const TodoVisual = ({ id }: Props) => {
  return (
    <FeatureVisual id={id}>
      <img src={"/assets/images/porfolio/macos-monterey.jpg"} />
    </FeatureVisual>
  );
};

export const ColorVisual = ({ id }: Props) => {
  return (
    <FeatureVisual id={id}>
      <img src={"/assets/images/porfolio/peak1.jpg"} />
    </FeatureVisual>
  );
};

export const SchedVisual = ({ id }: Props) => {
  return (
    <FeatureVisual id={id}>
      <img src={"/assets/images/porfolio/peak2.jpg"} />
    </FeatureVisual>
  );
};

export const TeamVisual = ({ id }: Props) => {
  return (
    <FeatureVisual id={id}>
      <img src={"/assets/images/porfolio/peak3.jpg"} />
    </FeatureVisual>
  );
};
