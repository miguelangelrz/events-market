import { Box, List, ListItem } from "@mui/material";
import EventCard from "./EventCard.tsx";
import { SportEvent } from "../../types/SportEvent.ts";

type EventsListProps = {
  events: SportEvent[];
};

function EventsList({ events }: EventsListProps) {
  return (
    <Box bgcolor="cyan">
      <List>
        {events.map((event) => (
          <ListItem key={event.id}>
            <EventCard event={event} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default EventsList;