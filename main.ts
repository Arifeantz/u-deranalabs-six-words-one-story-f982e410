import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// One complete story in exactly six words.
// A rocking chair moves on its own, and the second sentence
// quietly tells you why that is strange: the person who used
// to sit there is gone. The reader fills in the absence.
const story = "Grandpa's chair rocked. Nobody sat there.";

// Guard: the brief demands exactly six words, so refuse to
// write anything else rather than silently ship a wrong count.
const words = story.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`expected exactly 6 words, got ${words.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), story + "\n", "utf8");
