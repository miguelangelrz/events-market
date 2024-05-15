import {
  Box,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

function EventCard() {
  return (
    <Box bgcolor="violet">
      <Typography variant="h2">Madrid vs Barcelona</Typography>

      <Typography variant="body2" color="textSecondary">
        Team to Win
      </Typography>

      <ToggleButtonGroup>
        <ToggleButton value="1">Real madrid</ToggleButton>
        <ToggleButton value="2">Barcelona</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
}

export default EventCard;
