export default function Search ({ searchKey, searchTracks, setSong, handleModal }) {
    
    return  searchKey && !searchTracks.length 
            ?   <div className="p-3 p-md-5 mb-2 mt-5 text-white bg-none" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                    <div className="col-md-6 px-0">
                        <h1 className="display-5 font-italic">No Song / Artist found</h1>
                    </div>
                </div>
            :   <>
                    <h2 className='fdisplay-5 mt-5 text-white'>Search Result</h2>
                    <div className="p-3 p-md-5 mb-2 text-white bg-none" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <div className="col-md-6 px-0">
                            <h1 className="display-5 font-italic">Artist</h1>
                            <p className="lead my-3">Song Name</p>
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-sm table-hover text-white">
                            <thead className='bg-dark'>
                                <tr>
                                    <th></th>
                                    <th>Title</th>
                                    <th>Artist</th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: 'rgba(0,0,0,0.3)'}}>
                            { searchTracks.map(track => {
                            const { id, title, artist: { name: artist }, artists, image: { url }, album, trackUri } = track
                            return <tr key={ id } style={{ cursor: 'pointer' }} 
                                        onClick={async () => {
                                            await setSong({artist, artists, album, title, url, trackUri})
                                            await handleModal()
                                        }}>
                                        <td><img src={ url } style={{ height: '30px', width: '30px' }} alt='' /></td>
                                        <td>{ title }</td>
                                        <td>{ artist }</td>
                                    </tr>})}
                            </tbody>
                        </table>
                    </div>
                </>
                
}