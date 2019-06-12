import React from 'react';

import Fade from 'react-reveal/Fade';

import img_avatar from '../../Resources/images/avatar.jpg';

const Avatar = () => {
  return (
    <Fade duration={300} delay={300}>
      <div className="intro">
        <div className="avatar-box">
          <div
            className="avatar"
            style={{ background: `url(${img_avatar})` }}
          />
        </div>
        <p className="name">
          Murphy Hsieh <br /> <span style={{ fontWeight: 500 }}>謝育哲</span>
        </p>
      </div>
    </Fade>
  );
};

export default Avatar;
