import {
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { SportEvent } from "../../types/SportEvent.ts";
import {
  MarketSelection,
  UserMarketSelection,
} from "../../types/MarketSelection.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store.ts";
import { addSelection, removeSelection } from "../../slice/selectionsSlice.ts";
import { Market } from "../../types/Market.ts";
import { useAppSelector } from "../../hooks/store.ts";
import generateuserSelection from "../../utils/generateuserSelection.ts";

type EventCardProps = {
  event: SportEvent;
};

function isSelectionSelected(
  selectionId: string,
  selections: UserMarketSelection[],
): boolean {
  const selectedIds = selections.map((s) => s.id);
  return selectedIds.includes(selectionId);
}

function getCurrentMarketSelectionId(
  marketId: string,
  selections: UserMarketSelection[],
): string | null {
  const currentMarketSelection = selections.find(
    (s) => s.marketId === marketId,
  );

  return currentMarketSelection?.id || null;
}

function EventCard({ event }: EventCardProps) {
  const { selections } = useAppSelector((state) => state.userSelections);
  const dispatch = useDispatch<AppDispatch>();

  const removeCurrentMarketSelection = (market: Market) => {
    const currentMarketSelectionId = getCurrentMarketSelectionId(
      market.id,
      selections,
    );
    if (currentMarketSelectionId) {
      dispatch(removeSelection(currentMarketSelectionId));
    }
  };
  const toggleSelection =
    (selection: MarketSelection) =>
    (market: Market) =>
    (event: SportEvent) =>
    () => {
      if (isSelectionSelected(selection.id, selections)) {
        removeCurrentMarketSelection(market);
        return;
      }

      removeCurrentMarketSelection(market);
      dispatch(addSelection(generateuserSelection(selection, market, event)));
    };

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={event.name} />

      <CardContent>
        <List>
          {event.markets.map((market) => (
            <ListItem key={market.id} sx={{ display: "block" }}>
              <Typography variant="body2" color="textSecondary">
                {market.name}
              </Typography>

              <ToggleButtonGroup>
                {market.selections.map((selection) => (
                  <ToggleButton
                    key={selection.id}
                    value={selection.id}
                    onClick={toggleSelection(selection)(market)(event)}
                    selected={isSelectionSelected(selection.id, selections)}
                  >
                    <Stack>
                      <Typography>{selection.name}</Typography>
                      <Typography>{selection.price}</Typography>
                    </Stack>
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}

export default EventCard;
