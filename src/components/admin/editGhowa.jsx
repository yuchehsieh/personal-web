import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {animateScroll} from 'react-scroll';
import '../../Resources/css/editGhowa.css';

import Layout from '../../hoc/layout';
import {auth, worksRef} from '../../firebase';


class EditGhowa extends Component {

    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
        this.state = {
            introduction: '',
            overview: '',

            initLoading: true,
            isLoading: false,
            error: null,
            success: null,
        };
    }

    async componentDidMount() {
        animateScroll.scrollTo(1, {
            duration: 0
        });
        await this.fetchGhowa();
        console.log(auth.currentUser);
    }

    async update() {
        const { introduction, overview } = this.state;

        try {
            await worksRef.doc('ghowa').update({
                "introduction": introduction,
                "overview": overview,
            });
            this.displaySuccess();
        } catch (e) {
            console.log(e);
            this.setState({
                error: 'You are not authenticate!'
            })
        }
    }

    displaySuccess() {
        this.setState({
            success: true,
        });
        setTimeout(() => {
            this.setState({
                success: null
            })
        }, 3000)
    }

    async fetchGhowa() {
        const worksQuerySnapshot = await worksRef.get();
        const worksData = worksQuerySnapshot.docs.map(doc => doc.data())[0];
        console.log(worksData);

        const {introduction, overview, records} = worksData;

        this.setState({
            introduction,
            overview,
            records,
            initLoading: false,
        })
    };

    onChange(event, type) {
        this.setState({
            error: null,
            [type]: event.target.value
        })
    }

    render() {

        const {introduction, overview, isLoading, error, success, initLoading} = this.state;

        return (
            <Layout>
                <div className="edit-ghowa-container">
                    <h2>Update Your Information</h2>
                    <div className="card">
                        {initLoading && <p> fetching data ... please wait ... </p>}
                        {!initLoading &&
                        <Fragment>
                            <textarea value={introduction} placeholder="Introduction"
                                      onChange={e => this.onChange(e, 'introduction')}/>
                            <div style={{height: '3em'}}/>
                            <textarea value={overview} placeholder="Overview"
                                      onChange={e => this.onChange(e, 'overview')}/>
                            <div style={{height: '3em'}}/>
                            {isLoading && <p>loading...</p>}
                            <div className="button" onClick={this.update} style={{
                                display: `${isLoading ? 'none' : 'flex'}`
                            }}>Update
                            </div>
                            {error && <p className="error-message">{error}</p>}
                            {success && <p className="success-message">Success!!</p>}
                        </Fragment>}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default EditGhowa;
