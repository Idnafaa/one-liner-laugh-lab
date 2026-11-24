// One-Liner Laugh Lab — one funny line, at most 200 characters.
// The program writes exactly that line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My code works, but only when nobody is watching — it's shy, not buggy.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
// Keep the file exactly one line: trim stray whitespace, never exceed 200 chars.
const text = LINE.trim().slice(0, 200);
writeFileSync(`${outDir}/entry.txt`, text, "utf8");
console.log(`Wrote ${text.length} characters to ${outDir}/entry.txt`);
