export default function NewReleasedTracks ({ track, selectSong, handleModal }) {
    const { title, artist, image: { url }, trackUri } = track
    
    return (
        <div className='card mb-4'
             style={{ width: '10rem', cursor: 'pointer' }} 
             onClick={ async ()=> { 
                await selectSong(artist, title, url, trackUri)
                await handleModal()
             }}>
            <img className='card-img-top img-fluid' src={ url }  alt='' />
            <div className='card-body text-center'>
                <div>{ track.title }</div>
                <div className='text-muted'>{ track.artist }</div>
            </div>
        </div>
    )
}