import { Box, List, ListItem } from "@mui/material";
import EventCard from "./EventCard.tsx";
import { SportEvent } from "../../types/SportEvent.ts";

type EventsListProps = {
  events: SportEvent[];
};

function EventsList({ events }: EventsListProps) {
  return (
    <Box>
      <List>
        {events
          .filter((e) => e.markets.length !== 0)
          .map((event) => (
            <ListItem key={event.id}>
              <EventCard event={event} />
            </ListItem>
          ))}
      </List>
    </Box>
  );
}

export default EventsList;
