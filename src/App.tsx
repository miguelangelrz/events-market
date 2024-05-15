import EventsList from "./views/EventsList/EventsList.tsx";
import { Box, Container } from "@mui/material";

function App() {
  return (
    <Box p={3}>
      <Container maxWidth="sm">
        <EventsList />
      </Container>
    </Box>
  );
}

export default App;
