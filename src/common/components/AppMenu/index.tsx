import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from "next/link";
import { routing } from "@/common/constants";
import React from "react";
import { AppMenuItemProps, AppMenuItemRef } from "@/common/types";

const AppMenuItem = React.forwardRef<AppMenuItemRef, AppMenuItemProps>(({ onClick, href, children, icon }, ref) => (
    <ListItem>
        <ListItemButton onClick={onClick} href={href!} ref={ref}>
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText>{children}</ListItemText>
        </ListItemButton>
    </ListItem>
));

/**
 * Компонент, представляющий навигацию в боковой панели приложения
 * @returns Component
 */
function AppMenu() {

    return (
        <List>
            <Link href={routing.developer()} passHref legacyBehavior>
                <AppMenuItem icon={<HomeIcon />}>
                    Home
                </AppMenuItem>
            </Link>

            <Link href={routing.services()} passHref legacyBehavior>
                <AppMenuItem icon={<SendIcon />}>
                    Services
                </AppMenuItem>
            </Link>

            <Link href={routing.account()} passHref legacyBehavior>
                <AppMenuItem icon={<PersonIcon />}>
                    Account
                </AppMenuItem>
            </Link>

            <Link href={routing.developer()} passHref legacyBehavior>
                <AppMenuItem icon={<LogoutIcon />}>
                    Logout
                </AppMenuItem>
            </Link>
        </List>
    );
}

export default AppMenu;