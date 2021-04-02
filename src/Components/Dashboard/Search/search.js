
export default function Search ({ searchKey, searchTracks, setSong, handleModal }) {

    return  searchKey && !searchTracks.length 
            ?        <div className='d-flex flex-column justify-content-center align-items-center text-center mt-3 py-5' 
                          style={{ backgroundColor: 'rgba(0,0,0,0.8)', height: '70vh' }}>
                        <h4 className='display-4 lead text-warning'>Error 404</h4>
                        <p className='display-6 mt-3'>We're sorry, the song/artist you request could not be found. <br /> Please go back to home page.</p>
                    </div>
                
            :   <>
                    <div className='mt-3 p-3' style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                        <h1 className='display-5 text-success pb-2' 
                            style={{ textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.1)' }}>Artists/Songs</h1>
                        <div className='d-flex' style={{ overflowX: 'scroll' }}>
                            { searchTracks.map(track => {
                                const { id, title, artist: { name: artist }, artists, image: { url }, trackUri } = track
                                const trackKey = `${id} + ${ artist }`
                                
                                return <div className="mr-3 mb-3 border-0"
                                            key={ trackKey}
                                            style={{ width: '8rem', flexShrink: '0', cursor: 'pointer', backgroundColor: 'none' }}
                                            onClick={ async ()=> { 
                                                    await setSong({ artist, artists, title, url, trackUri })
                                                    await handleModal() }}>
                                            <img className="card-img-top" src={ url } 
                                                style={{ borderRadius:'5%' }} alt="" />
                                            <div className="card-body p-1 text-center" style={{ fontSize: '.8rem'}}>
                                                <div className="text-light">{ title }</div>
                                            </div>
                                        </div>
                            }) }
                        </div>  
                    </div>
                    <h1 className='display-5 text-light px-3 mt-3' 
                        style={{ textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.4)' }}>Search Result</h1>
                    <div className="table-responsive">
                        <table className="table table-sm text-light font-weight-light">
                            <thead className='text-light bg-danger'>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Artist</th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: 'rgba(0,0,0,0.8)'}}>
                            { searchTracks.map(track => {
                            const { id, title, artist: { name: artist }, artists, image: { url }, album, trackUri } = track
                            return <tr key={ id } style={{ cursor: 'pointer' }} 
                                        onClick={async () => {
                                            await setSong({artist, artists, album, title, url, trackUri})
                                            await handleModal()
                                        }}>
                                        <td className='text-center'>
                                            <img src={ url } style={{ height: '30px', width: '30px', borderRadius:'50%' }} alt='' />
                                        </td>
                                        <td>{ title }</td>
                                        <td>{ artist }</td>
                                    </tr>})}
                            </tbody>
                        </table>
                    </div>
                </>
                
}