import React, {Component} from 'react';

class Home extends Component {
    render() {
        return (
            <div className="home-container">
                <div className="home-content-container">
                    <div className="row">
                        <div className="hello-there-row">
                            <h1 className="home-hello-text">Hello</h1>
                            <div className="space"/>
                            <h1 className="home-there-text">There</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="i-am-row">
                            <h1 className="home-i-text">I</h1>
                            <div className="space"/>
                            <h1 className="home-am-text">am</h1>
                            <div className="space"/>
                        </div>
                        <div className="name-row color-bar">
                            <h1 className="home-name-text">Murphy</h1>
                            <div className="space"/>
                            <h1 className="home-last-name-text">Hsieh</h1>
                        </div>
                    </div>
                    <div
                        className="btn-get-start"
                        onClick={() => this.props.history.push('/works')}
                    >
                        Let's Go
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
