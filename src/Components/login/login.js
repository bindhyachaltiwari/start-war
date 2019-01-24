import React, { Component } from 'react';
import AlertContainer from 'react-alert'
import { WRONG_CREDENTIALS } from '../../constants/constants'
import Loader from '../common/loader'
import _ from 'lodash'
import { throttle } from 'throttle-debounce';
class Login extends Component {
    constructor(props) {        
        super(props);       
        this.onAuthorize = this.onAuthorize.bind(this);
        this.showAlert = this.showAlert.bind(this);
        this.getPeopleDetail = throttle(2000, this.getPeopleDetail);
        this.alertOptions = {
            offset: 100,
            position: 'top left',
            theme: 'dark',
            time: 4000,
            transition: 'scale',
            margin: '100px'
        }
        if (window.localStorage.getItem("status")) {
            this.props.history.push('/home');
        }
    }

    showAlert() {
        this.msg.error(WRONG_CREDENTIALS, {
            time: 4000,
            type: 'success'
        })
    }
    

    componentDidUpdate(prevProps, prevState) {
        const password = this.password.value;
        let peoples = this.props.people;
        if (!(prevProps.people === peoples)) {
            if (peoples.length > 0) {
                let checkPassword = _.filter(peoples, (people) => (people.birth_year === password))
                if (checkPassword.length > 0) {
                    window.localStorage.setItem('status', JSON.stringify("login successfully"));
                    this.props.history.push('/home');                    
                }
                else {
                    this.showAlert();
                }
            }
            else {
                this.showAlert()
            }
            this.username.value = ""
            this.password.value = ""
        }
    }

    onAuthorize(e) {
        e.preventDefault();
        this.getPeopleDetail();
    }

    getPeopleDetail() {
        const username = this.username.value;
        const password = this.password.value;
        this.props.actions.loginDataRequest(username);
        window.localStorage.setItem('username', JSON.stringify(username))
    }
    render() {
        return (
            <div>
                {this.props.isFetching && <Loader />}                    
                        <div className='loginBox col-md-4 col-sm-4'>
                            <div>
                                <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
                                <form className='form-horizontal col-md-6 col-md-offset-3'>
                                    <h4>LOGIN TO STARWARS</h4>
                                    <div className='form-group'>
                                        <div>
                                            <input type="text" placeholder="Username" placeholder="username" className="user form-control" ref={(input) => { this.username = input; }} ></input>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div>
                                            <input type="password" placeholder="Password" placeholder="password" className="pass form-control" ref={(input) => { this.password = input; }} ></input>
                                        </div>
                                    </div>

                                    <div className='input-group col-md-offset-4'>
                                        <button className="btn btn-default" type="submit" onClick={this.onAuthorize.bind(this)}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
        )
    }

}
export default Login;