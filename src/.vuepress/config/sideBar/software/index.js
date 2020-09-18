module.exports = [
  "",
  "editor",
  {
    title: "VS Code",
    icon: "vscode",
    collapsable: false,
    prefix: "vscode/",
    children: require("./vscode"),
  },
  "Chrome",
  {
    title: "Git",
    icon: "git",
    collapsable: false,
    prefix: "git/",
    children: require("./git"),
  },
  {
    title: "Github",
    icon: "Github",
    collapsable: false,
    prefix: "git/github/",
    children: ["", "actions", "deploy"],
  },
  {
    title: "COMSOL",
    icon: "app",
    collapsable: false,
    prefix: "comsol/",
    children: require("./comsol"),
  },
  "Apache",
  "nginx",
];
