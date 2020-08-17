import React, { useState } from 'react';
import './ChatScreen.css'
import { Avatar } from '@material-ui/core';
const ChatScreen = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Ellen',
            image: 'https://th.bing.com/th/id/OIP.TO9PDtpOJp4wT3nNjO0G2wHaE8?pid=Api&rs=1',
            message: 'whats up ',
        },
        {
            name: 'Ellen',
            image: 'https://th.bing.com/th/id/OIP.TO9PDtpOJp4wT3nNjO0G2wHaE8?pid=Api&rs=1',
            message: 'whats up ',
        },
        {
            message: 'Hows going ',
        },
    ])
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
    }
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp">You matched with Ellen on 10th of April</p>
            {messages.map(message => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar
                            className="chatScreen_image"
                            alt={message.name}
                            src={message.image}
                        />
                        <p class="chatScreen__text">{message.message}</p>
                    </div>) : (
                        <div className="chatScreen__message">
                            <p class="chatScreen__textUser">{message.message}</p>
                        </div>
                    )
            ))}
            <form className="chatScreen__input">
                <input value={input} onChange={e => setInput(e.target.value)} className="chatScreen_inputField" type="text" />
                <button onClick={handleSend} type="submit" className="chatScreen_inputButton">Send</button>
            </form>
        </div>
    );
}

export default ChatScreen;
