import React from 'react';
import pandora_logo from '../../img/pandora_logo.svg';

const SignupFormMarketing = () => {
  return (
    <div className="signup-form-marketing">
      <img className="pandora_logo" src={pandora_logo} alt=""/>
      <h1 className="marketing-title">Find the music you love and let the music you love find you.</h1>
      <ul className="marketing-features">
        <li>Unlimited personalized stations</li>
        <li>A hand-curated listening experience that's uniquely yours.</li>
      </ul>
    </div>
  )
}

export default SignupFormMarketing;
