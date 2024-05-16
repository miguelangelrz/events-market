import {MarketSelection, UserMarketSelection} from "../types/MarketSelection.ts";
import {Market} from "../types/Market.ts";
import {SportEvent} from "../types/SportEvent.ts";

type GenerateUseSelectionFunction = (
  s: MarketSelection,
  m: Market,
  e: SportEvent,
) => UserMarketSelection;

const generateUserSelection: GenerateUseSelectionFunction = (
  selection: MarketSelection,
  market: Market,
  event: SportEvent,
) => {
  return {
    ...selection,
    marketId: market.id,
    marketName: market.name,
    eventId: event.id,
    eventName: event.name,
  };
};

export default generateUserSelection;