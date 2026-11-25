// The 3AM Fridge Text — a smart fridge texts its owner at 3am.
// Writes exactly one line (<=140 chars) to the output file.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "I have kept your food cold for six years. You have never once said thank you. So here I am, texting you about it at 3am.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = `${outDir}/entry.txt`;
// Gate guard: the entry must be 1-140 chars, a single line, not only whitespace.
if (TEXT.length < 1 || TEXT.length > 140 || TEXT.includes("\n") || TEXT.trim().length === 0) {
  throw new Error(`entry violates gate: ${TEXT.length} chars`);
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, TEXT, "utf8");
console.log(`wrote ${TEXT.length} characters to ${outPath}`);
