import React, { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const TawkChat = () => {
  const tawkMessengerRef = useRef();

  const handleLoad = () => {
    console.log('Tawk.to chat widget loaded successfully');
  };

  return (
    <TawkMessengerReact
      propertyId="YOUR_PROPERTY_ID" // Will be replaced with actual ID when user provides it
      widgetId="default"
      ref={tawkMessengerRef}
      onLoad={handleLoad}
    />
  );
};

export default TawkChat;
