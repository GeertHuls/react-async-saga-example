/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import classNames from 'classnames';

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

          <input
            className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
            placeholder="URL"
            ref={(f) => { this.urlField = f; }}
            type="text"
          />

          <input
            className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
            placeholder="Description"
            ref={(f) => { this.descriptionField = f; }}
            type="text"
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
