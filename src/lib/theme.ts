export interface FeatureAccent {
  solid: string;
  soft: string;
}

const featureAccentPalette: FeatureAccent[] = [
  {
    solid: "from-sky-500 via-cyan-500 to-blue-500",
    soft: "from-sky-500/40 via-cyan-400/30 to-blue-500/35",
  },
  {
    solid: "from-orange-500 via-amber-500 to-rose-500",
    soft: "from-orange-500/40 via-amber-400/30 to-rose-500/35",
  },
  {
    solid: "from-purple-500 via-fuchsia-500 to-pink-500",
    soft: "from-purple-500/35 via-fuchsia-500/30 to-pink-500/40",
  },
  {
    solid: "from-emerald-500 via-lime-500 to-teal-400",
    soft: "from-emerald-500/35 via-lime-400/30 to-teal-400/35",
  },
];

export const getFeatureAccent = (index: number): FeatureAccent =>
  featureAccentPalette[index % featureAccentPalette.length];

export const featureAccentCount = featureAccentPalette.length;
