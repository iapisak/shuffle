import { useState, useEffect } from 'react'
import axios from 'axios'
import NewReleased from './NewReleased/newReleased'
import Search from '../search'
import TrackInfo from '../TrackPlayer/trackInfo'

export default function Dashboard ({ accessToken, newReleased, searchTracks }) {
    const [ song, setSong ] = useState({})
    const [ lyric, setLyric ] = useState('')

    // Modal Controller
    const [show, setShow] = useState(false)
    const handleModal = () => {
        setShow(!show)
    }

    const selectSong = (artist, title, url, trackUri) => {
        setSong({ artist, title, url, trackUri })
    }

    useEffect(() => {
        if (!show) {
            setSong({})
            setLyric('')
        }
    }, [show])

    // Lyric API
    useEffect(()=> {
        if (!show || !song) return
        const {artist, title} = song
        axios.get(`http://localhost:4000/api/v1/lyric/${artist}/${title}`)
             .then(({ data }) => setLyric(data.lyric) )
             .catch(err => console.log(err))
    }, [show, song])

    return (
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4" style={{ position: 'fixed', right: '0', height: '100vh' }}>
                { !searchTracks.length ? <NewReleased newReleased={ newReleased } 
                                                        selectSong={ selectSong } 
                                                        handleModal={ handleModal } /> 
                                        : <Search searchTracks={ searchTracks } 
                                                    selectSong={ selectSong } 
                                                    handleModal={ handleModal } /> }
            <TrackInfo show={ show } 
                        handleModal={ handleModal }
                        lyric={ lyric }
                        song= { song }
                        accessToken={ accessToken }/>
            </main>
    )
}