export type ComponentResponse = {
  url: string;
  name: string;
  recipe: string;
  slug: string;
  tags: string[];
};

export type TacoResponse = {
  url: string;
  name: string;
  recipe: string;
  slug: string;
  bases: ComponentResponse[];
  condiments: ComponentResponse[];
  mixins: ComponentResponse[];
  seasonings: ComponentResponse[];
  shell: ComponentResponse | null;
};

export type ErrorResponse = {
  error: string;
};
