import React, {Component} from 'react';
import Video from 'twilio-video';


export class VideoCall extends Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="page-container">
                <div className="participant-view">
                    other participant's video
                </div>
                <div className="self-view">
                    your video
                </div>
            </div>
        );

    }
}
export default VideoCall;