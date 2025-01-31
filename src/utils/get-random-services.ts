import { Services } from "../types.ts";

export const getRandomServices = (arr: Array<Services>) =>
  arr.sort(() => Math.random() - 0.5);
