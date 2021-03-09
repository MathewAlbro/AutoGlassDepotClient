import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import {
  createStyles,
  makeStyles,
  Theme,
  useTheme,
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import theme from "./Theme";
import "./../CSS/Header.css";

import Customer from "../containers/Customer";
import Partner from "../containers/Partner";
import About from "../containers/About";
import Splash from "../../src/containers/Splash";
import Admin from '../containers/Admin';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      // backgroundColor: theme.palette.secondary,
    },
    title: {
      
    },
    // Button: {
    //   justifyContent: end,
    // }
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>

            <Link to="/Customer" href="#text-buttons" color="secondary">
              <Typography variant="h6" className={classes.title}>
                Get a Quote{" "}
              </Typography>
            </Link>

            <Link to="/Partner" href="#text-buttons" color="secondary">
              <Typography variant="h6" className={classes.title}>
                Insurance Partners
              </Typography>
            </Link>

            <Link to="/About" color="secondary">
              <Typography variant="h6" className={classes.title}>
                About
              </Typography>
            </Link>


          <Link to="/" color="secondary">
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
            </Link>

            <Link to= "/Admin" className='Login' justify-content= 'flex-end'>Login</Link>

        </Toolbar>
      </AppBar>

      <div>
        <Switch>
          <Route exact path="/Customer">
            <Customer />
          </Route>

          <Route exact path="/Partner">
            <Partner />
          </Route>

          <Route exact path="/About">
            <About />
          </Route>

          <Route exact path="/Admin">
            <Admin />
          </Route>

          <Route exact path="/">
            <Splash />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
