import React from 'react'
import SpotifyWebPlayer from 'react-spotify-web-playback'

export default function Player ({ accessToken, trackUri }) {
    if (!accessToken) return null
    
    return <SpotifyWebPlayer 
                token={accessToken}
                uris={trackUri ? trackUri : ''}
                showSaveIcon

        styles={{
            activeColor: '#fff',
            bgColor: 'red',
            color: '#fff',
            loaderColor: '#fff',
            sliderColor: '#1cb954',
            trackArtistColor: '#ccc',
            trackNameColor: '#fff',
            }}
        />
}