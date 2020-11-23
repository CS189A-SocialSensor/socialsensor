import React from 'react';


/*
Lobby.js will be the "entry form" where the user will enter their
name + room name.

- it's "const" because it's not storing any data
- will pass all events up to its parent (VideoChat Component)
*/

const Lobby = ({
    username,
    handleUsernameChange,
    roomName,
    handleRoomNameChange,
    handleSubmit
}) => {
  console.log("username is..", username)
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <h2>Enter a room</h2>
            <div>
              <input type="text" id="field" className="input-field" 
                  placeholder="Your Name" value={username}
                  onChange={handleUsernameChange}
                  required>  
              </input>
            </div>
            <div>
              <input type="text" id="room" className="input-field" 
                  placeholder="Room Name" value={roomName}
                  onChange={handleRoomNameChange}
                  required>  
              </input>
            </div>
            <button type="submit" className="submit-button">Submit</button>
          </form>
        </div>
    );

};
export default Lobby;

