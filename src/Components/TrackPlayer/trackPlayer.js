import { Modal } from 'react-bootstrap'
import SpotifyWebPlayer from 'react-spotify-web-playback'
import moment from 'moment'

export default function TrackInfo ({ show, handleModal, lyric, song, accessToken, setPlay }) {
    
    const { title, artists, image, uri, release_date } = song
    const date = release_date.replace('/-/g', '')
  
    return (
        <Modal show={ show } onHide={ handleModal } backdrop="static" keyboard={ false }>
            <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
                <Modal.Title className='text-warning lead'>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row m-0 g-0 overflow-hidden flex-md-row h-md-250 position-relative text-dark">
                    <div className="col-auto d-none d-lg-block p-0">
                        <img className="" src={ image } style={{ width: '180px' }} alt="" />
                    </div>
                    <div className="col pl-4 d-flex flex-column position-static">
                        <h3 className="display-5 mb-4">Play Track</h3>
                        <div className="mb-1 text-normal">By { artists.map(artist => artist.name ).join(', ')}</div>
                        <div className="mb-3">Released on { moment(date).format('MMMM D, YYYY') }<br />{ moment(date).fromNow() }</div>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    { lyric ? 
                        lyric === 'not found' 
                            ? <div className='d-flex flex-column justify-content-center align-items-center text-center' style={{ height: '10vh' }}>
                                <h5 className='mt-3 mb-0 text-dark'>Lyric could not be found at this moment.</h5>
                              </div>
                            : <>
                                <h4 className='py-2 text-dark'>Lyrics</h4> 
                                <div className='flex-grow-1 overflow-auto' style={{ height: '45vh' }}>
                                  <div className='text-muted text-center' style={{ whiteSpace: 'pre', fontSize: '.875rem' }}>{ lyric }</div>
                                </div>
                              </>
                    : <div className='d-flex flex-column justify-content-center align-items-center' style={{ height: '10vh' }}>
                        <h5 className='mt-3 mb-0 text-dark'>Loading...</h5> 
                      </div>  }
                      
                </div>
            </Modal.Body>
            <Modal.Footer>
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
                        activeColor: 'red',
                        bgColor: 'black',
                        color: '#fff',
                        loaderColor: '#ffc107',
                        sliderColor: '#ffc107',
                        trackArtistColor: '#ffc107',
                        trackNameColor: '#ffc107',
                        }}
                    />
            </Modal.Footer>
        </Modal>
  )
}