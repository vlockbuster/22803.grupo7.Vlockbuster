import ReactPlayer from 'react-player'

function Reproductor(id) {
    const idVideo = id.id;

    return (
        <>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={"https://www.youtube.com/watch?v=" + idVideo}
                    width='100%'
                    height='100%'
                    playing={true}
                />
            </div>
        </>
    )
}

export default Reproductor