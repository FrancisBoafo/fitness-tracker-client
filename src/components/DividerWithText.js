import React from 'react';
import { Divider, Typography } from '@mui/material';

const DividerWithText = ({ children }) => (
  <div>
    <Divider />
    <Typography>{children}</Typography>
    <Divider />
  </div>
);

export default DividerWithText;
