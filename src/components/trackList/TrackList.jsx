import styles from './TrackList.module.css';
import Track from '../track/Track';

function TrackList({ tracks, listType }) {
  return (
    <section className={styles.TrackList}>
      {tracks.map((trackData) => (
        <Track 
          key={trackData.id}
          id={trackData.id}
          listType={listType}
          trackData={trackData}
        />
      ))}
    </section>
  );
}

export default TrackList;
