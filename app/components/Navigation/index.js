/**
*
* Navigation
*
*/

import React from 'react';
import AppBar from '../AppBar';
import Drawer from '../Drawer';

import styles from './styles.css';

function Navigation({ topics, selectTopic, toggleDrawer, isDrawerOpen }) {
  return (
    <div className={styles.navigation}>
      <AppBar
        toggleDrawer={toggleDrawer}
      />
      <Drawer
        items={topics}
        selectItem={selectTopic}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

Navigation.propTypes = {
  toggleDrawer: React.PropTypes.func.isRequired,
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
};

export default Navigation;
