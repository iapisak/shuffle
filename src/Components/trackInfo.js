import Player from './player'
import { Modal } from 'react-bootstrap'

export default function TrackInfo ({ show, handleModal, lyric, song, accessToken }) {
  
  return (
        <Modal show={ show } onHide={ handleModal } backdrop="static" keyboard={ false }>
            <Modal.Header closeButton>
                <Modal.Title>{ song.title }</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex pb-3' style={{ borderBottom: '1px solid #dee2e6'}}>
                    <img className='' src={ song.url } style={{ height: '180px', width: '180px' }} alt='' />
                    <div className='d-flex flex-column pl-3'>
                        <div className='h6'>
                          { song.artist }
                          <div>Album: Song brabrabra</div>
                        </div>
                    </div>
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    { lyric ? 
                          <>
                            <h4 className='py-2'>Lyric</h4> 
                            <div className='flex-grow-1 overflow-auto' style={{ height: '45vh' }}>
                              <div className='text-muted text-center' style={{ whiteSpace: 'pre'}}>{ lyric }</div>
                            </div>
                          </>
                    : null }
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Player accessToken={ accessToken } />
            </Modal.Footer>
        </Modal>
  )

}