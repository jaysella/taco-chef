import { RawComponent, RawTaco } from "@/types/rawTacos";

export function filterByTag(
  components: RawComponent[] | RawTaco[],
  vegetarian: boolean,
  vegan: boolean
): RawComponent[] | RawTaco[] {
  return components.filter((c: RawComponent | RawTaco) => {
    if (vegetarian && vegan) {
      return c.tags.includes("vegetarian") && c.tags.includes("vegan");
    } else if (vegetarian) {
      return c.tags.includes("vegetarian");
    } else if (vegan) {
      return c.tags.includes("vegan");
    } else {
      return c;
    }
  });
}

export function filterTacoByTag(
  components: RawTaco[],
  vegetarian: boolean,
  vegan: boolean
): RawTaco[] {
  return filterByTag(components, vegetarian, vegan) as RawTaco[];
}
