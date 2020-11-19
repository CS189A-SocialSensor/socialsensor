import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
      button: {
        fontSize: '8px',
        color: 'red',
      },
    },
});

export class NavBar extends Component {
    render() {
        return(
            <nav>
                <h1>SocialSensor</h1>
                <ul className="nav-links">
                    <Link to="/userprofile" className="link">
                        <li>Profile</li>
                    </Link>
                    <Link to="/login" className="link">
                        <li>Sign In</li>
                    </Link>
                    <Link to="/videocall" className="link">
                            <Button to="/videocall" renderAs={Link} 
                                variant="contained" size="small">
                                    Join a Room
                            </Button>
                    </Link>
                </ul>
            </nav>
        );
    }
}

export default NavBar;