

export default function Welcome () {
    
    const clientId = 'e244682973e24a3caa0b3a29bb72f95a'
    const uri = 'http://localhost:3000'
    const scopes = ['streaming', 'user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-library-read', 'user-library-modify']
    const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${ clientId }&response_type=code&redirect_uri=${ uri }&scope=${ scopes.join('%20') }`
    
    return (
        <div className="position-relative overflow-hidden p-md-5 text-center" style={{ height: '95vh'}}>
            <div className="col-md-8 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal font-pk" style={{ fontWeight: '900' }}>Shuffle musics</h1>
                <div className="lead fw-normal">Musics and Lyrics finder base on Spotify database API</div>
                <a className="btn btn-lg p-4" style={{ color: '#F8E5E5', backgroundColor: '#C39EA0', fontWeight: '900', borderRadius: '30px' }}href={ authorizeURL }>Login with Spotify</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    )
}