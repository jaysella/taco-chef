// import data
import rawBases from "@/data/base_layers.json" assert { type: "JSON" };
import rawMixins from "@/data/mixins.json" assert { type: "JSON" };
import rawCondiments from "@/data/condiments.json" assert { type: "JSON" };
import rawSeasonings from "@/data/seasonings.json" assert { type: "JSON" };
import rawShells from "@/data/shells.json" assert { type: "JSON" };
import { RawComponent } from "@/types/rawTacos";
import { GeneratedTacoResponse } from "@/types/responses";

function selectRandom(options: RawComponent[]): RawComponent {
  const index = Math.floor(Math.random() * options.length);
  return options[index];
}

export function generateTaco(): GeneratedTacoResponse {
  const base = selectRandom(rawBases);
  const mixin = selectRandom(rawMixins);
  const condiment = selectRandom(rawCondiments);
  const seasoning = selectRandom(rawSeasonings);
  const shell = selectRandom(rawShells);

  return {
    generated_at: new Date(),
    bases: [base],
    mixins: [mixin],
    condiments: [condiment],
    seasonings: [seasoning],
    shell,
  };
}
