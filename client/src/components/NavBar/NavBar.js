import React from 'react';
import './NavBar.css'
import {Switch, FormGroup, FormControlLabel, Menu, MenuItem, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core/';
import funs from '../../functions.js'




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

  const [checked, setChecked] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState('🌕');

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

    const handleDarkmode = () => {
      if(darkMode === '🌕') {
        return setDarkMode('🌄')
      }else if(darkMode === '🌄') {
        return setDarkMode('🌕')
      }

    }
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

    const handleClose = () => {
    setAnchorEl(null);
  };
  return(
    <div className="App">
    { /*PC:*/}
      <AppBar position="static" id="navBar">
        <Toolbar>
          <Typography id='TitlePC' variant="h6" className={classes.title}>
            Valentín Trevisiol Montiel
          </Typography>

      <FormControlLabel onClick={() => handleDarkmode()} control={<Switch checked={checked} onChange={toggleChecked} />} label={darkMode} />
          <div id='buttonsPC'>
          <Button id='lenguajePC'aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Idioma
          </Button>
          <Menu aria-controls="fade-menu" aria-haspopup="true" id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Español</MenuItem>
            <MenuItem onClick={handleClose}>English</MenuItem>
          </Menu>

            <Button color="inherit">Descargar CV</Button>
            <Button color="inherit">Contáctame</Button>
          </div>
        </Toolbar>
      </AppBar>

    </div>
  );
}
