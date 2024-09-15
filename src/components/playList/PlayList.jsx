import styles from "./PlayList.module.css";
import TrackList from "../trackList/TrackList";

function PlayList({ playlistTracks }) {
  console.log("playlist");
  console.log(playlistTracks);
  return (
    <section className={styles.PlayList}>
      <TrackList playlistTracks={playlistTracks} />
    </section>
  );
}
export default PlayList;
