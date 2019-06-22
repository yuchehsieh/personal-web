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

import RenderMailMe from '../ui/main_me';

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
        <div className="project-detail">
          <h1>專案概觀</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <h1>專案簡介</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <h1>Wireframe</h1>
          <div className="img-group">
            <img className="img" src={Wireframe2} alt="wireframe2" />
            <img className="img" src={Wireframe4} alt="wireframe4" />
            <img className="img" src={Wireframe1} alt="wireframe1" />
            <img className="img" src={Wireframe3} alt="wireframe3" />
          </div>

          <h1>色彩計畫</h1>
          <div>
            <img
              className="color-scheme"
              src={ColorScheme}
              alt="color-scheme"
            />
          </div>
          <h1>實際畫面</h1>
          <div className="img-group">
            <img className="img" src={Mockup2} alt="wireframe2" />
            <img className="img" src={Mockup4} alt="wireframe4" />
            <img className="img" src={Mockup1} alt="wireframe1" />
            <img className="img" src={Mockup3} alt="wireframe3" />
          </div>
        </div>
        {RenderMailMe('對於此專案，歡迎給我回饋！')}
      </div>
    );
  }
}

export default Ghowa;
