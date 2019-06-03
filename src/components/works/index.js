import React from 'react';

import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <div className="container">
      <Link to="/works/ghowa">
        <div style={{ height: '300px', background: 'red' }}>hiiiiiiii</div>
      </Link>
      <div style={{ height: '300px', background: 'green' }} />
      <div style={{ height: '300px', background: 'blue' }} />
    </div>
  );
};

export default Works;
