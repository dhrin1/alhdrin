import { create } from "zustand";

type FeatureStore = {
  inViewFeature: string | null;
  setInViewFeature: (feature: string | null) => void;
  fullscreenFeature: string | null;
  setFullscreenFeature: (feature: string | null) => void;
  lastscreenFeature: string | null;
  setLastFullscreenFeature: (feature: string | null) => void;
};

export const useFeatureStore = create<FeatureStore>((set) => ({
  inViewFeature: null,
  setInViewFeature: (feature: string | null) => set({ inViewFeature: feature }),
  fullscreenFeature: null,
  setFullscreenFeature: (feature: string | null) => {
    set({ fullscreenFeature: feature });
    if (feature !== null) {
      set({ lastscreenFeature: feature });
    }
  },
  lastscreenFeature: null,
  setLastFullscreenFeature: (feature: string | null) =>
    set({ fullscreenFeature: feature }),
}));
