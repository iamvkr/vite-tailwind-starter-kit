#!/usr/bin/env node
import { execa } from "execa";
import fs from "fs-extra";
import chalk from "chalk";
import path from "path";
import prompts from "prompts";
import { index_css_template, vite_config_template, app_component_template } from "./template.js";

async function createProject() {
  const projectResponse = await prompts([
    {
      type: "text",
      name: "projectName",
      message: "Enter your project name",
      initial: "vite-tailwind-v4-app",
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
    }
  ]);

  const { projectName, isRouter, isIcon } = projectResponse;
  const projectPath = path.join(process.cwd(), projectName);

  console.log(
    chalk.green(
      `\nCreating a new Vite + Tailwind CSS v4 ${isRouter && `+ react-router-dom`} ${isIcon && `+ lucide-react icons`} 
      project: ${projectName}...`
    )
  );

  await execa(
    "npm",
    ["create", `vite@latest`, projectName, "--", "--template", "react"],
    { stdio: "inherit" }
  );

  // this is change directory
  process.chdir(projectPath);

  console.log(chalk.blue("\nInstalling Tailwind CSS v4 with Vite plugin...\n"));

  const commandArr = ["install", "tailwindcss", "@tailwindcss/vite"];
  if (isRouter) commandArr.push("react-router-dom");
  if (isIcon) commandArr.push("lucide-react");
  // Install tailwindcss
  await execa(
    "npm",
    commandArr,
    { stdio: "inherit" }
  );

  console.log(chalk.green("\nConfiguring Vite for Tailwind CSS v4...\n"));

  // modify vite.config.js
  const viteConfigPath = path.join(projectPath, "vite.config.js");
  fs.writeFileSync(
    viteConfigPath,
    vite_config_template
  );

  // Create a simple CSS file with Tailwind import
  const cssPath = path.join(projectPath, "src/index.css");
  fs.writeFileSync(
    cssPath,
    index_css_template
  );

  // Create a simple App Component file
  const AppPath = path.join(projectPath, "src/App.jsx");
  const template = app_component_template(isRouter, isIcon);

  fs.writeFileSync(
    AppPath,
    template
  );
  console.log(
    chalk.green(
      "\nTailwind CSS v4 with Vite plugin setup complete! Run the following commands to start your project:\n"
    )
  );

  console.log(chalk.cyan(`cd ${projectName}`));
  console.log(chalk.cyan("npm run dev\n"));
  console.log(
    chalk.yellow(
      "Note: Make sure your components import the CSS file to use Tailwind styles."
    )
  );
}

createProject().catch((err) => console.error(chalk.red(err)));
