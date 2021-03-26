

export default function Search ({ searchTracks, setSong, handleModal }) {
    
    return (
        <div className='mt-3'>
            <h2>Search Result</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        { searchTracks.length ? searchTracks.map(track => {
                            const { id, title, artist: { name: artist }, artists, image: { url }, album, duration, trackUri } = track

                            return  <tr key={ id }
                                        style={{ cursor: 'pointer' }} 
                                        onClick={async () => {
                                            await setSong({artist, artists, album, title, url, trackUri})
                                            await handleModal()
                                        }}>
                                        <td>
                                            <img src={ url } style={{ height: '30px', width: '30px' }} alt='' />
                                        </td>
                                        <td>{ title }</td>
                                        <td>{ album }</td>
                                        <td>{ artist }</td>
                                        <td>{ parseFloat(duration / 60000 ).toFixed(2) }</td>
                                    </tr>
                        }) : null }
                    </tbody>
                </table>
            </div>
        </div>
    )
}