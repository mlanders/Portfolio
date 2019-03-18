import project_1 from './img/project_1.png';
import project_2 from './img/project_2.png';
import project_3 from './img/project_3.png';

const projects = [
	{
		id: 1,
		name: 'Todo App',
		description: 'Simple ToDo app built using React JS with data stored in local storage',
		img: `${project_1}`,
		github: 'https://github.com/mlanders/React-Todo',
		preview: 'https://todo.cranders.com/',
		tags: ['fa-html5', 'fa-css3-alt', 'fa-js-square', 'fa-node-js'],
	},
	{
		id: 2,
		name: 'Instagram Clone',
		description:
			'Simple Instagram clone app that has a working search. Liking and commenting on a post is functional. Login page is for demo purposes and not fully functional',

		img: `${project_2}`,
		github: 'https://github.com/mlanders/React-Insta-Clone',
		preview: 'https://instagram.cranders.com/',
		tags: ['fa-html5', 'fa-css3-alt', 'fa-js-square', 'fa-node-js'],
	},
	{
		id: 3,
		name: 'React Wars',
		description: '',
		img: `${project_3}`,
		github: 'https://github.com/mlanders/Sprint-Challenge-React-Wars',
		preview: 'https://reactwars.cranders.com/',
		tags: ['fa-html5', 'fa-css3-alt', 'fa-js-square', 'fa-node-js'],
	},
];
/* 
fa-react
fa-html5
fa-css3-alt
fa-js-square 
fa-node-js
fa-python
fa-angular
*/

export default projects;
