import React from 'react';
import { Link } from 'react-router-dom';

import Featured from './featuted';

const Works = () => {
  return (
    <div className="work-page">
      <Link to="/works/ghowa">
        <Featured />
      </Link>

      <div
        style={{
          height: '200px'
        }}
      />
    </div>
  );
};

export default Works;
