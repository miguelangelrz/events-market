import { List, ListItem } from "@mui/material";
import { DrawerProps } from "@mui/material/Drawer/Drawer";
import { useAppDispatch, useAppSelector } from "../../../hooks/store.ts";
import { UserMarketSelection } from "../../../types/MarketSelection.ts";
import { removeSelection } from "../../../slice/selectionsSlice.ts";
import UserSelectionCard from "./UserSelectionCard.tsx";
import RightSideDrawer from "../../../components/Drawer/RightSideDrawer.tsx";

function MarketSelectionsView({ open, onClose, anchor }: DrawerProps) {
  const dispatch = useAppDispatch();
  const { selections } = useAppSelector((state) => state.userSelections);

  const onDelete = (selection: UserMarketSelection) => () => {
    dispatch(removeSelection(selection.id));
  };

  return (
    <RightSideDrawer open={open} onClose={onClose} anchor={anchor}>
      <List className="user-selections-list">
        {selections.map((selection) => (
          <ListItem key={selection.id}>
            <UserSelectionCard selection={selection} onDelete={onDelete} />
          </ListItem>
        ))}
      </List>
    </RightSideDrawer>
  );
}

export default MarketSelectionsView;
