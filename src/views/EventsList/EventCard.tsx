import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { SportEvent } from "../../models/SportEvent.ts";
import { Fragment } from "react";

type EventCardProps = {
  event: SportEvent;
};

function EventCard({ event }: EventCardProps) {

  // Because of requirements, when no markets the event shouldn't be rendered
  if (event.markets.length === 0) {
    return null;
  }

  return (
    <Box bgcolor="violet">
      <Typography variant="h2">{event.name}</Typography>

      {event.markets.map((market) => (
        <Fragment key={market.id}>
          <Typography variant="body2" color="textSecondary">
            {market.name}
          </Typography>

          <ToggleButtonGroup>
            {market.selections.map((selection) => (
              <ToggleButton key={selection.id} value={selection.id}>
                {selection.name}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Fragment>
      ))}
    </Box>
  );
}

export default EventCard;
