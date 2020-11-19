import React, {Component} from 'react';
import Login from './login';

export class Home extends Component {
    render() {
        return(
            <div className="page-container" id="home-page">
            <div className="home-page-container">
                <div className="welcome">
                    <div>
                        <p>Welcome <br></br>to SocialSensor.</p>
                    </div>
                </div>
                <div className="login">
                    <Login/>
                </div>
            </div>
            </div>
        );
    }
}

export default Home;