/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import NavigationContainer from '../../containers/NavigationContainer';

// the this.props.children will be provided by the react-router

// use terminal to generate new route:
// > npm run generate route

// to generate a new component, run:
// > npm run generate component

// to generate a new container , run:
// > npm run generate container

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: React.PropTypes.element,
  }

  render() {
    return (
      <div>
        <NavigationContainer />
        {this.props.children}
      </div>
    );
  }
}
