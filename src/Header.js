import React from 'react';
import SignMeUp from './SignMeUp';

const Header = (props) => {

  const signupCallBack = (email) => {
    return console.log(`sign up call with email ${email}`);
  }

  return (
    <div className="jumbotron jumbotronheight">
      <div className="row">
        <div className="col-12 col-sm-4 text-center">
          <h6 className="text-uppercase">October 19-20 2019</h6>
          <h6 className="text-uppercase">San Jose, Califonia</h6>
        </div>
        <div className="col-12 col-sm-8 text-lg-right">
          <div>
            <img src="/static/SVCClogo.png" alt="" />
          </div>
          <h2>Silicon Valley Code Camp</h2>
          <div className="row col-12 text-lg-right">
            <SignMeUp signiupCallback={signupCallBack}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;