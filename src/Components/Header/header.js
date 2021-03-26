

export default function Header ({ accessToken, searchKey, setSearchKey }) {
    return  <header className="navbar sticky-top flex-md-nowrap p-0 flex-md-nowrap p-0" style={{ backgroundColor: '#C39EA0' }}>
                <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 py-2" href="/" style={{ color: '#F8E5E5' }}>Shuffle by Spotify</a>
                <button className="navbar-toggler position-absolute d-md-none collapsed" style={{ top: '.25rem', right: '1rem' }}
                        type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {
                    accessToken ? <>    
                                        <input className="form-control" style={{ border: 'none', fontWeight: '900' }} 
                                            type="search" placeholder="Search Songs/Artists" aria-label="Search" 
                                            value={ searchKey } onChange={(e)=> setSearchKey(e.target.value)} />
                                        <ul className="navbar-nav px-3">
                                            <li className="nav-item text-nowrap">
                                                <a className="nav-link" href="/">Sign out</a>
                                            </li>
                                        </ul>
                                    </>
                                : null
                }
            </header>
}