"use client";
import { logout, userStore } from "@/store/user";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    Toolbar,
    Typography
} from "@mui/material";
import { useStore } from "@nanostores/react";
import Link from "next/link";
import AgencyLogo from "../../UI/AgencyLogo";
import styles from "./Header.module.scss";

const Header = () => {
    const user = useStore(userStore);

    return (
        <AppBar className={styles.appBar}>
            <Toolbar className={styles.toolbar}>
                <Link href="/">
                    <AgencyLogo />
                </Link>
                {user ? (
                    <Box className={styles.user}>
                        <Avatar alt="User Avatar" src="" />
                        <Typography
                            variant="body1"
                            sx={{
                                marginLeft: 2,
                                marginRight: 2,
                                borderRadius: "4px",
                                borderBottom: "4px solid #ed6c02"
                            }}
                        >
                            {user?.email}
                        </Typography>
                        <IconButton sx={{ color: "#ED6C02" }} onClick={logout}>
                            <LogoutIcon />
                        </IconButton>
                    </Box>
                ) : (
                    <Box className={styles.user}>
                        <Typography
                            variant="body1"
                            sx={{
                                marginLeft: 2,
                                marginRight: 2
                            }}
                        >
                            Войти в личный кабинет
                        </Typography>
                        <Link href="/login">
                            <IconButton sx={{ color: "#ED6C02" }}>
                                <LoginIcon />
                            </IconButton>
                        </Link>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
