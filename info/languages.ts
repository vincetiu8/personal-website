const expertLanguages = [
  {
    name: "English",
    icon: "GB",
    color: "blue",
  },
  {
    name: "C++",
    icon: "cplusplus",
  },
  {
    name: "C#",
    icon: "csharp",
  },
  {
    name: "Golang",
    icon: "go",
  },
  {
    name: "Java",
    icon: "java",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "Python",
    icon: "python",
  },
  {
    name: "Typescript",
    icon: "typescript",
  },
];

const intermediateLanguages = [
  {
    name: "Chinese",
    icon: "CN",
    color: "yellow",
  },
  {
    name: "Bash",
    icon: "bash",
  },
  {
    name: "OCaml",
    icon: "ocaml",
  },
  {
    name: "Solidity",
    icon: "solidity",
  },
  {
    name: "SQL",
    icon: "sqlite",
  },
  {
    name: "Swift",
    icon: "swift",
  },
  {
    name: "Terraform",
    icon: "terraform",
  },
];

const basicLanguages = [
  {
    name: "Tagalog",
    icon: "PH",
    color: "blue",
  },
  {
    name: "Elixir",
    icon: "elixir",
  },
  {
    name: "Flutter",
    icon: "flutter",
  },
  {
    name: "Lua",
    icon: "lua",
  },
  {
    name: "Rust",
    icon: "rust",
  },
];

export const languages = [
  {
    level: "Expert",
    shade: 3,
    subItems: expertLanguages,
  },
  {
    level: "Intermediate",
    shade: 2,
    subItems: intermediateLanguages,
  },
  {
    level: "Basic",
    shade: 1,
    subItems: basicLanguages,
  },
];
