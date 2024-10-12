import styles from './TrackList.module.css';
import Track from '../track/Track';

function TrackList({ tracks, listType,onAdd, hasSearched }) {

 
  return (
    <ul className={styles.TrackList}>
      {tracks.map((trackData) => (
        <Track
          onAdd={onAdd}
          key={trackData.id}
          id={trackData.id}
          listType={listType}
          trackData={trackData}
        />
      ))}
    </ul>
  
)}

export default TrackList;
