import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './Home/home'
import Search from './Search/search'
import TrackPlayer from '../TrackPlayer/trackPlayer'

const initialSong = { 
    artist: '', 
    artists: [], 
    album: '',
    title: '', 
    url: '', 
    trackUri: '' }

export default function Dashboard ({ accessToken, recentlyPlayed, setRecentlyPlayed, newReleased, searchKey, searchTracks }) {

    const [ song, setSong ] = useState(initialSong)
    const [ lyric, setLyric ] = useState('')
    const [ play, setPlay ] = useState(false)
    
    const addRecentlyPlayed = async () => {
        if (!song.trackUri) return 
        if (!recentlyPlayed.length) return setRecentlyPlayed([song])
        const isTrue = await recentlyPlayed.filter(item => item.trackUri === song.trackUri)
        if (isTrue.length) return
        const newArray = [...recentlyPlayed]
        newArray.unshift(song)
        setRecentlyPlayed(newArray)
    }

    useEffect(() => {
        if (!play) return
        addRecentlyPlayed()
    })

    // Modal Controller //
    const [show, setShow] = useState(false)
    const handleModal = () => {
        setShow(!show)
    }

    useEffect(() => {
        if (!show) {
            setSong(initialSong)
            setLyric('')
        }
    }, [show])
    // Modal Controller //

    // Lyric API
    useEffect(()=> {
        if (!show || !song) return
        const {artist, title} = song
        axios.get(`http://localhost:4000/api/v1/lyric/${artist}/${title}`)
             .then(({ data }) => setLyric(data.lyric) )
    }, [show, song])
    
    return  <>
                { !searchKey 
                    ? <Home newReleased={ newReleased }
                            recentlyPlayed={ recentlyPlayed }
                            setSong={ setSong } 
                            handleModal={ handleModal }/> 
                    : <Search   searchKey={ searchKey }
                                searchTracks={ searchTracks } 
                                setSong={ setSong } 
                                handleModal={ handleModal } /> 
                }

                <TrackPlayer    show={ show } 
                                handleModal={ handleModal }
                                setPlay={ setPlay }
                                lyric={ lyric }
                                song= { song }
                                accessToken={ accessToken }/>
            </>
            
}