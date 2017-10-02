import React from 'react';
import ReactDOM from 'react-dom';
import SignupForm from './js/components/signup_form';
import SignupFormMarketing from './js/components/signup_form_marketing';
import css_file from './css/styles.css'

const App = () => {
  return (
    <div className="form-container">
      <SignupFormMarketing />
      <SignupForm />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('container'));
