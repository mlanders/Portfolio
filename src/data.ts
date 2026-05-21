import pack118 from "./img/pack118.png";
import landers from "./img/Landers.png";
import drinkTracker from "./img/DrinkTracker.png";
import adventureSpark from "./img/AdventureSpark.png";
import { Project } from "./types";

const projects: Project[] = [
  {
    id: 1,
    name: "Drink Tracker",
    description: "Track your alcohol consumption and celebrate sober days.",
    img: `${drinkTracker}`,
    preview: "https://drinks.landers.dev",
  },
  {
    id: 2,
    name: "Pack 118",
    description:
      "Website for Cub Scout Pack 118. Built using React and Tailwind CSS to provide information and resources for pack members and families.",
    img: `${pack118}`,
    preview: "https://pack118.com",
  },
  {
    id: 3,
    name: "Landers.dev",
    description:
      "Portfolio site for Mike Landers. Built using React and Tailwind CSS. Hosted on Cloudflare.",
    img: `${landers}`,
    preview: "https://www.landers.dev/",
  },
  {
    id: 4,
    name: "Adventure Spark",
    description:
      "Trails, campsites, and backpacking routes handpicked for the wilderness-bound scout",
    img: `${adventureSpark}`,
    preview: "https://adventurespark.org",
  },
];

export default projects;
