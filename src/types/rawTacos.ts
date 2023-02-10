export type RawComponent = {
  url: string;
  name: string;
  recipe: string;
  slug: string;
  seasoning_slugs?: string[];
  tags: string[];
};

export type RawTaco = {
  url: string;
  name: string;
  recipe: string;
  slug: string;
  base_slugs: string[];
  condiment_slugs: string[];
  mixin_slugs: string[];
  seasoning_slugs: string[];
  shell_slug: string | null;
  tags: string[];
};
