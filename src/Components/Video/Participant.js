import React, { useState, useEffect, useRef } from 'react';

/*
This Component contains the video & audio tracks of the participants
and is probably where we extract them for the model.
*/

const Participant = ({ participant }) => {
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);
};

export default Participant;