import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link to="/" color="inherit">
          MEDINA-NDFS
        </Link>{' '}
        {new Date().getFullYear()}
        {'. Built with '}
        <Link to="/" color="inherit">
          Material-UI.
        </Link>
      </Typography>
    );
  }