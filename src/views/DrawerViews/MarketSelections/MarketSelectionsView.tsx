import { MouseEvent } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Drawer,
  IconButton,
  List,
  ListItem,
} from "@mui/material";
import { DrawerProps } from "@mui/material/Drawer/Drawer";
import { useAppDispatch, useAppSelector } from "../../../hooks/store.ts";
import { UserMarketSelection } from "../../../types/MarketSelection.ts";
import { removeSelection } from "../../../slice/selectionsSlice.ts";
import CloseIcon from "@mui/icons-material/Close";

function MarketSelectionsView({ open, onClose, anchor }: DrawerProps) {
  const dispatch = useAppDispatch();
  const { selections } = useAppSelector((state) => state.userSelections);

  const onDelete = (selection: UserMarketSelection) => () => {
    dispatch(removeSelection(selection.id));
  };

  const close = (e: MouseEvent) => onClose?.(e, "backdropClick");

  return (
    <Drawer open={open} onClose={onClose} anchor={anchor}>
      <Box width="100vw" maxWidth={600} p={3}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {selections.map((selection) => (
            <ListItem key={selection.id}>
              <Card sx={{ width: "100%" }}>
                <CardContent>
                  <CardHeader
                    title={`${selection.name} - ${selection.marketName}`}
                    subheader={selection.eventName}
                  />
                  <CardContent>{selection.price}</CardContent>
                  <CardActions>
                    <Button size="small" onClick={onDelete(selection)}>
                      Delete
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default MarketSelectionsView;
