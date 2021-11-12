import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { makeStyles } from '@mui/styles';
import Link from '@mui/material/Link';

import SearchBar from '../SearchBar';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  },
});

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Box sx={{}}>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/' underline='hover' color='inherit'>
              PROSHOP
            </Link>
          </Typography>

          <SearchBar />

          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <LoginIcon /> Login
          </IconButton>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
          >
            <ShoppingCartIcon /> Cart
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
