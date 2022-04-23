import React, { useState } from 'react';

const App = () => {
  return (
    <main>
      <div className="container">
        <div className="header">
          <img src={require('../images/desktop/image-header.jpg')} alt="" />
          <h1>We are creatives</h1>
        </div>
        <div className="item item--1"></div>
        <div className="item item--2"></div>
        <div className="item item--3"></div>
        <div className="item item--4"></div>
        <div className="item item--5"></div>
        <div className="item item--6"></div>
        <div className="testimonials"></div>
        <div className="item item--7"></div>
        <div className="item item--8"></div>
        <div className="item item--9"></div>
        <div className="item item--10"></div>
        <div className="footer"></div>
      </div>
    </main>
  );
};

export default App;
