import trainingBot from './img/training-bot.png';
import luncher from './img/Luncher.png';
import lambdaNotes from './img/lambdaNotes.jpg';

const projects = [
    {
        id: 1,
        name: 'Training Bot',
        description:
            'A learning application that allows a team leader to send out snippets of training information using SMS and email. Team leaders build out the messages and assign team members to receive the messages.',
        img: `${trainingBot}`,
        github: 'https://github.com/training-bot',
        preview: 'https://www.trainingbot.co/',
        tags: [
            'fab fa-html5',
            'fab fa-css3-alt',
            'fab fa-js-square',
            'fab fa-react',
            'fab fa-node-js',
            'fab fa-aws',
            'fab fa-stripe'
        ]
    },
    {
        id: 2,
        name: 'Lambda Notes',
        description:
            'Built in 48hrs with 3 other developers for a hackathon. Lambda Notes is an application that allows Lambda School students to take notes as they go through the cirriculum',
        img: `${lambdaNotes}`,
        github: 'https://github.com/orgs/lambda-notes/dashboard',
        preview: 'https://lambda-notes-hackathon.netlify.com',
        tags: [
            'fab fa-html5',
            'fab fa-css3-alt',
            'fab fa-js-square',
            'fab fa-node-js',
            'fab fa-react',
            'fab fa-aws'
        ]
    },
    {
        id: 3,
        name: 'Luncher',
        description:
            'Application that allows school administrators to request donations.',
        img: `${luncher}`,
        github: 'https://github.com/luncher2-build-week-org-19/FE-Luncher2',
        preview: 'https://luncher2.netlify.com/',
        tags: [
            'fab fa-html5',
            'fab fa-css3-alt',
            'fab fa-js-square',
            'fab fa-node-js',
            'fab fa-react'
        ]
    }
    // {
    // 	id: 1,
    // 	name: "Todo App",
    // 	description: "Todo app built using React JS and local storage.",
    // 	img: `${project_1}`,
    // 	github: "https://github.com/mlanders/React-Todo",
    // 	preview: "https://todo.cranders.com/",
    // 	tags: ["fa-html5", "fa-css3-alt", "fa-js-square", "fa-node-js"]
    // },
    // {
    // 	id: 2,
    // 	name: "Instagram Clone",
    // 	description:
    // 		"Simple Instagram clone app that has a working search. Liking and commenting on a post is functional. Login page is for demo purposes and not fully functional.",

    // 	img: `${project_2}`,
    // 	github: "https://github.com/mlanders/React-Insta-Clone",
    // 	preview: "https://instagram.cranders.com/",
    // 	tags: ["fa-html5", "fa-css3-alt", "fa-js-square", "fa-node-js"]
    // },
    // {
    // 	id: 3,
    // 	name: "React Wars",
    // 	description: "",
    // 	img: `${project_3}`,
    // 	github: "https://github.com/mlanders/Sprint-Challenge-React-Wars",
    // 	preview: "https://reactwars.cranders.com/",
    // 	tags: ["fa-html5", "fa-css3-alt", "fa-js-square", "fa-node-js"]
    // }
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
