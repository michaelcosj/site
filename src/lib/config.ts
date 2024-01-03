import { dev } from "$app/environment";

export const title = "Garlic";
export const description = "Michael's personal corner of da web";
export const url = dev
	? "http://localhost:5173"
	: "https://michaelcosj.pages.dev";

export const projects = [
	{
		name: "Mediocre Version Control System",
		url: "https://github.com/michaelcosj/mvcs",
		techUsed: ["golang", "git", "version control"],
	},
];
