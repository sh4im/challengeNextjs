import { fetchWrapper } from "../helpers";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();
import { Image } from "models/image.model";
class ImageService {
  getImages(): Promise<Image[]> {
    console.log("getImages");
    return fetchWrapper.get(`${publicRuntimeConfig.apiUrl}/images`);
  }
}

export const imagesService = new ImageService();
