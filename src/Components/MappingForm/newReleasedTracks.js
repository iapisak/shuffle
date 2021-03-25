export default function NewReleasedTracks ({ track, selectSong, handleModal }) {
    const { title, artist, image: { url } } = track

    return (
        <div style={{ cursor: 'pointer' }} 
            onClick={ async ()=> { 
                await selectSong(artist, title, url)
                await handleModal()
            }}>
            <img className="round" src={ url } style={{ height: '100px', width: '100px' }} alt='' />
            {/* <div className='ml-3'>
                <div>{ track.title }</div>
                <div className='text-muted'>{ track.artist }</div>
                <div className='text-muted'>{ track.released }</div>
            </div> */}
        </div>
    )
}