import { Modal } from 'react-bootstrap'
import SpotifyWebPlayer from 'react-spotify-web-playback'

export default function TrackInfo ({ show, handleModal, lyric, song, accessToken, setPlay }) {
  const { artists, album, title, url, trackUri } = song
  
  return (
        <Modal show={ show } onHide={ handleModal } backdrop="static" keyboard={ false }>
            <Modal.Header closeButton>
                <Modal.Title>{ title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex pb-3' style={{ borderBottom: '1px solid #dee2e6'}}>
                    <img className='' src={ url } style={{ height: '180px', width: '180px' }} alt='' />
                    <div className='d-flex flex-column pl-3'>
                        <div className='h6'>
                          { artists.map(artist =>  <div key={ artist.id }>{artist.name}</div> )}
                          { album ? <div>Album: { album }</div> : null }
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    { lyric ? 
                        lyric === 'not found' 
                            ? <h5 className='mt-3 mb-0 text-muted'>No Lyric found at this moment</h5>
                            : <>
                                <h4 className='py-2'>Lyric</h4> 
                                <div className='flex-grow-1 overflow-auto' style={{ height: '45vh' }}>
                                  <div className='text-muted text-center' style={{ whiteSpace: 'pre'}}>{ lyric }</div>
                                </div>
                              </>
                    : <div>Loading...</div> }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <SpotifyWebPlayer 
                    token={accessToken}
                    uris={trackUri ? trackUri : ''}
                    showSaveIcon
                    callback= {(state) => {
                        if (state.isPlaying) {
                            setPlay(true)
                        } else setPlay(false)
                    }}

                    styles={{
                        activeColor: '#fff',
                        bgColor: '#333',
                        color: '#fff',
                        loaderColor: '#fff',
                        sliderColor: '#1cb954',
                        trackArtistColor: '#ccc',
                        trackNameColor: '#fff',
                        }}
                    />
            </Modal.Footer>
        </Modal>
  )
}