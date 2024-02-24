import React, { useEffect } from 'react';

const BotpressWebchat = () => {
  useEffect(() => {
    // Create a <script> element
    const script = document.createElement('script');
    // Set the source of the script to the Botpress webchat inject.js
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    // Add the script to the document body
    document.body.appendChild(script);
    
    // Initialize Botpress webchat once the script has loaded
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with bot",
      "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
      "botId": "2ea6e0ee-76dd-4df9-b6f3-d95270bd069d",
      "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
      "messagingUrl": "https://messaging.botpress.cloud",
      "clientId": "2ea6e0ee-76dd-4df9-b6f3-d95270bd069d",
      "webhookId": "931a1704-ab38-4372-9ec1-085d5da5b972",
      "lazySocket": true,
      "themeName": "prism",
      "frontendVersion": "v1",
      "showPoweredBy": true,
      "theme": "prism",
      "themeColor": "#2563eb"
      });
    };

    // Clean up function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default BotpressWebchat;
