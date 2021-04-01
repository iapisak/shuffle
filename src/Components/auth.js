import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Auth (authorizeCode)  {

    const [ accessToken, setAccessToken ] = useState()
    const [ refreshToken, setRefreshToken] = useState()
    const [ expiresIn, setExpiresIn] = useState()
    

    useEffect(()=> {
        const url = process.env.REACT_APP_API_URL
        axios.post(`${url}/api/v1/login`, { authorizeCode })
             .then(res => {
                setAccessToken(res.data.accessToken)
                setRefreshToken(res.data.refreshToken)
                setExpiresIn(res.data.expiresIn)
                window.history.pushState({}, null, '/')
             }).catch(()=> window.location = '/')
    }, [ authorizeCode ])

    useEffect(()=> {
        if (!refreshToken) return 
        const url = process.env.REACT_APP_API_URL
        const setTimer = setInterval(() => {
            axios.post(`${url}/api/v1/refresh`, { refreshToken })
            .then(res => {
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
            }).catch(()=> window.location = '/')
        }, (expiresIn - 60) * 1000)
        
        return () => clearInterval(setTimer)

    }, [ refreshToken, expiresIn ])
    
    return accessToken
}