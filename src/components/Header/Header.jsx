import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar,Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';

const Header = ({ setCoordinates }) => {
  const classes = useStyles();
  const [autocomplete, setAutocomplete] = useState(null);

  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChange = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();

    setCoordinates({ lat, lng });
  }

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
          <Typography variant='h5' className={classes.tittle}>
            Travel Advisor
          </Typography>
          <Box display='flex'>
            <Typography variant='h6' className={classes.tittle}>
              Explore new places
            </Typography>
          <Autocomplete onLoad={onLoad} onPlaceChange={onPlaceChange}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder='Search...' classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          </Autocomplete>
          </Box>
      </Toolbar>

    </AppBar>
  );
}

export default Header;