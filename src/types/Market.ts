import { MarketSelection } from "./MarketSelection.ts";

export type Market = {
  id: string;
  name: string;
  selections: MarketSelection[];
};
