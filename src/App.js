import { useState, useEffect } from 'react'
import SpotifyWebApi from 'spotify-web-api-node'
import Auth from './Components/auth'
import Header from './Components/Header/header'
import Nav from './Components/Nav/nav'
import LandingPage from './Components/LandingPage/landingPage'
import DashBoard from './Components/Dashboard/dashBoard'

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import background from './bg.png'

const authorizeCode = new URLSearchParams(window.location.search).get('code')

export default function App () {
    const accessToken = Auth(authorizeCode)
    const [ searchKey, setSearchKey ] = useState('')   
    const [ newReleased, setNewReleased ] = useState([])
    const [ searchTracks, setSearchTracks] = useState([])
    const [ currentlyPlay, setCurrentlyPlay ] = useState([])

    // New Released on Dashboard Function
    useEffect(() => {
        if (!accessToken) return
        const spotifyApi = new SpotifyWebApi({
            clientId: 'e244682973e24a3caa0b3a29bb72f95a',
            accessToken: accessToken
        })
        spotifyApi.getNewReleases({ limit: 30, offset: 0, country: 'US'})
        .then(async data => {
                const newReleasedResults = await data.body.albums.items.map(track => {
                const image = track.images.reduce((min, current) => {
                    if (min.height < current.height) return current
                    return min
                }, track.images[0])

                return {
                    id: track.id,
                    title: track.name,
                    artists: track.artists,
                    artist_Id: track.artists[0].id,
                    artist: track.artists[0].name,
                    image: image,
                    released: track.release_date,
                    trackUri: track.uri
                }
            })
        setNewReleased(newReleasedResults)
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
                const image = track.album.images.reduce((min, current) => {
                    if (min.height < current.height) return current
                    return min
                }, track.album.images[0])

                return {
                    id: track.id,
                    title: track.name,
                    artists: track.album.artists,
                    artist: track.artists[0],
                    album: track.album.name,
                    image: image,
                    released: track.album.release_date,
                    duration: track.duration_ms,
                    trackUri: track.uri,
                }
            })
            setSearchTracks(results)
        })
    }, [searchKey, accessToken])

    return  <div className='container-fluid p-0'>
                <Header accessToken={ accessToken } 
                        searchKey={ searchKey } 
                        setSearchKey={ setSearchKey } />
                { accessToken ? 
                <div className='d-flex flex-column'>
                    <Nav />
                    <DashBoard accessToken={ accessToken }
                               currentlyPlay={ currentlyPlay }
                               setCurrentlyPlay= { setCurrentlyPlay }
                               newReleased={ newReleased }
                               searchTracks={ searchTracks }/> 
                </div>
                : <LandingPage /> }
            </div>
}


