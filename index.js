#!/usr/bin/env node
import { execa } from "execa";
import fs from "fs-extra";
import chalk from "chalk";
import path from "path";
import prompts from "prompts";
import open from "open";
import {
  index_css_template,
  vite_config_template,
  app_component_template,
} from "./template.js";

async function createProject() {
  const response = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Enter your project name",
      initial: ".",
    },
    {
      type: "select",
      name: "pkgManager",
      message: "Choose a package manager",
      choices: [
        { title: "npm", value: "npm" },
        { title: "pnpm", value: "pnpm" },
        { title: "yarn", value: "yarn" },
        { title: "bun", value: "bun" },
      ],
      initial: 0,
    },
    {
      type: "confirm",
      name: "isRouter",
      message: "Do you want to install react-router-dom?",
      initial: true,
    },
    {
      type: "confirm",
      name: "isIcon",
      message: "Do you want to install lucide-react icons?",
      initial: true,
    },
    {
      type: "confirm",
      name: "openBrowser",
      message: "Open project in browser after starting?",
      initial: true,
    },
  ]);

  const { projectName, pkgManager, isRouter, isIcon, openBrowser } = response;
  const inPlace = projectName === ".";

  const appName = inPlace ? path.basename(process.cwd()) : projectName;
  const projectPath = inPlace ? process.cwd() : path.join(process.cwd(), projectName);

  console.log(
    chalk.green(
      `\nCreating Vite + Tailwind${isRouter ? " + React Router" : ""}${
        isIcon ? " + Lucide Icons" : ""
      } project: ${appName}...\n`
    )
  );

  if (!inPlace) {
    const createCmd =
      pkgManager === "bun"
        ? ["create", "vite", appName, "--", "--template", "react"]
        : ["create", "vite@latest", appName, "--", "--template", "react"];
    await execa(pkgManager, createCmd, { stdio: "inherit" });
    process.chdir(projectPath);
  } else {
    const createCmd =
      pkgManager === "bun"
        ? ["create", "vite", ".", "--", "--template", "react"]
        : ["create", "vite@latest", ".", "--", "--template", "react"];
    await execa(pkgManager, createCmd, { stdio: "inherit" });
  }

  const installCmd =
    pkgManager === "yarn" || pkgManager === "pnpm" || pkgManager === "bun"
      ? "add"
      : "install";

  const deps = ["tailwindcss", "@tailwindcss/vite"];
  if (isRouter) deps.push("react-router-dom");
  if (isIcon) deps.push("lucide-react");

  console.log(chalk.blue("\nInstalling dependencies...\n"));
  await execa(pkgManager, [installCmd, ...deps], { stdio: "inherit" });

  // Vite config
  fs.writeFileSync(path.join(projectPath, "vite.config.js"), vite_config_template);

  // Tailwind CSS entry
  fs.writeFileSync(path.join(projectPath, "src/index.css"), index_css_template);

  // App.jsx
  fs.writeFileSync(
    path.join(projectPath, "src/App.jsx"),
    app_component_template(isRouter, isIcon)
  );

  // .gitignore
  fs.writeFileSync(
    path.join(projectPath, ".gitignore"),
    `node_modules\ndist\n.env\n.DS_Store`
  );

  console.log(chalk.green("\n✅ Setup complete! Run the following:\n"));
  if (!inPlace) console.log(chalk.cyan(`cd ${projectName}`));
  console.log(
    chalk.cyan(
      `${pkgManager === "yarn" ? "yarn dev" : pkgManager === "bun" ? "bun dev" : pkgManager + " run dev"}\n`
    )
  );

  if (openBrowser) {
    setTimeout(() => {
      open("http://localhost:5173");
    }, 2000);
  }
}

createProject().catch((err) => console.error(chalk.red(err)));
