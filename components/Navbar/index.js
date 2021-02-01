import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Grid,
  Hidden,
  IconButton,
  Tooltip,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import NoficitationsIcon from "@material-ui/icons/Notifications";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeft from "@material-ui/icons/ChevronLeft";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const onDrawerToggle = () => {
    setOpen(!open);
  };

  const drawer = (
    <div>
      <div>
        <IconButton onClick={onDrawerToggle}>
          <ChevronLeft />
        </IconButton>
      </div>
      <div>
        <List>
          <ListItem>
            <ListItemText>Page 2</ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>Page 2</ListItemText>
            <List>
              <ListItem>
                <ListItemText>Subpage 1</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>Subpage 2</ListItemText>
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            <ListItemText>Page 3</ListItemText>
          </ListItem>
        </List>
      </div>
    </div>
  );

  return (
    <nav>
      {/* <Hidden smUp implementation="js">
        <NavMenu
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
        />
      </Hidden> */}
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
      <Drawer
        variant="temporary"
        open={open}
        className={styles.drawer}
        color="primary"
      >
        {drawer}
      </Drawer>
    </nav>
  );
}
