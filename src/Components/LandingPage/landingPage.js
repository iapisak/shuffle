export default function Welcome () {
    
    const clientId = 'e244682973e24a3caa0b3a29bb72f95a'
    const uri = process.env.REACT_APP_API_REDIRECT
    const scopes = ['streaming', 'user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-library-read', 'user-library-modify']
    const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${ clientId }&response_type=code&redirect_uri=${ uri }&scope=${ scopes.join('%20') }`
    
    return  <div className='container-fluid p-0 d-flex flex-column justify-content-center align-items-center' style={{ height: '100vh' }}>
                <div className='py-5 w-100 d-flex flex-column  justify-content-center align-items-center text-center' 
                     style={{ backgroundImage: 'linear-gradient(147deg, rgba(44,62,80,0.5) 0%, rgba(0,0,0,0.6) 84%)', 
                              height: '70vh',
                              textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.1)' }}>
                        <h1 className='display-3 text-warning font-weight-bold' 
                            style={{ letterSpacing: '0.1rem', textShadow: '0 0.05rem 0.1rem rgba(255,255,255,0.2)'}}>Shuffle By Spotify</h1>
                        <p>Musics and Lyrics finder base on Spotify database API</p>
                        <a className="btn btn-lg bg-danger text-white lead mt-3" 
                            href={ authorizeURL }>Login with Spotify</a>
                </div>
            </div>
}