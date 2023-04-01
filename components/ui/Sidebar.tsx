import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material"
import { Box } from "@mui/system";

import InboxIcon from '@mui/icons-material/Inbox';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useContext } from "react";
import { UIContext } from '../../context/ui/UIContext';

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Draft']

export const Sidebar = () => {

  const { sideMenuOpen, closeSideMenu } = useContext(UIContext);

  return (
    <Drawer
        anchor="left"
        open={ sideMenuOpen }
        onClose={ closeSideMenu }
    >
        <Box sx={{ width: 250 }}>
            <Box sx={{ padding: '5px 10px' }}>
                <Typography variant="h4">Menu</Typography>
            </Box>
            <List>
                {menuItems.map( (text, index) => (
                    <ListItemButton key={ text }>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={ text }/>
                    </ListItemButton>
                ))}
            </List>

            <Divider/>

            <List>
                {menuItems.map( (text, index) => (
                    <ListItemButton  key={ text }>
                        <ListItemIcon>
                            <InboxIcon/>
                        </ListItemIcon>
                        <ListItemText primary={ text }/>
                    </ListItemButton>
                ))}
            </List>

        </Box>
        
    </Drawer>
  )
}
