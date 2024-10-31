import { frameworks } from "./frameworks";
import { languages } from "./languages";
import { places } from "./places";

export const lfp: {
  caption: string;
  items: {
    level: string;
    shade: number;
    subItems: {
      name: string;
      icon: string;
      color?: string;
    }[];
  }[];
}[] = [
  {
    caption: "Languages I speak",
    items: languages,
  },
  {
    caption: "Frameworks I use",
    items: frameworks,
  },
  {
    caption: "Places I've been",
    items: places,
  },
];
