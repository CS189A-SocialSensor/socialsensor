import React, {Component} from 'react';
import Video from 'twilio-video';
import VideoChat from '../Components/Video/VideoChat';


export class VideoCall extends Component {

    constructor(props) {
        super();
    }

    render() {
        return(
            <div className="page-container">
                <VideoChat />
            </div>
        );

    }
}
export default VideoCall;