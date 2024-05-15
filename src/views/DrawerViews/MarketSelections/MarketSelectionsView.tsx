import {
  Box, Button,
  Card, CardActions,
  CardContent,
  CardHeader,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { DrawerProps } from "@mui/material/Drawer/Drawer";

function MarketSelectionsView({ open, onClose, anchor }: DrawerProps) {
  return (
    <Drawer open={open} onClose={onClose} anchor={anchor}>
      <Box width="100vw" maxWidth={600}>
        <List>
          <ListItem>
            <Card sx={{width: "100%"}}>
              <CardContent>
                <CardHeader title="Real madrid - Team to win" />
                <CardContent>2.05</CardContent>
                <CardActions>
                  <Button size="small">Delete</Button>
                </CardActions>
              </CardContent>
            </Card>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
}

export default MarketSelectionsView;
