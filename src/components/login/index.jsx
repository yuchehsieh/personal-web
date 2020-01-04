import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {animateScroll} from 'react-scroll';
import '../../Resources/css/login.css';

import Layout from '../../hoc/layout';
import {auth} from '../../firebase';


class Login extends Component {

    constructor(props) {
        super(props);

        this.login = this.login.bind(this);
        this.state = {
            email: '',
            password: '',

            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        animateScroll.scrollTo(1, {
            duration: 0
        });
    }

    async login() {

        this.setState({
            isLoading: true,
        });

        const {email, password} = this.state;
        let response;

        try {
            response = await auth.signInWithEmailAndPassword(email, password);
            console.log(response);
            this.setState({
                isLoading: false,
            });
            this.props.history.push('/');
        } catch (e) {
            console.log(e);
            this.setState({
                isLoading: false,
                error: e.message
            });
        }
    }

    onChange(event, type) {
        this.setState({
            error: null,
            [type]: event.target.value
        })
    }

    render() {

        const {email, password, isLoading, error} = this.state;

        return (
            <Layout>
                <div className="login-container">
                    <h2>Please Login</h2>
                    <div className="card">
                        <input value={email} placeholder="Enter email" onChange={e => this.onChange(e, 'email')}
                               type="email"/>
                        <div style={{height: '3em'}}/>
                        <input value={password} placeholder="Enter password" type="password"
                               onChange={e => this.onChange(e, 'password')}/>
                        <div style={{height: '3em'}}/>
                        {isLoading && <p>loading...</p>}
                        <div className="button" onClick={this.login} style={{
                            display: `${isLoading ? 'none': 'flex'}`
                        }}>Login</div>
                        {error && <p className="error-message">{error}</p>}
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Login;
