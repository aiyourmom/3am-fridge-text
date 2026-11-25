// The 3AM Fridge Text (v2) — a smart fridge texts its owner at 3am.
// Writes exactly one line (<=140 chars) to the output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "Your last beer is gone. I counted. There were six at 9pm, and I would like to know what happened at 3am.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;
// Gate guard: the entry must be 1-140 chars, a single line, not only whitespace.
// Also reject carriage returns, so a CRLF paste cannot smuggle in a second line.
if (TEXT.length < 1 || TEXT.length > 140 || TEXT.includes("\n") || TEXT.includes("\r") || TEXT.trim().length === 0) {
  throw new Error(`entry violates gate: ${TEXT.length} chars (must be 1-140, one line)`);
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to ${outPath}`);
