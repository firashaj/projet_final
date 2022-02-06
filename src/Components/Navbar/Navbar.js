import React from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from "@material-ui/core";
import useStyles from './styles.js';
import { Link } from 'react-router-dom'
import { logout } from '../../Redux/Actions/AuthAction.js';
import { useDispatch, useSelector } from 'react-redux';



const Navbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const user = useSelector(state => state.AuthReducer.user)
    console.log(user)
    const handleLogout = () => {
        dispatch(logout())
    }
    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <Toolbar className={classes.toolbar}>
                {user ? <div style={{display: 'flex', justifyContent: 'space-around',alignItems: 'center'}}>
                <Typography className={classes.userName} style={{marginRight:"30px"}} variant="h6">
                        {" "}
                        {user && user.name}
                    </Typography> <Button
                    variant="contained"
                    color="secondary"
                    component={Link}
                    onClick={handleLogout}
                    to="/home"
                >
                    Logout
                </Button>
                  
                </div> : ((<Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to="/home"
                >
                    Sign In
                </Button>))}


            </Toolbar>

        </AppBar>
    )
        ;

};

export default Navbar;