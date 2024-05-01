import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const Loading = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {/* Placeholder 1 */}
      <Paper
        elevation={0}
        style={{
          width: 300,
          padding: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          filter: 'blur(10px)',
          marginBottom: 20,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Loading Post...
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </Typography>
      </Paper>

      {/* Placeholder 2 */}
      <Paper
        elevation={0}
        style={{
          width: 300,
          padding: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          filter: 'blur(8px)',
          marginBottom: 20,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Loading Post...
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </Typography>
      </Paper>

      {/* Placeholder 3 */}
      <Paper
        elevation={0}
        style={{
          width: 300,
          padding: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          filter: 'blur(6px)',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Loading Post...
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Loading;
