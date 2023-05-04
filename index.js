#!/usr/bin/env node

// Usage: npx create-my-template my-app

const spawn = require("cross-spawn");
const fs = require("fs");
const path = require("path");

// The first argument will be the project name.
const projectName = process.argv[2];

// Create a project directory with the project name.
const currentDir = process.cwd();
const projectDir = path.resolve(currentDir, projectName);
fs.mkdirSync(projectDir, { recursive: true });

// A common approach to building a starter template is to
// create a `template` folder which will house the template
// and the files we want to create.
const templateDir = path.resolve(__dirname, "./");
fs.cpSync(templateDir, projectDir, { recursive: true });

const projectPackageJson = require(path.join(projectDir, "package.json"));

// Update the project's package.json with the new project name
projectPackageJson.name = projectName;
projectPackageJson.description = "";
projectPackageJson.main = "";
projectPackageJson.bin = {};
projectPackageJson.files = [];

fs.writeFileSync(
  path.join(projectDir, "package.json"),
  JSON.stringify(projectPackageJson, null, 2)
);
//delete this file
fs.unlink(`${projectDir}/index.js`, (err) => {
  if (err) throw err;
});
console.log("Success! Your new project is ready.");
console.log(`Created ${projectName} at ${projectDir}`);
