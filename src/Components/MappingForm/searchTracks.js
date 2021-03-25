export default function SearchTracks ({ track, selectSong, handleModal }) {
    const { title, artist: { name: artist }, image: { url }, album, duration } = track
    
    return (
        <tr style={{ cursor: 'pointer' }} 
            onClick={async () => {
                await selectSong(artist, title, url)
                await handleModal()
            }}>
            <td>
                <img src={ url } style={{ height: '30px', width: '30px' }} alt='' />
            </td>
            <td>{ title }</td>
            <td>{ album }</td>
            <td>{ artist }</td>
            <td>{ duration }</td>
        </tr>
    )
}