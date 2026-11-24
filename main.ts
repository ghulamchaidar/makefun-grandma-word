// One Word From Grandma: exactly one word, the way grandma would text about AI.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Grandma spells it the way she hears it: three syllables, one word, no spaces.
const line = ['chat', 'gee', 'pee'].join('');

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), line);
