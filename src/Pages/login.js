import React, {Component} from 'react';
import LoginButton from './LoginButton'
export class Login extends Component {

  /*constructor() {
		super();
		this.state = {
            email: '',
            password: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}

    handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
    }*/

   /* handleSubmit(e) {
        e.preventDefault();
        /* 
        this is where you take the data 
        and perform user authentication to the backend
        */
   // } 

    render() {
        return(
            
            <div className="login-page-container">
                <div className="login-card-container">
                    <div className="login-title">
                        Member Login
                    </div>
                    <div className="login-button">
                        <LoginButton/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;