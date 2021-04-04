import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Auth from './Components/auth'
import Nav from './Components/Nav/navBar'
import DashBoard from './Components/Dashboard/dashBoard'
import LandingPage from './Components/LandingPage/landingPage'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import './Loading.css'

const authorizeCode = new URLSearchParams(window.location.search).get('code')

function App () {
    const accessToken = Auth(authorizeCode)
    const [ searchKey, setSearchKey ] = useState('')   
    const [ newReleased, setNewReleased ] = useState([])
    const [ searchTracks, setSearchTracks] = useState([])
    const [ recentlyPlayed, setRecentlyPlayed ] = useState([])
    const [ toggle, setToggle ] = useState(false)
    
    useEffect(()=> {
        if (searchKey) return setToggle(false)
    }, [searchKey])

    useEffect(() => {
        if (toggle) return setSearchKey('')
    }, [toggle])

    // New Released on Dashboard Function
    useEffect(() => {
        if (!accessToken) return
        const spotifyApi = new SpotifyWebApi({
            clientId: 'e244682973e24a3caa0b3a29bb72f95a',
            accessToken: accessToken
        })
        spotifyApi.getNewReleases({ limit: 30, offset: 0, country: 'US'})
        .then(async data => {
                const results = await data.body.albums.items.map(track => {
                    const { id, name, artists, album_type, images, uri, release_date } = track
                    const image = images.reduce((min, current) => {
                        if (min.height < current.height) return current
                        return min }, track.images[0])
                    return { id, title: name, artists, album_type, image: image.url, uri, release_date }
            })
        setNewReleased(results)
        })
    }, [accessToken]) 

    // Search Tracks Functions
    useEffect(() => {
        if (!accessToken) return
        if (!searchKey) return setSearchTracks([])
        const spotifyApi = new SpotifyWebApi({
            clientId: 'e244682973e24a3caa0b3a29bb72f95a',
            accessToken: accessToken
        })
        spotifyApi.searchTracks(searchKey).then(data => {
            const results = data.body.tracks.items.map(track => {
                const { id, name, artists, album: { album_type }, album: { images }, uri, album: { release_date }} = track
                const image = images.reduce((min, current) => {
                    if (min.height < current.height) return current
                    return min }, track.album.images[0])
                return { id, title: name, artists, album_type, image: image.url, uri, release_date }
            })
            setSearchTracks(results)
        })
    }, [searchKey, accessToken])

    return  authorizeCode ? 
                <div className='container p-0 mb-3 d-flex flex-column' style={{ height: '100vh' }}>
                    <Nav searchKey={ searchKey } 
                         setSearchKey={ setSearchKey } 
                         recentlyPlayed={ recentlyPlayed }
                         toggle={ toggle} 
                         setToggle={ setToggle } />
                         { accessToken ? 
                            <DashBoard accessToken={ accessToken }
                                    recentlyPlayed={ recentlyPlayed }
                                    setRecentlyPlayed= { setRecentlyPlayed }
                                    newReleased={ newReleased }
                                    searchKey={ searchKey }
                                    searchTracks={ searchTracks } 
                                    toggle={ toggle } 
                                    setToggle={ setToggle } /> 
                            : <div className="flex-grow-1 d-flex flex-column justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.8)'}}>
                                <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                              </div>
                         
                        }
                </div>
            : <LandingPage /> 
}

export default App

