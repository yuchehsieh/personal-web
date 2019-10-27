import React, {Component} from 'react';

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

import Lightbox from '../ui/lightbox';
import UiContext from '../contexts/uiContext';

class Ghowa extends Component {
    state = {
        wireframe: {
            isOpen: false,
            currentIndex: 0,
            images: [
                {src: Wireframe2},
                {src: Wireframe4},
                {src: Wireframe1},
                {src: Wireframe3}
            ]
        },
        mockup: {
            isOpen: false,
            currentIndex: 0,
            images: [
                {src: Mockup2},
                {src: Mockup4},
                {src: Mockup1},
                {src: Mockup3}
            ]
        }
    };

    closeLightbox = type => {
        const element = {...this.state[type]};
        element.isOpen = false;
        element.currentIndex = 0;
        this.setState({[type]: element});
    };

    openLightbox = (type, index) => {
        const element = {...this.state[type]};
        element.isOpen = true;
        element.currentIndex = index;
        this.setState({[type]: element});
    };

    render() {
        const {wireframe, mockup} = this.state;

        console.log(this.context);

        return (
            <UiContext.Consumer>
                {context => (
                    <div className="detail-page">
                        <div className="title-wrapper">
                            <div className="icon" style={{background: `url(${AppIcon})`}}/>
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
                        <div className="project-detail">
                            <h1>專案概觀</h1>
                            <p>
                                畢業專題 － Ghowa 幫你有效率地計算最快的付清方式，你不用花大把的時間計算款項，最後又做冤大頭
                            </p>
                            <h1>專案簡介</h1>
                            <p>
                                大三下開始進行之畢業專案，一路參與起初的企劃發想到後來共為期半年多的開發，
                                起初目標設定在大四上學期的新一代設計展，
                                之後來有幸入圍 2019 移動創新競賽的決賽
                                最後更是獲得評審的肯定。
                            </p>
                            <h1>Wireframe</h1>
                            <div className="img-group">
                                {wireframe.images.map((image, i) => (
                                    <img
                                        key={i}
                                        className="img"
                                        onClick={() => {
                                            this.openLightbox('wireframe', i);
                                            context.toggleLightboxState();
                                        }}
                                        src={image.src}
                                        alt={`wireframe${i + 1}`}
                                    />
                                ))}
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
                                {mockup.images.map((image, i) => (
                                    <img
                                        key={i}
                                        className="img"
                                        onClick={() => {
                                            this.openLightbox('mockup', i);
                                            context.toggleLightboxState();
                                        }}
                                        src={image.src}
                                        alt={`mockup${i + 1}`}
                                    />
                                ))}
                            </div>
                            <h1>其他紀錄</h1>
                            <ul>
                                <li>入圍 2019 APP 移動應用創新賽 決賽</li>
                                <li>2019 APP 移動應用創新賽 中保無限菁英獎</li>
                            </ul>
                        </div>
                        <Lightbox
                            onClose={() => this.closeLightbox('wireframe')}
                            isOpen={wireframe.isOpen}
                            images={wireframe.images}
                            currentIndex={wireframe.currentIndex}
                        />
                        <Lightbox
                            onClose={() => this.closeLightbox('mockup')}
                            isOpen={mockup.isOpen}
                            images={mockup.images}
                            currentIndex={mockup.currentIndex}
                        />
                    </div>
                )}
            </UiContext.Consumer>
        );
    }
}

Ghowa.contextType = UiContext;

export default Ghowa;
