import { useState, useEffect } from 'react'
import axios from 'axios'
import CurrentlyPlay from './CurrentlyPlay/currentlyPlay'
import NewReleased from './NewReleased/newReleased'
import Search from './Search/search'
import TrackPlayer from '../TrackPlayer/trackPlayer'

const initialSong = { 
    artist: '', 
    artists: [], 
    album: '',
    title: '', 
    url: '', 
    trackUri: '' }

export default function Dashboard ({ accessToken, currentlyPlay, setCurrentlyPlay, newReleased, searchTracks }) {

    const [ song, setSong ] = useState(initialSong)
    const [ lyric, setLyric ] = useState('')
    const [ play, setPlay ] = useState(false)

    // Modal Controller
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

    useEffect(() => {
        if (play === false) return
        if (!currentlyPlay.length) return setCurrentlyPlay([song])
        
        const isTrue = currentlyPlay.filter(item => item.trackUri === song.trackUri)
        
        if (isTrue.length) return
        const newArray = [...currentlyPlay]
        newArray.unshift(song)
        setCurrentlyPlay(newArray)
    }, [play])

    // Lyric API
    useEffect(()=> {
        if (!show || !song) return
        const {artist, title} = song
        axios.get(`http://localhost:4000/api/v1/lyric/${artist}/${title}`)
             .then(({ data }) => setLyric(data.lyric) )
    }, [show, song])
    
    return (
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ marginLeft: 'auto' }}>
                { !searchTracks.length ? <>
                                        <CurrentlyPlay currentlyPlay={ currentlyPlay } 
                                                setSong={ setSong } 
                                                handleModal={ handleModal } /> 
                                        <NewReleased newReleased={ newReleased } 
                                                setSong={ setSong } 
                                                handleModal={ handleModal } /> 
                                        </>
                                        : <Search searchTracks={ searchTracks } 
                                                  setSong={ setSong } 
                                                  handleModal={ handleModal } /> }
            <TrackPlayer show={ show } 
                         handleModal={ handleModal }
                         setPlay={ setPlay }
                         lyric={ lyric }
                         song= { song }
                         accessToken={ accessToken }/>
            </main>
    )
}