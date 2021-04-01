import Nav from '../Nav/NavBar'
export default function Welcome () {
    
    const clientId = 'e244682973e24a3caa0b3a29bb72f95a'
    const uri = 'http://localhost:3000'
    const scopes = ['streaming', 'user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-library-read', 'user-library-modify']
    const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${ clientId }&response_type=code&redirect_uri=${ uri }&scope=${ scopes.join('%20') }`
    
    return  <div className='container d-flex flex-column' style={{ height: '100vh' }}>
                <Nav />
                <main className=''>
                    <div className='text-center text-white'>
                        <h1>Shuffle</h1>
                        <p>Musics and Lyrics finder base on Spotify database API
                            <br />Musics and Lyrics finder base on Spotify database API
                            <br />Musics and Lyrics finder base on Spotify database API
                        </p>
                        <a className="btn btn-lg btn-info font-weight-bold" 
                            href={ authorizeURL }>Login with Spotify</a>
                    </div>
                </main>
            </div>
}