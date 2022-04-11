import getConfig from "next/config";
import axios from "axios";
const { serverRuntimeConfig } = getConfig();
const accessKey = "axVTkbTjOePkMUQYDmHZeQu5c8FTzUKHnwLgIwOAtmY";
const url = (path: string) =>
  `https://api.unsplash.com${path}?client_id=${accessKey}`;
class ImageRepository {
  getRandomImage() {
    return axios.get(`${url("/photos/random")}&count=30`);
  }
}

export const imageRepository = new ImageRepository();
