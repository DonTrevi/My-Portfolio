import React from 'react';
import './NavBarMobile.css'
import {Switch, IconButton, FormGroup, FormControlLabel, Menu, MenuItem, AppBar, Toolbar, Typography, Button, makeStyles } from '@material-ui/core/';
import MoreVertIcon from '@material-ui/icons/MoreVert';



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

const options = [
  'Idioma',
  'Descargar CV',
  'Contáctame'
];

const ITEM_HEIGHT = 48;


export default function NavBarMobile(){
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState('🌕');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);


  const handleDarkmode = () => {
    if(darkMode === '🌕') {
      return setDarkMode('🌄')
    }else if(darkMode === '🌄') {
      return setDarkMode('🌕')
    }
  }
  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(event.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return(
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography id='TitlePC' variant="h6" className={classes.title}>
            Valentín Trevisiol
          </Typography>
          <FormControlLabel onClick={() => handleDarkmode()} control={<Switch checked={checked} onChange={toggleChecked} />} label={darkMode} />
          <IconButton
            id="menuButton"
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
            >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="long-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: '20ch',
              },
            }}
          >
          {options.map((option) => (
            <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
              {option}
            </MenuItem>
          ))}
          </Menu>
        </Toolbar>
      </AppBar>

    </div>
  );
}
