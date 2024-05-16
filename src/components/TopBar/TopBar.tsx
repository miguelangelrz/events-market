import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MarketSelectionsView from "../../views/DrawerViews/MarketSelections/MarketSelectionsView.tsx";

function TopBar() {
  const [openDrawer, toggleDrawer] = useState(false);

  return (
    <>
      <MarketSelectionsView
        open={openDrawer}
        onClose={() => toggleDrawer(false)}
        anchor="right"
      />
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Betbetbet
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default TopBar;
