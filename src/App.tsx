import EventsList from "./views/EventsList/EventsList.tsx";
import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("https://run.mocky.io/v3/5fff4edb-8f5c-4dd6-a305-2935268be086")
      .then((response) => response.json())
      .then((response) => setEvents(response));
  }, []);

  return (
    <Box p={3}>
      <Container maxWidth="sm">
        <EventsList events={events} />
      </Container>
    </Box>
  );
}

export default App;
