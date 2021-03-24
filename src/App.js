import { useState } from 'react'
import Auth from './Components/auth'
import Welcome from './Components/welcome'
import DashBoard from './Components/dashBoard'

import 'bootstrap/dist/css/bootstrap.min.css'

const authorizeCode = new URLSearchParams(window.location.search).get('code')

export default function App () {
    const accessToken = Auth(authorizeCode)
    const [ search, setSearch ] = useState('')
  
  return (
    <div>
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="/">SpotifyWorkShops</a>
            <button className="navbar-toggler position-absolute d-md-none collapse" type="button" data-bs-toggle="collapsed" data-bs-target="sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            {
                accessToken ? <>
                                    <input className="form-control form-control-dark w-100" 
                                        type="search" placeholder="Search Songs/Artists" aria-label="Search" 
                                        value={ search } onChange={(e)=> setSearch(e.target.value)} />
                                    <ul className="navbar-nav px-3">
                                        <li className="nav-item text-nowrap">
                                            <a className="nav-link" href="/">Sign out</a>
                                        </li>
                                    </ul>
                                </>
                            : null
            }
        </header>

        { accessToken ? <DashBoard accessToken={ accessToken } search={ search }/> : <Welcome /> }
    </div>
  )
}


