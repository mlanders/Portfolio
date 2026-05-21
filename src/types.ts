export interface Project {
	id: number;
	name: string;
	description: string;
	img: string;
	preview: string | null;
}

export interface SmallProject {
	name: string;
	description: string;
	siteUrl: string | null;
}
