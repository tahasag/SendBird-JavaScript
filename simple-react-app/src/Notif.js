import React from "react";
import  { withSendBird, sendBirdSelectors } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";

const DesktopNotification = () => (
  <span></span>
);

const NotificationWithSendBird = withSendBird(DesktopNotification, (state) => {
  const sdk = sendBirdSelectors.getSdk(state);
  const id = 1;

  if (sdk && sdk.ChannelHandler) {
    const channelHandler = new sdk.ChannelHandler();
    channelHandler.onMessageReceived = (channel, message) => {  
        new Notification(message.message);
    };

    sdk.addChannelHandler(id, channelHandler);
  }
});

export default NotificationWithSendBird;