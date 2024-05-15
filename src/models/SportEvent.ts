import { Market } from "./Market.ts";

export type SportEvent = {
  id: string;
  name: string;
  markets: Market[];
};
