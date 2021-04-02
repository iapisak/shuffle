export default function NavBar ({ searchKey, setSearchKey, toggle, setToggle }) {                                                                                        

    const logOut = () => {
        const url = 'https://www.spotify.com/logout/'                                                                                                                                                                                                                                                                               
        window.open(url, 'Spotify Logout', 'width=400,height=500,top=40,left=40')
    }

    return  <nav className="container navbar navbar-expand-md navbar-dark px-0 px-3"
                 style={{ backgroundColor: 'rgba(117,98,19,0.9)' }}>
                <h4 className="text-light font-weight-bold m-0 navbar-link"
                    style={{ textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.2))' }} 
                    onClick={()=> setSearchKey('')}>Shuffle by Spotify</h4>
                <button className="navbar-toggler collapsed my-3 text-dark" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-dark"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item d-none d-md-block d-lg-block">
                            <div className='nav-link text-light'>Search</div>
                        </li>
                        <li className="nav-item mr-md-2">
                            <input className="form-control mr-sm-2 border-0 pl-3 bg-light" 
                                style={{ borderRadius: '30px' }}
                                type="search" placeholder="Songs / Artists" aria-label="Search" 
                                value={ searchKey }
                                onChange={(e)=> setSearchKey(e.target.value)} />
                        </li>
                        <li className="nav-item">
                            <div className="nav-link text-warning navbar-link" 
                                 onClick={()=> { 
                                     setToggle(false)
                                     setSearchKey('')
                                 } }>Home</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link text-warning navbar-link" 
                                 onClick={()=> {
                                     setToggle(!toggle)
                                     setSearchKey('')
                                } }>History</div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" 
                                href='/'
                                onClick={()=> logOut() }>Log out</a>
                        </li>
                    </ul>
                </div>
            </nav>
}
