import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

const App = (props) => {
  const {pageName} = props;
  if(pageName === 'Home') {
    return (
      <Home />
    )
  }    
  if(pageName === 'Speakers') {
    return (
      <Speakers />
    )
  }
}

export default App;