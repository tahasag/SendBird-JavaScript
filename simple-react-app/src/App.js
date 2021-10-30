import React, { Component, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

import { App as SendBirdApp, SendBirdProvider, sendBirdSelectors, withSendBird} from 'sendbird-uikit';
import 'sendbird-uikit/dist/index.css';
import NotificationWithSendBird from "./Notif";

class Chat extends Component {
  constructor() {
    super();
    
    if (!("Notification" in window)) {
      console.log("This browser does not support desktop notification");
    } else {
      Notification.requestPermission();
    }
  }

  render() {
    const userId = "sendbird";

    return (
      
      <div className="App">
        <SendBirdApp 
          appId={process.env.APP_ID}
          userId={userId}
          nickname={userId}>
        </SendBirdApp>

        <SendBirdProvider appId={process.env.APP_ID} userId={userId} nickname={userId}>
          <NotificationWithSendBird />
        </SendBirdProvider>
      </div>
    );
  }
}

export default Chat;