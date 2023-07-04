import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';

function Audio() {
  return (
    <div>
        <AudioPlayer src="https://podcast-api.netlify.app/placeholder-audio.mp3" layout="stacked-reverse" />
    </div>
  )
}

export default Audio