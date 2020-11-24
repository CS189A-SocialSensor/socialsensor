import React, { useState, useCallback } from 'react';
import Lobby from './Lobby';
import Room from './Room'

/*
This component is going to show a lobby or 
a room based on whether the user has entered a username 
and room name.

Need to store the following..
- username for the user joining the chat
- room name for the room
- their access token 
*/

const VideoChat = () => {
    const [username, setUsername] = useState('');
    const [roomName, setRoomName] = useState('');
    const [token, setToken] = useState(null);

    // called when user enters their username
    const handleUsernameChange = useCallback(event => {
        setUsername(event.target.value);
      }, []);
    
    // called when user enters the room name
    const handleRoomNameChange = useCallback(event => {
        setRoomName(event.target.value);
      }, []);


    // sends username & room name to server
    // for exchange for an access token so that 
    // they can enter the room
    const handleSubmit = useCallback(async event => {
      event.preventDefault();
      console.log("in handleSubmit")

      // this is where the error is
      const data = await fetch('/video/token', {
          method: 'POST',
          body: JSON.stringify({
          identity: username,
          room: roomName
          }),
          headers: {
          'Content-Type': 'application/json'
          }
      }).then(res => res.text()) // sending back html instead of json
        .then(text => console.log(text)); 
        console.log("data is..", data)
      setToken(data.token);
    }, [roomName, username]);

    // ejects user from a room and returns them to the lobby
    const handleLogout = useCallback(event => {
        setToken(null);
      }, []);

    let render;
    if (token) {
      //render the lobby 
      render = (
        <Room roomName={roomName} token={token} handleLogout={handleLogout}/>
      );
    } else {
      render = (
        <Lobby
          username={username}
          roomName={roomName}
          handleUsernameChange={handleUsernameChange}
          handleRoomNameChange={handleRoomNameChange}
          handleSubmit={handleSubmit}
        />
      );
    }

    return render; 
};

export default VideoChat;