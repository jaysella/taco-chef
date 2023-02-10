import rawTacos from "@/data/full_tacos.json" assert { type: "JSON" };
import { filterTacoByTag } from "@/lib/filterByTag";
import { transformTaco } from "@/lib/transformTaco";
import { TacoResponse } from "@/types/responses";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TacoResponse[]>
) {
  const { vegetarian, vegan } = req.query;
  let tacos: TacoResponse[] = [];

  // filter tacos by tags
  let filteredTacos = filterTacoByTag(
    rawTacos,
    vegetarian === "true",
    vegan === "true"
  );

  // iterate through each taco
  for (const taco in rawTacos) {
    tacos.push(transformTaco(filteredTacos[taco]));
  }

  // return response
  res.status(200).json(tacos);
}
