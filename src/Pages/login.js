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
    
    render() {
        return(
            <div className="page-container login-page-container">
                <div className="login-card-container">
                    <div>

                    </div>
                    <div>
                        <form onClick={this.handleSubmit} className="login-form">
                            <p className="input">
                                <label>Email</label>
                                <input type="text" name="email"
                                    onChange={this.handleChange} value={this.state.email}>  
                                </input>
                            </p>
                            <p className="input">
                                <label>Password</label>
                                <input type="text" name="password"
                                    onChange={this.handleChange} value={this.state.password}>  
                                </input>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;