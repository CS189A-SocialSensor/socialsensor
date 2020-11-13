import React, {Component} from 'react';

export class Login extends Component {

    constructor() {
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
    }

    handleSubmit(e) {
        e.preventDefault();
        /* 
        this is where you take the data 
        and perform user authentication to the backend
        */
    }

    render() {
        return(
            
            <div className="login-page-container">
                <div className="login-card-container">
                    <div className="login-title">
                        Member Login
                    </div>
                    <div>
                        <form onClick={this.handleSubmit} className="login-form">
                            <input type="text" name="email" className="login-input" 
                                placeholder="Email" onChange={this.handleChange} value={this.state.email}>  
                            </input>
                            <input type="password" name="password" className="login-input"
                                placeholder="Password" onChange={this.handleChange} value={this.state.password}>  
                            </input>
                            <button className="submit-button">Login</button>
                        </form>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Login;