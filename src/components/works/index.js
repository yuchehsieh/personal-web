import React from 'react';
import { Link } from 'react-router-dom';

import Featured from './featuted';

const Works = () => {
  return (
    <div className="container">
      <Link to="/works/ghowa">
        <Featured />
      </Link>
    </div>
  );
};

export default Works;
