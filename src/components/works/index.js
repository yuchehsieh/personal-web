import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Layout from '../../hoc/layout';
import Featured from './featuted';

import {animateScroll} from 'react-scroll';

class Works extends Component {
    componentDidMount() {
        animateScroll.scrollTo(1, {
            duration: 0
        });

        console.log('called');
    }

    render() {
        return (
            <Layout>
                <div className="work-page">
                    <p>
                        Hi~I am Murphy
                        I am a junior majoring in Web / App development and design . Also have video editing experiences
                        . I currently live in Taipei and study in the Digital Technology Design at Taipei University of
                        Education.
                    </p>
                    {/*<p>*/}
                    {/*  It has survived not only five centuries, but also the leap into*/}
                    {/*  electronic typesetting, remaining essentially unchanged. It was*/}
                    {/*  popularised in the 1960s with the release of Letraset sheets*/}
                    {/*  containing Lorem Ipsum passages,*/}
                    {/*</p>*/}
                    <Featured/>
                </div>
            </Layout>
        );
    }
}

export default Works;
