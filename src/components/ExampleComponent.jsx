import React from 'react';
import './ExampleComponent.css';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  LinearProgress,
  Stack,
  Typography,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const topTasks = [
  'Review Q2 performance snapshot',
  'Resolve 3 delayed shipments',
  'Send weekly growth summary',
];

const ExampleComponent = () => {
  return (
    <Box className="example-widget" component="section">
      <Box className="widget-header">
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar sx={{ width: 32, height: 32, bgcolor: 'primary.main' }}>
            <TrendingUpIcon fontSize="small" />
          </Avatar>
          <Box>
            <Typography variant="overline" className="widget-kicker">
              Team Dashboard
            </Typography>
            <Typography variant="h5" className="widget-title">
              Weekly Operations
            </Typography>
          </Box>
        </Stack>
        <Chip label="+12.4% vs last week" color="success" size="small" />
      </Box>

      <Box className="metric-grid">
        <Box className="metric-card">
          <Typography className="metric-label">Revenue</Typography>
          <Typography variant="h4" className="metric-value">$48.2K</Typography>
          <Typography className="metric-caption">On track with target</Typography>
        </Box>
        <Box className="metric-card">
          <Stack direction="row" spacing={1} alignItems="center">
            <Inventory2Icon color="primary" fontSize="small" />
            <Typography className="metric-label">Fulfillment</Typography>
          </Stack>
          <Typography variant="h4" className="metric-value">93%</Typography>
          <LinearProgress variant="determinate" value={93} sx={{ mt: 1, borderRadius: 5, height: 8 }} />
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box>
        <Typography className="task-heading">Priority checklist</Typography>
        <Stack spacing={1.2}>
          {topTasks.map((task) => (
            <Stack className="task-row" key={task} direction="row" spacing={1.2} alignItems="center">
              <CheckCircleIcon color="success" fontSize="small" />
              <Typography variant="body2">{task}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>

      <Button variant="contained" size="large" fullWidth sx={{ mt: 3, textTransform: 'none' }}>
        Open Detailed Report
      </Button>
    </Box>
  );
};

export default ExampleComponent;
