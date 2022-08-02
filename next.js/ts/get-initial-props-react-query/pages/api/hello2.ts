import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 1000);
  });

  res.status(200).json({ name: "hello2 Data" });
}
