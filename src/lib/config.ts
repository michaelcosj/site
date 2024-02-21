import { dev } from "$app/environment";

export const title = "Garlic";
export const subtitle = "Michael's personal corner of da web";
export const authorName = "Michael Osajeh"
export const authorEmail = "michaelcosj@proton.me"

export const url = dev
	? "http://localhost:5173"
	: "https://michaelcosj.pages.dev";

export const projects = [
	{
		name: "Version Control System",
		url: "https://github.com/michaelcosj/mvcs",
		techUsed: ["golang", "git", "version control"],
	},
	{
		name: "Spell Checker",
		url: "https://spellchecker-production-7388.up.railway.app/",
		techUsed: ["golang", "algorithms"],
	},
	{
		name: "Brainfuck Interpreter",
		url: "https://github.com/michaelcosj/bf.pas",
		techUsed: ["pascal", "brainfuck"],
	},
];
