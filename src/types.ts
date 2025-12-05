export interface Project {
	id: number;
	name: string;
	description: string;
	img: string;
	github: string | null;
	preview: string | null;
	tags: string[];
}

export interface SmallProject {
	name: string;
	description: string;
	siteUrl: string | null;
	githubUrl: string | null;
}
