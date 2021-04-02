export default function RecentlyPlayed ({ recentlyPlayed }) {

    return  <>

            <div className='mt-3 p-3' style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                <h1 className='display-5 text-success pb-2'
                    style={{ textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.1))' }}>Recently Played</h1>
                { recentlyPlayed.length
                    ?   <div className='d-flex' style={{ overflowX: 'scroll' }}>
                            { recentlyPlayed.map(track => {
                                const { title, artist, artists, url, trackUri } = track
                                return <div className="mr-3 mb-3 border-0"
                                            key={ url }
                                            style={{ width: '8rem', flexShrink: '0', cursor: 'pointer', backgroundColor: 'none' }}
                                            onClick={ async ()=> { 
                                                    // await setSong({ artist, artists, title, url, trackUri })
                                                    // await handleModal() 
                                                }}>
                                            <img className="card-img-top" src={ url } 
                                                    style={{ borderRadius:'5%' }} alt="" />
                                            <div className="card-body p-1 text-center" style={{ fontSize: '.8rem'}}>
                                                <div className="text-light">{ title }</div>
                                            </div>
                                        </div>
                            }) }
                        </div>  

                    :   <div className="mr-3 mb-3 border-0" style={{ width: '8rem', flexShrink: '0', backgroundColor: 'none' }}>
                            <img className="card-img-top" 
                                src='https://cdn0.iconfinder.com/data/icons/internet-2020/1080/Applemusicandroid-512.png' 
                                alt="" />
                            <div className="card-body p-1 text-center" style={{ fontSize: '.8rem'}}>
                                <div className="text-light">No song</div>
                            </div>
                        </div>
                }
            </div>
            <h1 className='display-5 text-light px-3 mt-3' 
                style={{ textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.4)' }}>Recently Played</h1>
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
                    { recentlyPlayed.map(track => {
                        const { title, artist, artists, url, trackUri } = track
                        const key = `${artist}${url}`
                        return <tr key={ key } style={{ cursor: 'pointer' }} 
                                    onClick={async () => {
                                        // await setSong({artist, artists, title, url, trackUri})
                                        // await handleModal()
                                    }}>
                                    <td className='text-center'><img src={ url } style={{ height: '30px', width: '30px', borderRadius:'50%' }} alt='' /></td>
                                    <td>{ title }</td>
                                    <td>{ artist }</td>
                                </tr> 
                                })
                    }
                    </tbody>
                </table>
            </div>
            </>
}