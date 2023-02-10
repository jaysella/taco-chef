// import types
import { ComponentResponse, TacoResponse } from "@/types/responses";
import { RawTaco } from "@/types/rawTacos";

// import data
import rawBases from "@/data/base_layers.json" assert { type: "JSON" };
import rawCondiments from "@/data/condiments.json" assert { type: "JSON" };
import rawMixins from "@/data/condiments.json" assert { type: "JSON" };
import rawSeasonings from "@/data/seasonings.json" assert { type: "JSON" };
import rawShells from "@/data/shells.json" assert { type: "JSON" };

function expandComponent(
  rawComponents: any,
  slugs: string[]
): ComponentResponse[] {
  let components: ComponentResponse[] = [];
  for (const i in slugs) {
    const component = rawComponents.filter((c: any) => c.slug === slugs[i])[0];
    component && components.push(component);
  }

  return components;
}

export function transformTaco(rawTaco: RawTaco): TacoResponse {
  let shell = rawShells.filter((s: any) => s.slug === rawTaco.shell_slug)[0];

  const bases = expandComponent(rawBases, rawTaco.base_slugs);
  const condiments = expandComponent(rawCondiments, rawTaco.condiment_slugs);
  const mixins = expandComponent(rawMixins, rawTaco.mixin_slugs);
  const seasonings = expandComponent(rawSeasonings, rawTaco.seasoning_slugs);

  return {
    name: rawTaco.name,
    slug: rawTaco.slug,
    recipe: rawTaco.recipe,
    url: rawTaco.url,
    bases,
    condiments,
    mixins,
    seasonings,
    shell: shell || null,
  };
}
