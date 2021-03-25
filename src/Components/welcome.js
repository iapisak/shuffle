
export default function Welcome () {
    
    const clientId = 'e244682973e24a3caa0b3a29bb72f95a'
    const uri = 'http://localhost:3000'
    const scopes = ['streaming', 'user-read-email', 'user-read-private', 'user-read-playback-state', 'user-modify-playback-state', 'user-library-read', 'user-library-modify']
    const authorizeURL = `https://accounts.spotify.com/authorize?client_id=${ clientId }&response_type=code&redirect_uri=${ uri }&scope=${ scopes.join('%20') }`
    
    return (
        <div className="flex-grow-1 position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
            <div className="col-md-5 p-lg-5 mx-auto my-5">
                <h1 className="display-4 fw-normal">Punny headline</h1>
                <p className="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
                <a className="btn btn-success" href={ authorizeURL }>Login with Spotify</a>
            </div>
            <div className="product-device shadow-sm d-none d-md-block"></div>
            <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
        </div>
    )
}