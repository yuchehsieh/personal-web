import React, { Component } from 'react';

import AppIcon from '../../../Resources/images/ghowa/apo-icon.png';
import { worksRef, aboutRef } from '../../../firebase';

class Ghowa extends Component {

  // async componentDidMount() {
  //   const worksQuerySnapshot = await worksRef.get();
  //   const worksData = worksQuerySnapshot.docs.map(doc => doc.data());
  //   console.log(worksData);
  //
  //   const aboutQuerySnapshot = await aboutRef.get();
  //   const aboutData = aboutQuerySnapshot.docs.map(doc => doc.data());
  //   console.log(aboutData);
  //
  // }


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
              <label>Redux</label>
              <label>React-Native-Navigation</label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ghowa;
