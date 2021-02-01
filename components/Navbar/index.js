import React, { useState, useEffect } from "react";
import styles from "../../styles/Home.module.css";
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  IconButton,
  Tooltip,
  SwipeableDrawer,
  Box,
} from "@material-ui/core";
import { makeStyles, useTheme, createStyles } from "@material-ui/core/styles";
import NoficitationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { UnfoldLessRounded } from "@material-ui/icons";

const drawerWidth = 240;

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    menu: {
      width: "100%",
    },
    menuItem: {
      listStyle: "none",
      fontWeight: "bold",
      color: "#fff",
    },
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
      background: "#3f51b5",
    },
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: "#fff",
    },
    listWrapper: {
      height: "80%",
    },
    closeIcon: {
      color: "#fff",
    },
  })
);

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const onDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <nav>
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                className={styles.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs>
              Home
            </Grid>
            <Grid item>
              <Tooltip title="Alerts">
                <IconButton color="inherit">
                  <NoficitationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        variant="temporary"
        open={open}
        classes={{ paper: classes.drawer }}
        color="primary"
        onClose={onDrawerToggle}
        onOpen={onDrawerToggle}
      >
        <div>
          <IconButton onClick={onDrawerToggle}>
            <ChevronLeft className={classes.closeIcon} />
          </IconButton>
        </div>
        <div className={classes.listWrapper}>
          <ul className={classes.menu}>
            <li className={classes.menuItem}>
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold" m={1}>
                  Page 1
                </Box>
              </Typography>
              <ul>
                <li className={classes.menuItem}>
                  <Typography variant="subtitle1">Subpage 1</Typography>
                </li>
                <li className={classes.menuItem}>
                  <Typography variant="subtitle1">Subpage 2</Typography>
                </li>
              </ul>
            </li>
            <li className={classes.menuItem}>
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold" m={1}>
                  Page 2
                </Box>
              </Typography>
            </li>
            <li className={classes.menuItem}>
              <Typography variant="subtitle1">
                <Box fontWeight="fontWeightBold" m={1}>
                  Page 3
                </Box>
              </Typography>
            </li>
          </ul>
        </div>
        <ul className={classes.menu}>
          <li className={classes.menuItem}>
            <Grid
              container
              alignItems="center"
              spacing={1}
              justify="flex-start"
              className
            >
              <Grid item>
                <Typography variant="subtitle1">Sign out</Typography>
              </Grid>
              <Grid item>
                <ExitToAppIcon />
              </Grid>
            </Grid>
          </li>
        </ul>
      </SwipeableDrawer>
    </nav>
  );
}
