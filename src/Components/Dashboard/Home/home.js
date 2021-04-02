export default function Home ({ newReleased, setSong, handleModal }) {
    
    return  <>
                <div className='p-3' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    <h1 className='display-5 text-light pb-2'
                        style={{ textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.1))' }}>Recently Added</h1>
                    <div className='d-flex' style={{ overflowX: 'scroll' }}>
                        { newReleased.map(track => {
                            let { id, title, artist, artists, image: { url }, trackUri } = track
                            const trackKey = `${id} + ${ artist }`
                            
                            return <div className="mr-3 border-0"
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
                <div className="table-responsive h-100" style={{ backgroundColor: 'rgba(0,0,0,0.7)'}}>
                    <table className="table table-sm text-light font-weight-light">
                        <thead className='text-warning'>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Artist</th>
                            </tr>
                        </thead>
                        <tbody>
                        { newReleased.map(track => {
                            let { id, title, artist, artists, image: { url }, trackUri } = track
                            return <tr key={ id } style={{ cursor: 'pointer' }} 
                                        onClick={async () => {
                                            await setSong({artist, artists, title, url, trackUri})
                                            await handleModal()
                                        }}>
                                        <td className='text-right pr-3'>
                                            <img src={ url } style={{ height: '30px', width: '30px', borderRadius:'50%' }} alt='' />
                                        </td>
                                        <td>{ title }</td>
                                        <td>{ artist }</td>
                                    </tr> })}
                        </tbody>
                    </table>
                </div>
            </>
}