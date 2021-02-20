import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {makeStyles} from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';


function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
//See the properties of mixins from the docs-customization-default theme
    ...theme.mixins.toolbar,
    //marginBottom: "3em"   //If content not showing
  },
  logo: {
    height: "5em"   //Responsive Logo size
  },
  tabContainer: {
    marginLeft: "auto"  //Push Tabs to the right
  },
  tab: {
    ...theme.typography.tab,//Centralized some of the properties for the later use.See theme.js
    minWidth: 10,           //To remove extra spaces
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.estimate,
    marginLeft: "50px",
    marginRight: "25px",
    borderRadius: "50px",
    height: "45px",
  }
}))

const Header = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };  
//Active tab Refresh Fix
  useEffect(() => {
    if(window.location.pathname === '/' && value!=0){
      setValue(0);
    }
    else if(window.location.pathname === '/services' && value!=1){
      setValue(1);
    }
    else if(window.location.pathname === '/revolution' && value!=2){
      setValue(2);
    }
    else if(window.location.pathname === '/about' && value!=3){
      setValue(3);
    }
    else if(window.location.pathname === '/contact' && value!=4){
      setValue(4);
    }
    else if(window.location.pathname === '/estimate' && value!=5){
      setValue(5);
    }
  }, [value])

  return (
      <React.Fragment>
        <ElevationScroll>
        <AppBar>
            <Toolbar disableGutters>
              
                <img alt = "Company Logo" src={logo} className={classes.logo} />
                <Tabs value={value} onChange={handleChange} indicatorColor="secondary" className={classes.tabContainer}>
                  <Tab className={classes.tab} label="Home" component={Link} to="/" /> 
                  <Tab className={classes.tab} label="Services" component={Link} to="/services" />
                  <Tab className={classes.tab} label="The Revolution" component={Link} to="/revolution" />
                  <Tab className={classes.tab} label="About Us" component={Link} to="/about" />
                  <Tab className={classes.tab} label="Contact Us" component={Link} to="/contact" />
                </Tabs>

                <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate" >
                  Free Estimate
                </Button>
            </Toolbar>
        </AppBar>
        </ElevationScroll>
        /*created a little cusion underneath the toolbar to to pushes the hidden content
        undernesth the toolbar so that it can be seen in the screen
        
        */
        <div className = {classes.toolbarMargin} /> 
        </React.Fragment>
    )
}

export default Header
