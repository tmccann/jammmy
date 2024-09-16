import styles from "./PlayList.module.css";
import TrackList from "../trackList/TrackList";

function PlayList({ tracks }) {
  return (
    <section className={styles.PlayList}>
      <TrackList tracks={tracks} listType='playList'/>
    </section>
  );
}
export default PlayList;
