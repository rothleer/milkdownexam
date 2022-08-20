import { defaultValueCtx, Editor } from "@milkdown/core";
import { nord } from "@milkdown/theme-nord";
import { commonmark } from "@milkdown/preset-commonmark";
import { emoji } from "@milkdown/plugin-emoji";
import { math } from '@milkdown/plugin-math';
import { RemarkPlugin } from '@milkdown/core';
import directive from 'remark-directive';

import 'katex/dist/katex.min.css';

const iframe = createNode(() => {

});

Editor.make()
  .config((ctx) => {
    ctx.set(defaultValueCtx, "# Milkdown :heartpulse: Vanilla");
  })
  .use(nord)
  .use(commonmark)
  .use(math)
  .use(emoji)
  .create();
function createNode(arg0: () => void) {
  throw new Error("Function not implemented.");
}

