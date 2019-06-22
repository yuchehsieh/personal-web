import React, { Fragment } from 'react';

const RenderMailMe = desc => (
  <Fragment>
    <h1 style={{ fontSize: '18px', textAlign: 'center' }}>
      <strong>・・・</strong>
    </h1>
    <div className="email-me">
      <p
        style={{
          fontSize: '14px',
          fontWeight: 400,
          lineHeight: 2.5,
          letterSpacing: '1.2px',
          color: '#606060'
        }}
      >
        {desc}
      </p>
      <a href="mailto:hsiehdanny860605@gmail.com">hsiehdanny860605@gmail.com</a>
    </div>
  </Fragment>
);

export default RenderMailMe;
