import NewReleasedTracks from '../../MappingForm/newReleasedTracks'

export default function NewReleased ({ newReleased, selectSong, handleModal }) {
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2>New Realeased</h2>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        US
                    </button>
                </div>
            </div>
            <div className="d-flex flex-wrap justify-content-between">
                { newReleased.map(item => {
                    return <NewReleasedTracks track={item} key={item.id} selectSong={ selectSong } handleModal={ handleModal }/>
                })}
            </div>
        </div>
    )
}