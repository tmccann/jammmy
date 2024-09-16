import styles from './Track.module.css'

function Track({ trackData, id}) {
  return (
    <div className={styles.Track}>
        <section className={styles.TrackInformation} id={id}>
            <h3>{trackData.name} <button className={styles.TrackAction}>+</button></h3>
            <p>{trackData.artist} | {trackData.album} </p>
            
        </section>
    </div>
  )
}
export default Track