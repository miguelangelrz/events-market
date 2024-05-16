import { Box, Drawer, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerProps } from "@mui/material/Drawer/Drawer";
import { MouseEvent } from "react";

function RightSideDrawer({ open, onClose, children }: DrawerProps) {
  const close = (e: MouseEvent) => onClose?.(e, "backdropClick");

  return (
    <Drawer open={open} onClose={onClose} anchor="right">
      <Box width="100vw" maxWidth={600} p={3}>
        <Box display="flex" justifyContent="flex-end">
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Drawer>
  );
}

export default RightSideDrawer;
