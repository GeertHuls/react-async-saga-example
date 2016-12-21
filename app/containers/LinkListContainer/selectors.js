import { createSelector } from 'reselect';

/**
 * Direct selector to the linkListContainer state domain
 */
const selectLinkListContainerDomain = () => state => state.get('linkListContainer');

/**
 * Other specific selectors
 */

 // react router puts the params on the props of the component:
const selectRouteTopic = () => (state, props) => props.params.topicName;

/**
 * Default selector used by LinkListContainer
 */

const selectLinkListContainer = () => createSelector(
  selectLinkListContainerDomain(),
  selectRouteTopic(),
  (substate, routeTopicName) =>
    Object.assign(substate.toJS(), { routeTopicName })
);

export default selectLinkListContainer;
export {
  selectLinkListContainerDomain,
};
