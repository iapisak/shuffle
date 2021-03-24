export default function NewReleasedTracks ({ track, selectSong }) {


    return (
        <div style={{ cursor: 'pointer' }} onClick={()=> selectSong(track.artist, track.title)}>
            <img className="round" src={track.image.url} style={{ height: '100px', width: '100px' }} alt='' />
            {/* <div className='ml-3'>
                <div>{ track.title }</div>
                <div className='text-muted'>{ track.artist }</div>
                <div className='text-muted'>{ track.released }</div>
            </div> */}
        </div>
    )
}