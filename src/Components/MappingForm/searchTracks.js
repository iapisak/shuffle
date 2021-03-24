export default function SearchTracks ({ track, selectSong }) {
    return (
        <tr style={{ cursor: 'pointer' }} onClick={() => selectSong(track.artist.name, track.title)}>
            <td>
                <img src={track.image.url} style={{ height: '30px', width: '30px' }} alt='' />
            </td>
            <td>{track.title}</td>
            <td>{track.album}</td>
            <td>{track.artist.name}</td>
            <td>{track.duration}</td>
        </tr>
    )
}