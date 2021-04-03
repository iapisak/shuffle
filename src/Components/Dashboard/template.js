import moment from 'moment'

export default function Template ({ data, head, setSong, handleModal }) {
    return  <>
                <div className='p-3' style={{ backgroundColor: 'rgba(0,0,0,0.8)' }}>
                    <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            { data.map((track, index) => {
                                const { id, title, artists, album_type, image, uri, release_date } = track
                                const date = release_date.replace('/-/g', '')
                                const trackKey = `${id} + ${ title }`
                                return  <div className={ index === 0 ? 'carousel-item active' : 'carousel-item'} key={ trackKey}>
                                            <div className="row m-0 g-0 overflow-hidden flex-md-row h-md-250 position-relative">
                                                <div className="col-auto d-none d-lg-block p-0">
                                                    <img className="" src={ image } style={{ width: '200px' }} alt="" />
                                                </div>
                                                <div className="col pl-4 d-flex flex-column position-static">
                                                    <h4 className="lead mb-0">{ title }</h4>
                                                    <h1 className="display-4 font-weight-bold mb-0">{ head }</h1>
                                                    <div className="mb-1 text-normal">By { artists.map(artist => artist.name ).join(', ')}</div>
                                                    <div className="mb-3">Released on { moment(date).format('MMMM D, YYYY') }, { moment(date).fromNow() }</div>
                                                    <div>
                                                        <button className='btn btn-lg btn-warning'
                                                                style={{ borderRadius: '30px' }}
                                                                onClick={ async ()=> { 
                                                                    await setSong({ id, title, artists, album_type, image, uri, release_date })
                                                                    await handleModal() }}>Play this song
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                            })}
                        </div>
                        <div className="carousel-control-prev" style={{ width: '5%'}}
                             type="button" data-target="#carouselExampleInterval" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        </div>
                        <div className="carousel-control-next" style={{ width: '5%'}}
                             type="button" data-target="#carouselExampleInterval" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
                <div className="table-responsive flex-grow-1" style={{ backgroundColor: 'rgba(0,0,0,0.8)'}}>
                    <table className="table table-sm text-light">
                        <thead className=''>
                            <tr>
                                <th className='pl-4'></th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th className='text-right pr-4'>Release date</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        { data.map(track => {
                            const { id, title, artists, album_type, image, uri, release_date } = track
                            const date = release_date.replace('/-/g', '')
                            return <tr key={ id } style={{ cursor: 'pointer' }} 
                                        onClick={async () => {
                                            await setSong({ id, title, artists, album_type, image, uri, release_date })
                                            await handleModal()
                                        }}>
                                        <td className='text-right pl-4 pr-3'>
                                            <img src={ image } style={{ height: '30px', width: '30px', borderRadius:'50%' }} alt='' />
                                        </td>
                                        <td>{ title }</td>
                                        <td>{ artists[0].name }</td>
                                        <td className='text-right pr-4'>{ moment(date).format('MMM D, YYYY') }</td>
                                        <td>{ moment(date).fromNow() }</td>
                                    </tr>})}
                        </tbody>
                    </table>
                </div>
            </>
}