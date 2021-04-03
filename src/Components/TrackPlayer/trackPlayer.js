import { Modal } from 'react-bootstrap'
import SpotifyWebPlayer from 'react-spotify-web-playback'

export default function TrackInfo ({ show, handleModal, lyric, song, accessToken, setPlay }) {
  const { title, artists, image, uri } = song
  
  return (
        <Modal show={ show } onHide={ handleModal } backdrop="static" keyboard={ false }>
            <Modal.Header closeButton style={{ backgroundColor: 'black' }}>
                <Modal.Title className='text-warning lead'>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex pb-3' style={{ borderBottom: '1px solid #dee2e6'}}>
                    <img className='' src={ image } style={{ height: '180px', width: '180px' }} alt='' />
                    <div className='d-flex flex-column pl-3'>
                        <div className='text-dark'>
                          { artists.map(artist =>  <h3 className='mb-0' key={ artist.id }>{artist.name}</h3> )}
                        </div>
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