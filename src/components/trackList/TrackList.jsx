import styles from './TrackList.module.css'
import Track from '../track/Track'

// eslint-disable-next-line react/prop-types
function TrackList({ playlistTracks }) {


  return (
    <section className={styles.TrackList}>
      {
        playlistTracks.map((trackData)=>(
          <Track 
            key={trackData.id}
            trackData={trackData}/>
        ))
      }
    </section>
  )
}

export default TrackList;