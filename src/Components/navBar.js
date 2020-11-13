import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export class NavBar extends Component {
    render() {
        return(
            <nav>
                <h1>SocialSensor</h1>
                <ul className="nav-links">
                    <Link to="/" className="link">
                        <li>Home</li>
                    </Link>
                    <Link to="/login" className="link">
                        <li>Login</li>
                    </Link>
                    <Link to="/videocall" className="link">
                        <li>Video Call</li>
                    </Link>
                    <Link to="/userprofile" className="link">
                        <li>Profile</li>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default NavBar;