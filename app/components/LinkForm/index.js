/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import TextInput from '../TextInput';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {};

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div
            className={styles.heading}
          >
            Add a link
          </div>

          <TextInput
            className={styles.input}
            placeholder="URL"
          />

          <TextInput
            className={styles.input}
            placeholder="Description"
          />

          <div
            className={styles.actionContainer}
          >
            <div
              className={styles.button}
            >
              cancel
            </div>
            <div
              className={styles.button}
              onClick={this.login}
            >
              log in
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
