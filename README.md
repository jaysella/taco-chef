# Taco Chef for Oasis Hack Session 3, Spring 2023

Sample app built with Next.js to provide API endpoints for teaching React and API integration skills at Oasis. See the related repository [here](https://github.com/jaysella/tacos-oasis-hs3-sp23).

## Demo

The API is available at [here](https://tacos.girocibo.com/api/tacos). See the [API Endpoints](#api-endpoints) section below.

## API Endpoints

### GET `/tacos`

**Response Type**: `TacoResponse[]`

Returns a JSON array of pre-defined taco combinations. Optional `vegan` and `vegetarian` query parameters can be applied to filter the response.

### GET `/tacos/generate`

**Response Type**: `GeneratedTacoResponse`

Returns a randomly generated taco.

### GET `/tacos/:slug`

**Response Type**: `TacoResponse | ErrorResponse`

Looks up a pre-defined taco by its `slug` and returns the requested taco. If the specified taco does not exist, an error is returned.

### GET `/seasonings`

**Response Type**: `ComponentResponse[]`

Returns a JSON array of all available seasonings. Optional `vegan` and `vegetarian` query parameters can be applied to filter the response.

## Response Types

### ComponentResponse

```ts
{
  url: string;
  name: string;
  recipe: string;
  recipe_text: string;
  slug: string;
  tags: string[];
}
```

### TacoResponse

```ts
{
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
}
```

### GeneratedTacoResponse

```ts
{
  generated_at: Date;
  bases: ComponentResponse[];
  condiments: ComponentResponse[];
  mixins: ComponentResponse[];
  seasonings: ComponentResponse[];
  shell: ComponentResponse;
}
```

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
