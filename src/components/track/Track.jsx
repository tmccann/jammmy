import styles from "./Track.module.css";

const onAdd = (id) => {
  console.log(`added: ${id}`);
};

const onRemove = (id) => {
  console.log(`removed: ${id}`);
};

function Track({ trackData, id, listType }) {
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

  return (
    <div className={styles.Track}>
      <section className={styles.TrackInformation} id={id}>
        <h3>
          {trackData.name} {actionButton}{" "}
        </h3>
        <p>
          {trackData.artist} | {trackData.album}{" "}
        </p>
      </section>
    </div>
  );
}
export default Track;
