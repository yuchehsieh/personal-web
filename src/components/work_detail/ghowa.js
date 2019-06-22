import React, { Component } from 'react';

import AppIcon from '../../Resources/images/ghowa/apo-icon.png';
import ColorScheme from '../../Resources/images/ghowa/color-scheme.png';

import Wireframe1 from '../../Resources/images/ghowa/page-wireframe1.png';
import Wireframe2 from '../../Resources/images/ghowa/page-wireframe2.png';
import Wireframe3 from '../../Resources/images/ghowa/page-wireframe3.png';
import Wireframe4 from '../../Resources/images/ghowa/page-wireframe4.png';

import Mockup1 from '../../Resources/images/ghowa/page-mockup1.png';
import Mockup2 from '../../Resources/images/ghowa/page-mockup2.png';
import Mockup3 from '../../Resources/images/ghowa/page-mockup3.png';
import Mockup4 from '../../Resources/images/ghowa/page-mockup4.png';

class Ghowa extends Component {
  render() {
    return (
      <div className="detail-page">
        <div className="title-wrapper">
          <div className="icon" style={{ background: `url(${AppIcon})` }} />
          <div className="title-desc-wrapper">
            <span className="app-name">Ghowa</span>
            <span className="app-slogan">協助同伴快速分帳的 APP</span>
            <div className="role">
              <span>角色:</span>
              <label>前端開發</label>
            </div>
            <div className="language">
              <span>程式語言:</span>
              <label>React-Native</label>
              <label>React-Native-Navigation</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ghowa;
