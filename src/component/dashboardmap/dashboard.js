import React from "react";

// Material-UI
import { makeStyles } from "@material-ui/core/styles";


// Image
import logo from "../../img/Icon.png";
import dbbord from "../../img/Rectangle 14.png"; 
import striped from "../../img/Drawer btn.png"; 
import homedash from "../../img/Home.png";
import line1 from "../../img/Line 10.png"; 
import block from "../../img/block-helper.png"; 
import secline from "../../img/Line 11.png"; 
import reply from "../../img/Reply.png"; 
import thirdline from "../../img/Line 12.png"; 
import trash from "../../img/spam 1.png"; 
import line4 from "../../img/Line 14.png"; 
import settings from "../../img/Settings icon.png"; 
import line5 from "../../img/Line 13.png"; 
import logout from "../../img/Logout icon.png"; 
import plus from "../../img/plus.png";
// CSS
import "../../main.css";

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

export default function ButtonAppBar() {
  const klassen = useStyles();

  return (
    <div className={klassen.root}>
        {/* Dashboard sectie*/ }
      <a href= "/"><img className= "db-logo" src={logo}  width="70" height="50" alt="logo" /></a>  
        <img className= "db-bord" src={dbbord} />  
            <img className= "stripedbtn" src={striped} /> {/* gestreepte button dashboard */}
            <a href= "#"><img className= "homedash" src={homedash} /></a> {/* home van dashboard */}
              <img className= "eerstelijn" src={line1} /> 
              <a href= "#"><img className= "block" src= {block} /></a>  {/* block logo dashboard */}
              <img className= "tweedelijn" src={secline} /> 
              <a href= "#"><img className= "reply" src={reply} /></a>  {/* antwoord logo*/ }
              <img className= "derdelijn" src={thirdline} /> 
              <a href= "#"><img className= "trash" src={trash} /></a>  {/*trash logo van dashboard */}
              <img className= "vierdelijn" src={line4} /> 
              <a href= "#"><img className= "settings" src={settings} /></a>  {/*settings logo van dashboard */}
              <img className= "vijfdelijn" src={line5} /> 
              <a href= "#"><img className= "logoutlogo" src={logout} /></a>  {/* logout logo van dashboard */}
              <a href= "#"><img className= "plusicon" src={plus} /></a>  {/* plus icoon van dashboard */}

            <p className= "get5">Get 5 latest Email Subjects</p>

            {/*aantallen voor inkomende emails, is tijdelijk totdat backend geïmplementeerd is*/}
           <p className= "inbox">Inbox: 250 emails </p>
           <p className= "trashtext">Trash: 25 mails </p>
           <p className= "readtext">Read: 5 emails </p>
           <p className= "unreaden">Unreaden: 245 emails </p>
           <p className= "labeltext">Labels: 5 </p>

      <h2 className="vl-dashboard">Overview</h2>

      </div>
  );
}