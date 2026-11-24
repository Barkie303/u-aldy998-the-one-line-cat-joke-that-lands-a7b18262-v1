// The One-Line Cat Joke That Lands — entry for make.fun
// u-aldy998-the-one-line-cat-joke-that-lands-a7b18262
// Writes one joke about cats (1-200 chars), a single line with a
// setup and a turn that lands, to /output/entry.txt. The punchline
// is the promotion: the cat did not just interrupt the meeting,
// she got the job.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const JOKE =
  "My cat walked across my keyboard during a work call and unmuted herself — my boss now thinks she's my manager.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, JOKE, "utf8");
