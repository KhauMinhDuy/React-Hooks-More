import React, { useState } from 'react';

const SignMeUp = (props) => {

  const {signiupCallback} = props;

  const [email, setEmail] = useState("");

  const emailHandeler = (e) => {
    setEmail(e.target.value);
  }

  const signUpHandler = () => {
    signiupCallback(email);
    setEmail("");
    alert("signup confirmed");
  }

  return (
    <div className="container">
      <div>
        <div className="content">
          <input 
            type="email" 
            name="email" 
            placeholder="Enter Email" 
            value={email}
            onChange={emailHandeler}
          />
          &nbsp;
          <button 
            className="btn" 
            type="submit"
            disabled={!email.includes('@')}
            onClick={signUpHandler}
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignMeUp;