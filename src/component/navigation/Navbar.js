import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../img/Icon.png"; 
import "../navigation/navbar.css";
import { Router } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
  
}));



export default function NavBar() {
  const klassen = useStyles();
 

  return (

    <div className={klassen.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={klassen.menuButton}
            color="inherit"
            aria-label="menu"
          />
          <Typography variant="h6" className={klassen.title}>
            <img classname="logo" src={logo} width="50" height="45" alt="logo" />
          </Typography>
          <Button color="inherit"><a href="../../Home.js">Home</a></Button>
          <Button color="inherit">SignUp</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
  
        
    </div>

    
  );
}



