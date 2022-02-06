import React from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, IconButton, InputAdornment, } from "@material-ui/core";
import useStyles from './styles.js';
import { useState } from "react"
import { useDispatch } from 'react-redux';
 import { login } from '../../Redux/Actions/AuthAction.js'; 
 import { useNavigate } from 'react-router';


const Home = () => {
  const navigate=useNavigate()
  const classes = useStyles();
  const dispatch=useDispatch();
  const [user, setUser] = useState({ email: " ", name: " " })
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(login(user));
    setUser({ email: " ", name: " "})
    navigate('/posts')
  }

  return (
    <Paper className={classes.paper} elevation={5}>

      <Container>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={12}>
              <TextField
                onChange={(event)=>setUser({...user,email:event.target.value})}
                label="email"
                type="email"
                fullWidth

              />
            </Grid>
            <Grid item xs={6} md={12}>
              <TextField
                style={{ position: "relative" }}
                label="name"
                fullWidth
                onChange={(event)=>setUser({...user,name:event.target.value})}

              />

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </Grid>
        </form>
      </Container>
    </Paper>)
};
export default Home;