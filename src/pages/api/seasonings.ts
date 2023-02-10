import rawSeasonings from "@/data/seasonings.json" assert { type: "JSON" };
import { filterByTag } from "@/lib/filterByTag";
import { ComponentResponse } from "@/types/responses";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ComponentResponse[]>
) {
  const { vegetarian, vegan } = req.query;

  const seasonings: ComponentResponse[] = filterByTag(
    rawSeasonings,
    vegetarian === "true",
    vegan === "true"
  );

  // return response
  res.status(200).json(seasonings);
}
