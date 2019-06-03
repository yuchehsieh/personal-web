import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = props => {
  return (
    <Drawer
      anchor="left"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem onClick={() => props.onClose(false)}>
          <Link to="/works">
            <Button color="default">Works</Button>
          </Link>
        </ListItem>

        <ListItem onClick={() => props.onClose(false)}>
          <Link to="/resume">
            <Button color="default">Resume</Button>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
