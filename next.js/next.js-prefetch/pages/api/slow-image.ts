import fs from "fs";
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";

// 캐시되지 않도록 헤더를 조정합니다.
export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  // 캐시되지 않도록 헤더를 조정합니다.
  res.setHeader("Cache-Control", "no-store, max-age=0");

  const imagePath = path.join(process.cwd(), "public", "slow-image.jpg");

  if (fs.existsSync(imagePath)) {
    // prefetch가 미리 잘 확보가 되는지 확인하기 위해서 기다립니다.
    await new Promise((resolve) => setTimeout(resolve, 5_000));

    const file = fs.readFileSync(imagePath);
    res.setHeader("Content-Type", "image/jpeg");
    res.send(file);
    return;
  }

  res.status(404).send("Not Found");
}
