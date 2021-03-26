

export default function NewReleased ({ newReleased, setSong, handleModal }) {
    
    return (
        <div style={{ height: '73vh'}}>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>New Realeased</h2>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        US
                    </button>
                </div>
            </div>
            <div className="d-flex" style={{ overflowX: 'scroll' }}>
                { newReleased.length ? newReleased.map(track => {
                    let { id, title, artist, artists, image: { url }, trackUri } = track

                    let tempTitle
                    if (title.length > 10) {
                        let temp = title.substring(0, 10)
                        tempTitle = temp + '...'
                    } else tempTitle = title

                    return  <div className='ml-3 border-0'
                                    key={ id }
                                    style={{ cursor: 'pointer' }} 
                                    onClick={ async ()=> { 
                                        await setSong({artist, artists, title, url, trackUri})
                                        await handleModal()
                                    }}>
                                <img className='rounded-top' src={ url }  alt='' style={{ width: '120px'}}/>
                                <div className='text-center p-2'>
                                    <div>{ tempTitle }</div>
                                    <div className='text-muted'>{ artist }</div>
                                </div>
                            </div>
                    
                }) : null }
            </div>
        </div>
    )
}