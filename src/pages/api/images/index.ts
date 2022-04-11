import jwt from "jsonwebtoken";
import getConfig from "next/config";

import { apiHandler } from "../../../helpers/api";
import { NextApiRequest, NextApiResponse } from "next";
import { imageRepository } from "../../../repositories";

export default apiHandler(handler);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      await getImages();
      return;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getImages() {
    const images = await imageRepository.getRandomImage();
    console.log();
    res.json(images.data);
  }
}
