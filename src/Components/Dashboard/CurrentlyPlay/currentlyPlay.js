

export default function CurrentlyPlay ({ currentlyPlay, setSong, handleModal }) {


    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>Recently Played</h2>
            </div>
            <div className="d-flex" style={{ overflowX: 'scroll' }}>
                { currentlyPlay.length ?
                    currentlyPlay.map(track => {
                        let { title, artist, artists, url, trackUri } = track

                        let tempTitle
                        if (title.length > 10) {
                            let temp = title.substring(0, 10)
                            tempTitle = temp + '...'
                        } else tempTitle = title

                        return  <div className='ml-3 border-0'
                                        key={ `key${trackUri}` }
                                        style={{ cursor: 'pointer' }} 
                                        onClick={ async ()=> { 
                                            await setSong({artist, artists, title, url, trackUri})
                                            await handleModal()
                                        }}>
                                    <img className='' src={ url }  alt='' style={{ width: '120px'}}/>
                                    <div className='text-center p-2'>
                                        <div>{ tempTitle }</div>
                                        <div className='text-muted'>{ artist }</div>
                                    </div>
                                </div>
                        })
                    : <div className='d-flex justify-content-center align-items-center border ml-3' style={{ width: '120px', height: '120px'}}>
                            No Song Played
                      </div>
                }
            </div>
        </div>
    )
}