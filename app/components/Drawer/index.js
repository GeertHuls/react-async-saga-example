/**
*
* Drawer
*
*/

import React from 'react';


import styles from './styles.css';
import classNames from 'classnames';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr, isDrawerOpen }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </div>
  ));

  // [styles.drawerOpen] = es6 feature called computed attributes
  // if isDrawerOpen is truety, then the drawerOpen style is used
  // otherwise the drawer style is used.
  return (
    <div
      className={classNames(styles.drawer, { [styles.drawerOpen]: isDrawerOpen })}
    >
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
  isDrawerOpen: React.PropTypes.boolean.isRequired,
};

export default Drawer;
