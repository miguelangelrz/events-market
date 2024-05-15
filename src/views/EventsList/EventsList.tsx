import { Box, List, ListItem } from "@mui/material";
import EventCard from "./EventCard.tsx";

function EventsList() {
  return (
    <Box bgcolor="cyan">
      <List>
        <ListItem><EventCard /></ListItem>
        <ListItem><EventCard /></ListItem>
      </List>
    </Box>
  );
}

export default EventsList;
