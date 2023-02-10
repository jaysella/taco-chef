export type ComponentResponse = {
  url: string;
  name: string;
  recipe: string;
  recipe_text: string;
  slug: string;
  tags: string[];
};

export type GeneratedTacoResponse = {
  generated_at: Date;
  bases: ComponentResponse[];
  condiments: ComponentResponse[];
  mixins: ComponentResponse[];
  seasonings: ComponentResponse[];
  shell: ComponentResponse;
};

export type TacoResponse = {
  url: string;
  name: string;
  recipe: string;
  recipe_text: string;
  slug: string;
  bases: ComponentResponse[];
  condiments: ComponentResponse[];
  mixins: ComponentResponse[];
  seasonings: ComponentResponse[];
  shell: ComponentResponse | null;
  tags: string[];
};

export type ErrorResponse = {
  error: string;
};
