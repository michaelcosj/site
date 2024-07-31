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
    description: "Simple version control CLI application similar to git written in golang",
    tags: ["golang", "git", "vcs"],
  },
  {
    name: "Spell Checker",
    url: "https://spellchecker-spring-wildflower-2638.fly.dev/",
    description: "Spell checking web app using Wagner–Fischer algorithm",
    tags: ["golang", "algorithms", "htmx"],
  },
  {
    name: "Brainfuck Interpreter",
    url: "https://github.com/michaelcosj/bf.pas",
    description: "A Brainfuck interpreter written in free pascal",
    tags: ["pascal", "brainfuck"],
  },
];

export const socials = [
  {
    name: "Github",
    url: "https://github.com/michaelcosj"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/michael-osajeh-331995234"
  },
  {
    name: "X (formerly Twitter)",
    url: "https://x.com/garlicIsDead"
  },
  {
    name: "Email",
    url: "mailto:osajehmichael@gmail.com"
  },
]
