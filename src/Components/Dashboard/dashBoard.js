import { useState, useEffect } from 'react'
import axios from 'axios'
import Template from './template'
import TrackPlayer from '../TrackPlayer/trackPlayer'

const initialSong = { 
    id: '',
    title: '', 
    artists: [], 
    album_type: '',
    image: '',
    uri: '', 
    release_date: '' }

export default function Dashboard ({ accessToken, recentlyPlayed, setRecentlyPlayed, newReleased, searchKey, searchTracks, toggle }) {

    const [ song, setSong ] = useState(initialSong)
    const [ lyric, setLyric ] = useState('')
    const [ play, setPlay ] = useState(false)

    const addRecentlyPlayed = async () => {
        if (!song.uri) return 
        if (!recentlyPlayed.length) return setRecentlyPlayed([song])
        const isTrue = await recentlyPlayed.filter(item => item.uri === song.uri)
        if (isTrue.length) return
        const newArray = [...recentlyPlayed]
        newArray.push(song)
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
        const artist = song.artists[0].name
        const title = song.title
        const url = process.env.REACT_APP_API_URL
        axios.get(`${url}/api/v1/lyric/${artist}/${title}`)
             .then(({ data }) => setLyric(data.lyric))
             .catch(err => console.log(err))
    }, [show, song])
    
    return  <>
            { toggle ? recentlyPlayed.length ? <Template data={ recentlyPlayed } head='Recently Played' setSong={ setSong } handleModal={ handleModal }/>
                                             : <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center py-5' 
                                                    style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                                                    <h4 className='display-4 lead'>No History</h4>
                                               </div>
                     : !searchKey ? <Template data={ newReleased } head='New Music' setSong={ setSong } handleModal={ handleModal }/> 
                                  : searchKey && !searchTracks.length 
                                            ?   <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center py-5' 
                                                        style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                                                    <h4 className='display-4 lead'>Error 404</h4>
                                                    <p className='display-6 mt-3'>We're sorry, the song/artist you request could not be found. <br /> Please go back to home page.</p>
                                                </div>
                                            :   <Template data={ searchTracks }
                                                        head='Search Result' 
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