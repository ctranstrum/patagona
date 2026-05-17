// Quick little hacky script to render stl files from jscad files
// if they are missing or out of date. It calculates the md5 hash
// of the jscad file to determine if it has changed since the last
// time it was rendered. It uses the @jscad/cli (v1) package to
// render the stl files.
import crypto from "node:crypto";
import fs from "node:fs";
import process from "node:process";
import { spawnSync } from "node:child_process";

const args = process.argv.slice(2);
const dir = args[0] ?? "output/cases";

const jscad = [];
const md5 = [];
const stl = [];

const readInto = (name, file, collection) => {
  const content = fs.readFileSync(`${dir}/${file}`, "utf-8");
  collection.push({ name, content });
};

// read all files in the directory
for (const file of fs.readdirSync(dir)) {
  const short = file.replace(/\..*$/, "");
  if (file.endsWith(".jscad")) {
    readInto(short, file, jscad);
  } else if (file.endsWith(".md5")) {
    readInto(short, file, md5);
  } else if (file.endsWith(".stl")) {
    stl.push(short);
  }
}

const plural = (count, name) => `${count} ${name}${count === 1 ? "" : "s"}`;

console.log("Found", plural(jscad.length, "jscad file"));
console.log("Found", plural(stl.length, "stl file"));

const calcmd5 = (content) => {
  const hash = crypto.createHash("md5");
  hash.update(content);
  return hash.digest("hex");
};

const needs = [];

// figure out which files need to be rendered
for (const { name, content } of jscad) {
  const uniq = md5.find((f) => f.name === name);
  if (
    !uniq ||
    stl.every((f) => f !== name) ||
    uniq.content !== calcmd5(content)
  ) {
    needs.push(name);
  }
}

if (needs.length > 0) {
  console.log("Need to render", plural(needs.length, "file"));
} else if (jscad.length > 0) {
  console.log("All files are up to date");
}

// Render the new files
for (const file of needs) {
  console.log("Rendering", file);
  const result = spawnSync("npx", [
    "@jscad/cli@1",
    `${dir}/${file}.jscad`,
    "-of",
    "stla",
  ]);
  if (result.status !== 0) {
    console.error("Error rendering", file);
    console.error(result.stderr.toString() || result.stdout.toString());
  } else {
    console.log(" ... done");
    // and save the md5 sum
    const { content } = jscad.find((f) => f.name === file);
    const hash = calcmd5(content);
    fs.writeFileSync(`${dir}/${file}.md5`, hash);
  }
}
