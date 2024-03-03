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
        description: "Version Control CLI application in golang similar to git",
		tags: ["golang", "git"],
	},
	{
		name: "Spell Checker",
		url: "https://spellchecker-production-7388.up.railway.app/",
        description: "Spell checker application using wagner fisher algorithm for determining similarities between words",
		tags: ["golang", "algorithms"],
	},
	{
		name: "Brainfuck Interpreter",
		url: "https://github.com/michaelcosj/bf.pas",
        description: "A Brainfuck interpreter written in free pascal",
		tags: ["pascal", "brainfuck"],
	},
];
