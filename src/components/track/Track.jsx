import styles from "./Track.module.css";





function Track({ trackData, id, listType, onAdd, onRemove}) {
  const actionButton =
    listType === "search" ? (
      <button
        className={styles.TrackAction}
        id={id}
        onClick={() => onAdd(trackData.id)}
      >
        +
      </button>
    ) : (
      <button
        className={styles.TrackAction}
        id={id}
        onClick={() => onRemove(trackData.id)}
      >
        -
      </button>
    );
    
    const clickedId = (id) =>{
      onAdd(id)
    }

  return (
    <li className={styles.Track}>
      <div className={styles.TrackInformation} id={id}>
        <h3>
          {trackData.name} {actionButton}
        </h3>
        <p>
          {trackData.artist} | {trackData.album}
        </p>
      </div>
    </li>
  );
}
export default Track;
