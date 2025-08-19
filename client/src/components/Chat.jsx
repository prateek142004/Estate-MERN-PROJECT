import React, { useState } from 'react'
import '../style/chat.scss'

const Chat = () => {
    const [chat, setchat] = useState(true)
  return (
    <div className='chat'>
        <div className="messages">
            <h1>Messages</h1>
            <div className='message'>
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Hi, how are you?...</p>
            </div>
            <div className='message'>
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Hi, how are you?...</p>
            </div>
            <div className='message'>
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Hi, how are you?...</p>
            </div>
            <div className='message'>
                <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Hi, how are you?...</p>
            </div>
        </div>
        {chat && <div className="chatbox">
            <div className="top">
                <div className="user">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    John Doe
                </div>
                <span className='close' onClick={()=>setchat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chatmessage own">
                    <p>how are you?</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatmessage">
                    <p>how are you?</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatmessage own">
                    <p>how are you?</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatmessage">
                    <p>how are you?</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea name="" id=""></textarea>
                <button>Send</button>
            </div>
        </div>}
    </div>
  )
}

export default Chat