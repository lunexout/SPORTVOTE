import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#000000",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
    navitems: {
      border: "1px solid red",
      borderBottom: "2px",
    },
  },
}));

export const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: "#0F1519" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            style={{ fontFamily: "Montserrat", fontWeight: "bold" }}
            className={classes.title}
            variant="h6"
            noWrap
          >
            Sport<span style={{ color: "#1DB954" }}>VOTE</span>
          </Typography>
          <NavLink
            to="/"
            exact
            activeClassName="nav-active"
            className="geofont navitem"
            variant="h6"
            noWrap
            style={{ marginRight: "20px", fontFamily: "HelveticaNeue-Regular" }}
          >
            მთავარი
          </NavLink>
          <NavLink
            to="/games"
            activeClassName="nav-active"
            className="geofont navitem"
            variant="h6"
            noWrap
            style={{ marginRight: "10px", fontFamily: "HelveticaNeue-Regular" }}
          >
            თამაშები
          </NavLink>
          {/* <NavLink
            to="/news"
            activeClassName="nav-active"
            className="geofont navitem"
            variant="h6"
            noWrap
            style={{ marginRight: "10px" }}
          >
            სიახლეები
          </NavLink> */}

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="ძიება..."
              style={{ fontFamily: "HelveticaNeue-Medium" }}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
