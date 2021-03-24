export default function NewReleasedTracks ({ track }) {


    return (
        <div style={{ cursor: 'pointer' }} >
            <img className="round" src={track.image.url} style={{ height: '100px', width: '100px' }} alt='' />
            {/* <div className='ml-3'>
                <div>{ track.title }</div>
                <div className='text-muted'>{ track.artist }</div>
                <div className='text-muted'>{ track.released }</div>
            </div> */}
        </div>
    )
}