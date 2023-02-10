// import data
import rawBases from "@/data/base_layers.json" assert { type: "JSON" };
import rawCondiments from "@/data/condiments.json" assert { type: "JSON" };
import rawMixins from "@/data/mixins.json" assert { type: "JSON" };
import rawSeasonings from "@/data/seasonings.json" assert { type: "JSON" };
import rawShells from "@/data/shells.json" assert { type: "JSON" };

// import types
import { RawComponent } from "@/types/rawTacos";
import { ComponentResponse, GeneratedTacoResponse } from "@/types/responses";

import markdownToTxt from "markdown-to-txt";

function selectRandom(options: RawComponent[]): RawComponent {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

export function generateTaco(): GeneratedTacoResponse {
  let base: ComponentResponse = selectRandom(rawBases) as ComponentResponse;
  base.recipe_text = markdownToTxt(base.recipe);

  let mixin: ComponentResponse = selectRandom(rawMixins) as ComponentResponse;
  mixin.recipe_text = markdownToTxt(mixin.recipe);

  let condiment: ComponentResponse = selectRandom(
    rawCondiments
  ) as ComponentResponse;
  condiment.recipe_text = markdownToTxt(condiment.recipe);

  let seasoning: ComponentResponse = selectRandom(
    rawSeasonings
  ) as ComponentResponse;
  seasoning.recipe_text = markdownToTxt(seasoning.recipe);

  let shell: ComponentResponse = selectRandom(rawShells) as ComponentResponse;
  shell.recipe_text = markdownToTxt(shell.recipe);

  return {
    generated_at: new Date(),
    bases: [base],
    mixins: [mixin],
    condiments: [condiment],
    seasonings: [seasoning],
    shell,
  };
}
