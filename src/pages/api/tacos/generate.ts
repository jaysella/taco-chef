import { generateTaco } from "@/lib/generateTaco";
import { ErrorResponse, GeneratedTacoResponse } from "@/types/responses";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<GeneratedTacoResponse | ErrorResponse>
) {
  // generate random taco
  const taco: GeneratedTacoResponse = generateTaco();

  // return response
  res.status(200).json(taco);
}
