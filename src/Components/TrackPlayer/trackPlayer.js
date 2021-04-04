import { Modal } from 'react-bootstrap'
import SpotifyWebPlayer from 'react-spotify-web-playback'
import moment from 'moment'

export default function TrackInfo ({ show, handleModal, lyric, song, accessToken, setPlay }) {
    
    const { title, artists, image, uri, release_date } = song
    const date = release_date.replace('/-/g', '')
  
    return (
        <Modal show={ show } onHide={ handleModal } backdrop="static" keyboard={ false } 
               style={{ fontSize: '.875rem' }}>
            <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
                <Modal.Title className='text-secondary lead' style={{ fontSize: '1rem', fontWeight: '300' }}>
                    <h3 className='display-6 m-0 text-light'>Play List</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='p-0'>
                <div className="row p-3 m-0 border-bottom">
                    <div className="col p-4" style={{ backgroundColor: 'rgba(0,0,0,1)' }}>
                        <img className="img-fluid" src={ image } style={{ borderRadius: '50%' }} alt="" />
                    </div>
                    <div className="col-7 p-0 pl-3 d-flex flex-column text-dark justify-content-center">
                        <h1 className='display-6 m-0 font-weight-bold text-success'>Track</h1>
                        <p className="pl-2 mb-3" style={{ fontSize: '.875rem', color: '#6c757d' }}>{ title }</p>
                        <figure className='pl-2'>
                            <blockquote className="blockquote mb-1">
                                <p className="m-0" style={{ fontSize: '.875rem' }}>By ({ artists.map(artist => artist.name ).join(', ')})</p>
                            </blockquote>
                            <figcaption className="blockquote-footer">
                                Released on <cite title={ moment(date).fromNow() }>{ moment(date).fromNow() }</cite>
                            </figcaption>
                        </figure>
                    </div>
                </div>
                <div className='text-muted' >
                    { lyric ? lyric === 'not found' 
                                ? <div className='d-flex flex-column align-items-center justify-content-center background-model' 
                                       style={{ height: '53vh', backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${image}')` }}>
                                           <div className="container-fluid py-5">
                                                <h5 className="display-6 fw-bold text-center text-light">No Lyrics at this moment.</h5>
                                            </div>
                                  </div>
                                : 
                                    <div className='p-4 overflow-auto' style={{ height: '53vh' }}>
                                        <h4 className='mb-4 text-center'>Lyrics</h4> 
                                        <div className='text-center' style={{ whiteSpace: 'pre' }}>{ lyric }</div>
                                    </div>
                                  
                            : <div className='d-flex align-items-center justify-content-center background-model' 
                                   style={{ height: '53vh', backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${image}')` }}>
                                    <div className="container-fluid py-5">
                                        <h2 className="display-5 fw-bold text-center text-light">Loading...</h2>
                                    </div>
                              </div> }
                </div>
            </Modal.Body>
            <Modal.Footer className='p-0'>
                <SpotifyWebPlayer 
                    token={accessToken}
                    uris={uri ? uri : ''}
                    showSaveIcon
                    callback= {(state) => {
                        if (state.isPlaying) {
                            setPlay(true)
                        } else setPlay(false)
                    }}

                    styles={{
                        activeColor: 'pink',
                        bgColor: 'black',
                        color: 'white',
                        loaderColor: 'white',
                        sliderColor: 'gray',
                        trackArtistColor: 'gray',
                        trackNameColor: 'white',
                        }}
                    />
            </Modal.Footer>
        </Modal>
  )
}