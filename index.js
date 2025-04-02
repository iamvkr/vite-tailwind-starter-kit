#!/usr/bin/env node
import { execa } from "execa";
import fs from "fs-extra";
import chalk from "chalk";
import path from "path";
import prompts from "prompts";

async function createProject() {
  const response = await prompts({
    type: "text",
    name: "projectName",
    message: "Enter your project name",
    initial: "vite-tailwind-v4-app",
  });

  const projectName = response.projectName.trim();
  const projectPath = path.join(process.cwd(), projectName);

  console.log(
    chalk.green(
      `\nCreating a new Vite + Tailwind CSS v4 project: ${projectName}...\n`
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

  // Install tailwindcss
  await execa("npm", ["install", "tailwindcss", "@tailwindcss/vite"], {
    stdio: "inherit",
  });

  console.log(chalk.green("\nConfiguring Vite for Tailwind CSS v4...\n"));

  // modify vite.config.js
  const viteConfigPath = path.join(projectPath, "vite.config.js");
  fs.writeFileSync(
    viteConfigPath,
    `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
})

`
  );

  // Create a simple CSS file with Tailwind import
  const cssPath = path.join(projectPath, "src/index.css");
  fs.writeFileSync(
    cssPath,
    `@import "tailwindcss";
`
  );

  // Create a simple App Component file
  const AppPath = path.join(projectPath, "src/App.jsx");
  fs.writeFileSync(
    AppPath,
    `function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl mb-10">Ab toh hogi na coding??</h1>
        <p className="mb-2 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 transition-all duration-300 shadow-md">
          Made by{" "}
          <span className="font-bold">
            {" "}
            <a
              href="https://x.com/megh_bari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer"
            >
              Megh Bari
            </a>
          </span>
        </p>
      </div>
    </>
  );
}

export default App;
;
`
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
