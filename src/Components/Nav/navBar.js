export default function NavBar ({ searchKey, setSearchKey, recentlyPlayed, toggle, setToggle }) {                                                                                        

    const logOut = () => {
        const url = 'https://www.spotify.com/logout/'                                                                                                                                                                                                                                                                               
        window.open(url, 'Spotify Logout', 'width=400,height=500,top=40,left=40')
    }

    return  <nav className="container navbar navbar-expand-md navbar-dark px-0 px-3"
                 style={{ backgroundColor: '#5d4954' }}>
                <h4 className="m-0 text-light"
                    style={{ textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.2))' }} >Shuffle by Spotify</h4>
                <button className="navbar-toggler collapsed my-3 text-dark" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-dark"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-md-2">
                            <input className="form-control mr-sm-2 border-0 bg-light" 
                                style={{ borderRadius: '30px' }}
                                type="search" placeholder="Search songs/Artists" aria-label="Search" 
                                value={ searchKey }
                                onChange={(e)=> setSearchKey(e.target.value)} />
                        </li>
                        <li className="nav-item">
                            <div className="nav-link navbar-link" 
                                 onClick={()=> { 
                                     setToggle(false)
                                     setSearchKey('')
                                 } }>Home</div>
                        </li>
                        { recentlyPlayed.length ?   <li className="nav-item">
                                                        <div className="nav-link navbar-link" 
                                                        onClick={()=> {
                                                            setToggle(!toggle)
                                                            setSearchKey('')
                                                        } }>Recently Played</div>
                                                    </li> : null }
                        <li className="nav-item">
                            <a className="nav-link" 
                                href='/'
                                onClick={()=> logOut() }>Log out</a>
                        </li>
                    </ul>
                </div>
            </nav>
}
