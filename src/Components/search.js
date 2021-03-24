import SearchTracks from './MappingForm/searchTracks'

export default function Search ({ searchTracks, selectSong }) {
    return (
        <div>
            <h2>Search Result</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Album</th>
                        <th>Artist</th>
                        <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        { searchTracks.map(item => {
                            return <SearchTracks track={item} key={item.id} selectSong={ selectSong } />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}