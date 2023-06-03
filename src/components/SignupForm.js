// SignupForm.js
import React from 'react';

const SignupForm = ({ onSignupAsUser, onSignupAsTrainer, onShowLogin }) => {
  return (
    <div className="signup-form">
      <button onClick={onSignupAsUser}>Sign up as User</button>
      <button onClick={onSignupAsTrainer}>Sign up as Trainer</button>
      <p>
        Already have an account? <button onClick={onShowLogin}>Sign in</button>
      </p>
    </div>
  );
};

export default SignupForm;
