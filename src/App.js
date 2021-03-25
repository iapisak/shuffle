import { useState } from 'react'
import Auth from './Components/auth'
import Welcome from './Components/welcome'
import DashBoard from './Components/dashBoard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


const authorizeCode = new URLSearchParams(window.location.search).get('code')

export default function App () {
    const accessToken = Auth(authorizeCode)
    const [ search, setSearch ] = useState('')    
  
  return (
    <div>
        <header className="navbar navbar-dark navbar navbar-dark sticky-top flex-md-nowrap p-0 shadow-dark flex-md-nowrap p-0 shadow" style={{ backgroundColor: '#212529'}}>
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3 p-2" href="/">Spotify</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" style={{ top: '.25rem', right: '1rem' }}
                    type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
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
        <div className='container-fluid'>
            { accessToken ? <DashBoard accessToken={ accessToken } search={ search }/> : <Welcome /> }
        </div>
        <div className='bg-dark'>
            bottom
        </div>
    </div>
  )
}


