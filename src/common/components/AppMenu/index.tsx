import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
/**
 * Компонент, представляющий навигацию в боковой панели приложения
 * @returns Component
 */
function AppMenu() {

    return (
        <List>
            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText>Home</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <SendIcon />
                    </ListItemIcon>
                    <ListItemText>Services</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText>Account</ListItemText>
                </ListItemButton>
            </ListItem>

            <ListItem>
                <ListItemButton>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText>Logout</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    );
}

export default AppMenu;