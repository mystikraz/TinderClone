import React from 'react';
import Chat from './Chat';

const Chats = () => {
    return (
        <div className="chats">
            <Chat
            name="Sarah"
            message="Hey! how r u"
            timestamp="35 minutes ago"
            profilePic="https://th.bing.com/th/id/OIP.x8rA96tab3WKbA4qPCCcBAHaJw?pid=Api&rs=1"
            />
             <Chat
            name="Ellen"
            message="Hey! how r u"
            timestamp="35 minutes ago"
            profilePic="https://th.bing.com/th/id/OIP.x8rA96tab3WKbA4qPCCcBAHaJw?pid=Api&rs=1"
            />
             <Chat
            name="Natasha"
            message="Hey! how r u"
            timestamp="35 minutes ago"
            profilePic="https://th.bing.com/th/id/OIP.x8rA96tab3WKbA4qPCCcBAHaJw?pid=Api&rs=1"
            />
        </div>
    );
}

export default Chats;
