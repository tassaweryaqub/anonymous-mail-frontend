// Import BrowserRouter
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";

// CSS
import "./main.css";


// Pages
import Home from "../src/Home"; 
import SignUp from "./component/signupmap/signup"; 
import Login from "./component/loginmap/login"; 
import verifyLogin from "./component/loginmap/verifyLogin"; 
import verifyEmail from "./component/loginmap/verifyEmail"; 
import Dashboard from "./component/dashboardmap/dashboard"; 



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1)
  }
}));

export default function App() {
  const classes = useStyles();

  let background = '#ff5200';
  return ( <Router>   
    
    
        <Switch> 
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={SignUp} /> 
          <Route path='/login' component={Login} /> 
          <Route path= '/verifyLogin' component={verifyLogin} /> 
          <Route path= '/verifyEmail' component={verifyEmail} />
          <Route path= '/Dashboard' component={Dashboard} /> 

      
        </Switch>
 
       </Router>
  );
}


// bij Switch Alle route pathes neerzetten 