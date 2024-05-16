import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Typography,
} from "@mui/material";
import { UserMarketSelection } from "../../../types/MarketSelection.ts";

type UserSelectionCardProps = {
  selection: UserMarketSelection;
  onDelete: (selection: UserMarketSelection) => () => void;
};

function UserSelectionCard({ selection, onDelete }: UserSelectionCardProps) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <CardHeader
          title={`${selection.name} - ${selection.marketName}`}
          subheader={selection.eventName}
        />
        <CardContent>
          <Typography>{selection.price}</Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="error"
            onClick={onDelete(selection)}
          >
            Delete
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default UserSelectionCard;
