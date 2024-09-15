import styles from './Track.module.css'

function Track({ trackData }) {
  return (
    <div className={styles.Track}>
        <section className={styles.TrackInformation}>
            <h3>{trackData.name}</h3>
            <p>{trackData.artist}</p>
            <p>{trackData.album}</p>
        </section>
    </div>
  )
}
export default Track