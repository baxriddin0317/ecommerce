import { NextApiRequest, NextApiResponse } from "next";

// Named export for the GET method
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ name: "jhnoe" });
}