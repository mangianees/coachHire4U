import React from 'react';

const videoId = '175383894';
const iframeUrl = `https://player.vimeo.com/video/${videoId}?api=1&player_id=your-player-id`;

const VimeoVideoPlayer = () => (
  <iframe
    src={iframeUrl}
    frameBorder="0"
    width="100%"
    height="100%"
    allowFullScreen
  />
);

export default VimeoVideoPlayer;