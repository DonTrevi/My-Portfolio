import React from 'react';
import {AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function NavBar(){
    const classes = useStyles();
  return(
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Valentín Trevisiol Montiel
          </Typography>
          <Button color="inherit">Acerca de mi</Button>
          <Button color="inherit">Estudios</Button>
          <Button color="inherit">Contáctame</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
