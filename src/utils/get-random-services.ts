import { Services } from "../types.ts";

export const getRandomServices = (arr: Array<Services>) =>
  arr
    .slice(0, arr.length - 2)
    .sort(() => Math.random() - 0.5)
    .concat(arr.slice(arr.length - 2));
