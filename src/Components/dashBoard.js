import { useState, useEffect } from 'react'
import NewReleased from './newReleased'
import Search from './search'
import SideNav from './sideNav'
import Player from './player'
import Lyric from './lyric'
import SpotifyWebApi from 'spotify-web-api-node'
import axios from 'axios'

const spotifyApi = new SpotifyWebApi({clientId: 'e244682973e24a3caa0b3a29bb72f95a'})

export default function Dashboard ({ accessToken, search }) {
    const [ searchTracks, setSearchTracks] = useState([])
    const [ newReleased, setNewReleased ] = useState([])
    const [ song, setSong ] = useState({})
    const [ lyric, setLyric ] = useState('')

    const selectSong = (artist, title) => {
        setSong({ artist, title })
    }

    useEffect(()=> {
        if (!song) return
        axios.get(`http://localhost:4000/api/v1/lyric/${song.artist}/${song.title}`)
        .then(({ data }) => setLyric(data.lyric))
        .catch(err => console.log(err))
        console.log(lyric)
    }, [song])
    
    useEffect(() => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)
    }, [accessToken])
    
    useEffect(() => {
        if (!search) return setSearchTracks([])
        spotifyApi.searchTracks(search).then(data => {
            const searhResult = data.body.tracks.items.map(track => {
                const image = track.album.images.reduce((min, current) => {
                    if (min.height < current.height) return current
                    return min
                }, track.album.images[0])

                return {
                    id: track.id,
                    title: track.name,
                    artist: track.artists[0],
                    album: track.album.name,
                    image: image,
                    released: track.album.release_date,
                    duration: track.duration_ms,
                    trackUri: track.uri,
                }
            })
            setSearchTracks(searhResult)
        })
    }, [search, accessToken])

    useEffect(() => {
        if (!accessToken) return setNewReleased([])
        spotifyApi.getNewReleases({ limit: 30, offset: 0, country: 'US'})
            .then(async res => {
                const newReleasedResults = await res.body.albums.items.map(track => {
                const image = track.images.reduce((min, current) => {
                    if (min.height < current.height) return current
                    return min
                }, track.images[0])

                return {
                    id: track.id,
                    artist: track.artists[0].name,
                    image: image,
                    title: track.name,
                    released: track.release_date,
                    trackUri: track.uri
                }
            })
        setNewReleased(newReleasedResults)
        })
    }, [accessToken]) 

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNav />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    { !searchTracks.length ? <NewReleased newReleased={ newReleased } selectSong={ selectSong } /> 
                                           : <Search searchTracks={ searchTracks } selectSong={ selectSong } /> }
                </main>
                <Player accessToken={ accessToken } />
            </div>
        </div>
    )
}