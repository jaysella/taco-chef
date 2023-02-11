// import data
import rawBases from "@/data/base_layers.json" assert { type: "JSON" };
import rawCondiments from "@/data/condiments.json" assert { type: "JSON" };
import rawMixins from "@/data/mixins.json" assert { type: "JSON" };
import rawSeasonings from "@/data/seasonings.json" assert { type: "JSON" };
import rawShells from "@/data/shells.json" assert { type: "JSON" };

// import types
import { RawTaco } from "@/types/rawTacos";
import { ComponentResponse, TacoResponse } from "@/types/responses";

import markdownToTxt from "markdown-to-txt";

function expandComponent(
  rawComponents: any,
  slugs: string[]
): ComponentResponse[] {
  let components: ComponentResponse[] = [];
  for (const i in slugs) {
    const component = rawComponents.filter((c: any) => c.slug === slugs[i])[0];

    if (component) {
      component.recipe_text = markdownToTxt(component.recipe);
      components.push(component);
    }
  }

  return components;
}

export function transformTaco(rawTaco: RawTaco): TacoResponse {
  let shell: ComponentResponse | null = null;

  if (rawTaco.shell_slug) {
    shell = rawShells.filter(
      (s: any) => s.slug === rawTaco.shell_slug
    )[0] as ComponentResponse;

    if (shell) {
      shell.recipe_text = markdownToTxt(shell.recipe);
    }
  }

  const bases = expandComponent(rawBases, rawTaco.base_slugs);
  const condiments = expandComponent(rawCondiments, rawTaco.condiment_slugs);
  const mixins = expandComponent(rawMixins, rawTaco.mixin_slugs);
  const seasonings = expandComponent(rawSeasonings, rawTaco.seasoning_slugs);

  return {
    name: rawTaco.name,
    slug: rawTaco.slug,
    recipe: rawTaco.recipe,
    recipe_text: markdownToTxt(rawTaco.recipe),
    url: rawTaco.url,
    bases,
    condiments,
    mixins,
    seasonings,
    shell: shell || null,
    tags: rawTaco.tags,
  };
}
