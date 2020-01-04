import React, {Component} from 'react';
import { auth } from '../../firebase';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            isLogin: false,
        }
    }

    componentDidMount() {
        const user = auth.currentUser;
        if(user) {
            this.setState({
                isLogin: true,
                isLoading: false
            })
        } else {
            this.setState({
                isLoading: false
            })
        }
    }

    render() {

        const { isLogin, isLoading } = this.state;

        if(!isLoading) {
            return (
                <div className="home-container">
                    <div className="home-content-container">
                        <div className="row">
                            <div className="hello-there-row">
                                <h1 className="home-hello-text">Hello</h1>
                                <div className="space"/>
                                {isLogin ?
                                    <h1 className="home-there-text" style={{color: 'yellowgreen'}}>Administrator</h1>
                                    : <h1 className="home-there-text">There</h1>
                                }
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
        } else {
            return(
                <p> loading please wait ...</p>
            )
        }

    }
}

export default Home;
