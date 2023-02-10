import rawSeasonings from "@/data/seasonings.json" assert { type: "JSON" };
import { filterByTag } from "@/lib/filterByTag";
import { ComponentResponse } from "@/types/responses";
import markdownToTxt from "markdown-to-txt";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComponentResponse[]>
) {
  const { vegetarian, vegan } = req.query;

  let seasonings: ComponentResponse[] = filterByTag(
    rawSeasonings,
    vegetarian === "true",
    vegan === "true"
  ) as ComponentResponse[];

  for (const seasoning in seasonings) {
    seasonings[seasoning].recipe_text = markdownToTxt(
      seasonings[seasoning].recipe
    );
  }

  // return response
  res.status(200).json(seasonings);
}
