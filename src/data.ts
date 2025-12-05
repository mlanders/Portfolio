import pack118 from "./img/pack118.png";
import landers from "./img/Landers.jpg";
import { Project } from "./types";

const projects: Project[] = [
  {
    id: 1,
    name: "Pack 118",
    description:
      "Website for Cub Scout Pack 118. Built using React and Tailwind CSS to provide information and resources for pack members and families.",
    img: `${pack118}`,
    github: "",
    preview: "https://pack118.com",
    tags: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-js-square",
      "fab fa-react",
    ],
  },
  {
    id: 2,
    name: "Landers.dev",
    description:
      "Portfolio site for Mike Landers. Built using React and Styled Components. Hosted on Netlify.",
    img: `${landers}`,
    github: "https://github.com/mlanders/Portfolio",
    preview: "https://www.landers.dev/",
    tags: [
      "fab fa-html5",
      "fab fa-css3-alt",
      "fab fa-js-square",
      "fab fa-react",
    ],
  },
];
/*
fab fa-react
fab fa-html5
fab fa-css3-alt
fab fa-js-square
fab fa-node-js
fab fa-python
fab fa-angular
fab fa-aws
fab fa-stripe
fab fa-react
fas fa-database
*/

export default projects;
