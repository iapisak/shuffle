import RecentlyPlayed from '../RecentlyPlayed/recentlyPlayed'
export default function Home ({ newReleased, recentlyPlayed, setSong, handleModal }) {
    
    return  <>
            { recentlyPlayed.length
                ?   <div className='mt-3 p-3' style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}>
                        <h1 className='display-5 pb-3 text-white'>Recently Played</h1>
                        <RecentlyPlayed recentlyPlayed={ recentlyPlayed } 
                                        setSong={ setSong }
                                        handleModal={ handleModal } />
                    </div>
                :   null
            }
            <h1 className='display-5 text-white p-3'>Just Added</h1>
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
                    { newReleased.map(track => {
                        let { id, title, artist, artists, image: { url }, trackUri } = track
                        return <tr key={ id } style={{ cursor: 'pointer' }} 
                                    onClick={async () => {
                                        await setSong({artist, artists, title, url, trackUri})
                                        await handleModal()
                                    }}
                                    >
                                    <td><img src={ url } style={{ height: '30px', width: '30px' }} alt='' /></td>
                                    <td>{ title }</td>
                                    <td>{ artist }</td>
                                </tr> })}
                    </tbody>
                </table>
            </div>
            </>
}