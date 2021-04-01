export default function RecentlyPlayed ({ recentlyPlayed, setSong, handleModal }) {
    return  <div className='d-flex' style={{ overflowX: 'scroll' }}>
                { recentlyPlayed.map(track => {
                    let { title, artist, artists, url, trackUri } = track
                    return <div className="card mr-2 border-0"
                                key={ url }
                                style={{ width: '8rem', flexShrink: '0', cursor: 'pointer' }}
                                onClick={ async ()=> { 
                                        await setSong({artist, artists, title, url, trackUri})
                                        await handleModal() }}>
                                <img className="card-img-top" src={ url } alt="" />
                                <div className="card-body p-1 text-center" style={{ fontSize: '.8rem'}}>
                                    <div className="">{ title }</div>
                                </div>
                            </div>
                }) }
            </div>  
}