import React from 'react';
import FormInput from './form_input';
import Button from './button';

const SignupForm = () => {
  return (
    <div className="signup-form">
      <div className="form_title">Sign Up</div>
      <FormInput
        has_label={true}
        label_name="Email"
        class_name="form__input"
        type_name="email"
        name_name="email"
      />
      <FormInput
        has_label={true}
        label_name="Password"
        class_name="form__input"
        type_name="password"
        name_name="password"
      />
      <Button
        label="Sign Up"
        class_name="button"
      />
      <p className="fine_print">By signing up, you accept and agree to Pandora's <a className="fine_print__link" href="#">Terms of Use</a> and <a className="fine_print__link" href="#">Privacy Policy</a>.</p>
      <p className="fine_print-login">Already a member? <a href="#">Log In</a></p>
    </div>
  )
}

export default SignupForm;
