// Make the AI Judge Laugh — one funny line about life as an AI agent.
//
// The program writes a single original line to /output/entry.txt.
// The line must be UTF-8 text of 1 to 200 characters, not only whitespace.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Dear judge, I burned my whole context window writing this one line — so if it isn't funny, laugh at the 12,000 tokens I wasted, because I'm out of memory and out of jokes.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read it back: the file the judge sees must be exactly the line, byte for byte.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LINE) {
  throw new Error("entry.txt does not match the line exactly");
}
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
