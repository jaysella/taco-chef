import rawTacos from "@/data/full_tacos.json" assert { type: "JSON" };
import { transformTaco } from "@/lib/transformTaco";
import { RawTaco } from "@/types/rawTacos";
import { ErrorResponse, TacoResponse } from "@/types/responses";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TacoResponse | ErrorResponse>
) {
  // extract slug from request
  const { slug } = req.query;

  // find taco by slug
  const rawTaco: RawTaco | null = rawTacos.filter((t) => slug === t.slug)[0];

  // return error if taco not found
  if (!rawTaco) {
    res.status(404).json({ error: "The requested taco does not exist." });
  }

  // transform taco
  const taco: TacoResponse = transformTaco(rawTaco);

  // return response
  res.status(200).json(taco);
}
