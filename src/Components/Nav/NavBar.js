export default function NavBar ({ searchKey, setSearchKey }) {                                                                                        

    const logOut = () => {
        const url = 'https://www.spotify.com/logout/'                                                                                                                                                                                                                                                                               
        window.open(url, 'Spotify Logout', 'width=400,height=500,top=40,left=40')
    }

    return  <nav className="container navbar navbar-expand-md navbar-dark px-0 px-3"
                 style={{ backgroundColor: 'rgba(117,98,19,0.9)' }}>
                <h4 className="text-warning m-0"
                    style={{ textShadow: '0 0.05rem 0.1rem rgba(255,255,255,0.9))', cursor: 'pointer' }} 
                    onClick={()=> setSearchKey('')}>Shuffle</h4>
                <button className="navbar-toggler collapsed my-3 text-dark" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-dark"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mr-md-2">
                            <input className="form-control mr-sm-2 bg-light border-0" 
                                   style={{ borderRadius: '30px' }}
                                   type="search" placeholder="Search Songs / Artists" aria-label="Search" 
                                   value={ searchKey }
                                   onChange={(e)=> setSearchKey(e.target.value)} />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-warning" 
                                href='/'
                                onClick={()=> logOut() }>Log out</a>
                        </li>
                    </ul>
                </div>
            </nav>
}