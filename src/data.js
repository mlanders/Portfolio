import trainingBot from "./img/trainingBot.jpg";
import lambdaNotes from "./img/lambdaNotes.jpg";
import landers from "./img/Landers.jpg";

const projects = [
	{
		id: 1,
		name: "Training Bot",
		description:
			"A learning application that allows a team leader to send out snippets of training information using SMS and email. Team leaders build out the messages and assign team members to receive the messages.",
		img: `${trainingBot}`,
		github: "https://github.com/training-bot",
		preview: "https://www.trainingbot.co/",
		tags: [
			"fab fa-html5",
			"fab fa-css3-alt",
			"fab fa-js-square",
			"fab fa-react",
			"fab fa-node-js",
			"fab fa-aws",
			"fab fa-stripe",
		],
	},
	{
		id: 2,
		name: "Lambda Notes",
		description:
			"Built in 48hrs with 3 other developers for a hackathon. Lambda Notes is an application that allows Lambda School students to take notes as they go through the cirriculum",
		img: `${lambdaNotes}`,
		github: "https://github.com/orgs/lambda-notes/dashboard",
		preview: null,
		tags: [
			"fab fa-html5",
			"fab fa-css3-alt",
			"fab fa-js-square",
			"fab fa-node-js",
			"fab fa-react",
			"fab fa-aws",
		],
	},
	{
		id: 3,
		name: "Landers.dev",
		description:
			"Portfolio site for Mike Landers. Built using React and Styled Components. Hosted on Netlify.",
		img: `${landers}`,
		github: "https://github.com/mlanders/Portfolio",
		preview: "https://www.landers.dev/",
		tags: ["fab fa-html5", "fab fa-css3-alt", "fab fa-js-square", "fab fa-react"],
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
