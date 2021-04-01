export default function NavBar ({ searchKey, setSearchKey}) {
    return  <nav className="container navbar navbar-expand-md navbar-dark px-0">
                <a className="navbar-brand" href="/">Shuffle by Spotify</a>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarCollapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <input className="form-control mr-sm-2 bg-light" 
                                   type="search" placeholder="Search Songs / Artists" aria-label="Search" 
                                   value={ searchKey }
                                   onChange={(e)=> setSearchKey(e.target.value)} />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Log out</a>
                        </li>
                    </ul>
                </div>
            </nav>
}