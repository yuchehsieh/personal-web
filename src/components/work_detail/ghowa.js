import React, {Component} from 'react';
import {FirestoreDocument, FirestoreCollection} from 'react-firestore';
import {withRouter} from 'react-router-dom'

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
import {worksRef, auth} from "../../firebase";
import EditIcon from '../../Resources/images/edit.svg';

class Ghowa extends Component {

    constructor(props) {
        super(props);

        this.edit = this.edit.bind(this);
        this.state = {
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
            },

            introduction: '',
            overview: '',
            records: [],

            isLoading: true,
            isLogin: false,
        };
    }


    async componentDidMount() {
        await this.fetchGhowa();
        const user = auth.currentUser;
        if (user) {
            this.setState({
                isLogin: true,
            });
        }
    }

    edit() {
        this.props.history.push('/edit-ghowa');
    }

    async fetchGhowa() {
        const worksQuerySnapshot = await worksRef.get();
        const worksData = worksQuerySnapshot.docs.map(doc => doc.data())[0];

        const {introduction, overview, records} = worksData;

        this.setState({
            introduction,
            overview,
            records,
            isLoading: false,
        })
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

        const {wireframe, mockup, introduction, overview, records, isLoading, isLogin} = this.state;

        if (isLoading) {
            return <p>loading</p>
        } else {
            return (
                <UiContext.Consumer>
                    {context => (
                        <div className="detail-page">
                            <div className="title-wrapper">
                                <div className="icon" style={{background: `url(${AppIcon})`}}/>
                                <div className="title-desc-wrapper">
                                    <div>
                                        <span className="app-name">Ghowa</span>

                                        {isLogin &&
                                        <img src={EditIcon}
                                             style={{width: '1em', marginLeft: '1em', cursor: 'pointer'}}
                                             onClick={this.edit}
                                        />}

                                    </div>
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
                                <p>{overview}
                                </p>
                                <h1>專案簡介</h1>
                                <p>{introduction}
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
                                    {records.map((record, i) =>
                                        <li key={i}>{record}</li>)
                                    }
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
}

Ghowa.contextType = UiContext;

export default withRouter(Ghowa);
