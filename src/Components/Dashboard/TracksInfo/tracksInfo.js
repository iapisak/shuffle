export default function TracksInfo ({ tracksInfo, setSong, handleModal }) {

    return  <div className='d-flex' style={{ overflowX: 'scroll' }}>
                { tracksInfo.map(track => {
                    let { title, artist, artists, url, trackUri } = track
                    return <div className="mr-3 mb-3 border-0"
                                key={ url }
                                style={{ width: '8rem', flexShrink: '0', cursor: 'pointer', backgroundColor: 'none' }}
                                onClick={ async ()=> { 
                                        await setSong({artist, artists, title, url, trackUri})
                                        await handleModal() }}>
                                <img className="card-img-top" src={ url ? url : track.image.url } 
                                     style={{ borderRadius:'5%' }} alt="" />
                                <div className="card-body p-1 text-center" style={{ fontSize: '.8rem'}}>
                                    <div className="text-light">{ title }</div>
                                </div>
                            </div>
                }) }
            </div>  
}