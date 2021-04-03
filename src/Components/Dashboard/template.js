export default function Template ({ data, head, setSong, handleModal }) {

    return  <>
                <div className='p-3' style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
                    {/* <h1 className='display-5 text-light pb-2'
                        style={{ textShadow: '0 0.05rem 0.1rem rgba(0,0,0,0.1))' }}>{ head }</h1> */}
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            { data.map((track, index) => {
                                const { id, title, artists, album_type, image, uri, release_date } = track
                                const trackKey = `${id} + ${ title }`
                                return  <div className={ index === 0 ? 'carousel-item active' : 'carousel-item'} key={ trackKey}>
                                            <div className="row m-0 g-0 overflow-hidden flex-md-row shadow-sm h-md-250 position-relative">
                                                <div className="col-auto d-none d-lg-block p-0">
                                                    <img className="" src={ image } style={{ width: '250px' }} alt="" />
                                                </div>
                                                <div className="col p-4 d-flex flex-column position-static">
                                                    <h4 className="lead mb-0 text-warning">{ title }</h4>
                                                    <h1 className="display-4 font-weight-bold mb-0">{ head }</h1>
                                                    <div className="mb-1 text-normal">By { artists.map(artist => artist.name ).join(', ')}</div>
                                                    <div className="mb-3">Released on { release_date }</div>
                                                    <div>
                                                        <button className='btn btn-lg btn-success'>Play this song</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            })}
                        </div>
                        <div className="carousel-control-prev" type="button" data-target="#carouselExampleInterval" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            {/* <span className="visually-hidden"></span> */}
                        </div>
                        <div className="carousel-control-next" type="button" data-target="#carouselExampleInterval" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            {/* <span className="visually-hidden"></span> */}
                        </div>
                    </div>
                    

                    
                    {/* <div className='d-flex' style={{ overflowX: 'scroll' }}>
                        { data.map(track => {
                            const { id, title, artists, album_type, image, uri, release_date } = track
                            const trackKey = `${id} + ${ title }`
                            return <div className="mr-3 border-0"
                                        key={ trackKey}
                                        style={{ width: '8rem', flexShrink: '0', cursor: 'pointer', backgroundColor: 'none' }}
                                        onClick={ async ()=> { 
                                                await setSong({ id, title, artists, album_type, image, uri, release_date })
                                                await handleModal() 
                                        }}>
                                        <img className="card-img-top" src={ image } 
                                            style={{ borderRadius:'5%' }} alt="" />
                                        <div className="card-body p-1 text-center" style={{ fontSize: '.8rem'}}>
                                            <div className="text-light">{ title }</div>
                                        </div>
                                    </div>
                        }) }
                    </div> */}
                </div>
                <div className="table-responsive flex-grow-1 px-4" style={{ backgroundColor: 'rgba(0,0,0,0.7)'}}>
                    <table className="table table-sm text-light font-weight-light">
                        <thead className='text-warning'>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Released date</th>
                                <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                        { data.map(track => {
                            const { id, title, artists, album_type, image, uri, release_date } = track
                            return <tr key={ id } style={{ cursor: 'pointer' }} 
                                        onClick={async () => {
                                            await setSong({ id, title, artists, album_type, image, uri, release_date })
                                            await handleModal()
                                        }}>
                                        <td className='text-right pr-3'>
                                            <img src={ image } style={{ height: '30px', width: '30px', borderRadius:'50%' }} alt='' />
                                        </td>
                                        <td>{ title }</td>
                                        <td>{ artists[0].name }</td>
                                        <td>{ release_date }</td>
                                        <td>{ album_type }</td>
                                    </tr>})}
                        </tbody>
                    </table>
                </div>
            </>
}