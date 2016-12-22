/**
*
* Login
*
*/

import React from 'react';

import styles from './styles.css';
import validator from 'email-validator';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function

  login = () => {
    const email = this.emailField.value;
    if (!validator.validate(email)) {
      console.log('not a valid email');
    }
  }

  render() {
    return (
      <div className={styles.login}>
        <div
          className={styles.heading}
        >
          Login with your email
        </div>

        <input
          className={styles.input}
          placeholder="Your email"
          ref={(f) => { this.emailField = f; }}
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
    );
  }
}

export default Login;
