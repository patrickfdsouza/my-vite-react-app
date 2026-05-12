import React from 'react';
import './ExampleComponent.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ExampleComponent = () => {
  return (
    <div className="example-container bg-blue-100 p-4 rounded-lg mx-auto">
      <h2 className="example-title text-2xl md:text-3xl font-bold text-blue-700 text-center mb-6">
        Welcome to the Example Component
      </h2>
      <List className="example-list mb-6">
        <ListItem className="example-item">
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Item 1" />
        </ListItem>
        <ListItem className="example-item">
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Item 2" />
        </ListItem>
        <ListItem className="example-item">
          <ListItemIcon>
            <CheckCircleIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Item 3" />
        </ListItem>
      </List>
      <div className="card-row flex flex-col md:flex-row gap-4 justify-center mb-6">
        <Card className="example-card flex-1 min-w-[200px]">
          <CardContent>
            <Typography className="card-title text-lg font-semibold text-blue-700 mb-2" variant="h6">Card 1</Typography>
            <Typography className="card-desc text-base text-gray-700">This is the first card.</Typography>
          </CardContent>
        </Card>
        <Card className="example-card flex-1 min-w-[200px]">
          <CardContent>
            <Typography className="card-title text-lg font-semibold text-blue-700 mb-2" variant="h6">Card 2</Typography>
            <Typography className="card-desc text-base text-gray-700">This is the second card.</Typography>
          </CardContent>
        </Card>
        <Card className="example-card flex-1 min-w-[200px]">
          <CardContent>
            <Typography className="card-title text-lg font-semibold text-blue-700 mb-2" variant="h6">Card 3</Typography>
            <Typography className="card-desc text-base text-gray-700">This is the third card.</Typography>
          </CardContent>
        </Card>
      </div>
      <Button className="example-button w-full sm:w-auto" variant="contained" color="primary">
        Click Me
      </Button>
    </div>
  );
};

export default ExampleComponent;