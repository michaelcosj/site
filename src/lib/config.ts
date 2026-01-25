import { dev } from "$app/environment";

export const title = "Michael's website";
export const subtitle = "Michael's personal corner of da web";
export const authorName = "Michael Osajeh";
export const authorEmail = "contact@michaelosajeh.com";

export const url = dev
	? "http://localhost:5173"
	: "https://michaelosajeh.com";

export const projects = [
	{
		name: "Mini Version Control System (MVCS)",
		github: "https://github.com/michaelcosj/mvcs",
		description:
			"Version control CLI application written in golang exploring merkle trees and git. Supports staging, commits and branching",
		tags: ["golang", "git", "vcs"],
	},
	{
		name: "Spell Checker",
		github: "https://github.com/michaelcosj/spellchecker",
		description:
			"Simple spell checking web app implementing the Wagner–Fischer algorithm to calculate edit distance between words",
		tags: ["golang", "algorithms", "htmx"],
	},
	{
		name: "bf.pas",
		github: "https://github.com/michaelcosj/brainfuck.pas",
		description: "A Brainfuck interpreter written in free pascal",
		tags: ["pascal", "brainfuck"],
	},
];

export const socials = [
	{
		name: "github",
		url: "https://github.com/michaelcosj",
	},
	{
		name: "linkedIn",
		url: "https://linkedin.com/michael-osajeh-331995234",
	},
	{
		name: "x (twitter)",
		url: "https://x.com/osajeh_michael",
	},
	{
		name: "email",
		url: "mailto:contact@michaelosajeh.com",
	},
];
