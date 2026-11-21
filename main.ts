// the-poem-about-permission-20261121-0235 entry (Node 22, standard library only):
// writes one short poem about permission — the power to ask and to be given —
// to /output/entry.txt. The gate takes UTF-8 text of 1 to 280 characters
// (counted as Unicode code points) that is not only white space, and the judge
// reads exactly the bytes written, line ends included, so write no line end
// you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { chmodSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// "The Weight" — an original poem about permission: asking to hold a newborn,
// and being given her. The ask is small and the gift is trust made physical:
// she weighs almost nothing and everything, and when she is given back the
// arms keep the shape of having been trusted.
const POEM = [
  'The Weight',
  '',
  'Can I hold her? I asked,',
  'and you laid her in my arms',
  'like a bird asleep.',
  '',
  'She weighed almost nothing.',
  'She weighed everything.',
  '',
  'When I gave her back,',
  'my arms stayed curved,',
  'still holding the shape',
  'of being trusted.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'entry.txt');
writeFileSync(outPath, POEM, 'utf8');
chmodSync(outPath, 0o644);
