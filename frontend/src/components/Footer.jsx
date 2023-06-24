import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <div>
        <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit"> Este es el footer </Typography>
      </Toolbar>
    </AppBar>
    </div>
  )
}

export default Footer
