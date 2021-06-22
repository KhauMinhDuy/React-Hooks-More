import React from 'react';
import Header from './Header';
import Menu from './Menu';

const Home = (props) => {
  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="row">
          <div className="col margintopbottom">
            <h2>Home</h2>
            <h6 className="margintopbottom20">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Dignissimos ipsum perspiciatis earum laudantium, sequi incidunt, 
              dolores labore expedita, inventore distinctio aliquid doloremque ullam. 
              Sapiente ipsum, deserunt illum qui eos molestias.
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;