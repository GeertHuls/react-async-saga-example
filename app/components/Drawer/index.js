/**
*
* Drawer
*
*/

import React from 'react';


import styles from './styles.css';

function Drawer({ items, selectItem, itemLabelAttr, itemKeyAttr }) {
  const itemNodes = items.map(item => (
    <div
      className={styles.item}
      key={item[itemKeyAttr]}
      onClick={() => selectItem(item)}
    >
      {item[itemLabelAttr]}
    </div>
  ));

  return (
    <div className={styles.drawer}>
      {itemNodes}
    </div>
  );
}

Drawer.propTypes = {
  items: React.PropTypes.array.isRequired,
  selectItem: React.PropTypes.func.isRequired,
  itemLabelAttr: React.PropTypes.string.isRequired,
  itemKeyAttr: React.PropTypes.string.isRequired,
};

export default Drawer;
