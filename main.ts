// A news-image-20261125 entry (Node 22, standard library only).
//
// The entry is a front page summing up Wednesday 25 November 2026 in one
// image: the file entry.png beside this program, laid out in HTML/CSS and
// rasterised once with headless Chromium, with a generated photograph of a
// burning tanker as the lead visual and every word of text set in the layout
// itself. The program copies that image to /output/entry.png.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The copy is byte-for-byte: two runs write identical files.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
