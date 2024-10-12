import styles from "./PlayList.module.css";
import Track from "../track/Track";

function PlayList({ tracks, listType, onRemove,handlePlayListSubmit  }) {

  const onSubmitPlaylist = (e)=> {
    e.preventDefault();
    const PlayListName = e.target.playlist.value;
    handlePlayListSubmit(PlayListName)
    e.target.reset()
  }

  return (
    <section className={styles.PlayList}>
      <form onSubmit={onSubmitPlaylist} className={styles.form}>
        <label htmlFor="playListName"></label>
        <input type="text" id="playlist" name="playlist" required placeholder='Enter Name for play list' />
        <button type='submit' className={styles.SearchButton}>Save Play List</button>
      </form>
    <ul >
      {tracks.map((trackData) => (
        <Track 
          onRemove={onRemove}
          key={trackData.id}
          id={trackData.id}
          listType={listType}
          trackData={trackData}
        />
      ))}
    </ul>
    </section>
  );
}
export default PlayList;


