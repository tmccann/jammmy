// Spotify.jsx
import { authCode, getRefreshToken } from "./authCode"; // Adjust the path as needed

// Other constants
const accessToken = window.localStorage.getItem("access_token");
const refreshToken = window.localStorage.getItem("refresh_token");
const expiryTime = window.localStorage.getItem("expiry_time");

const Spotify = {
  async getAccessToken() {
    const now = new Date().getTime();
    // check to see if we have a token, refrsh token and expiry time
    if (accessToken !== null && refreshToken !== null && expiryTime !== null) {
      // if we have token check it hasnt expired
      if (now < expiryTime) {
        return accessToken;
      } else {
        // if token expired refresh token
        await getRefreshToken();
        const updatedAccessToken = window.localStorage.getItem("access_token");
        return updatedAccessToken;
      }
    } else {
      // if no token start auhtorization process
      await authCode();
    }
  },

  async trackSearch(term) {
    // use get access to check current token is valid
    const token = await this.getAccessToken();
    //  search for required song title
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?type=track&q=${term}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  return track data if request ok
      if (response.ok) {
        const data = await response.json();
        return data.tracks.items.map((track) => ({
          id: track.id,
          name: track.name,
          album: track.album.name,
          artist: track.artists[0].name,
          uri: track.uri,
        }));
      } else {
        // console log any error if fetch fails
        const errorData = await response.json();
        console.error(`error retriving id ${errorData.error.message} `);
      }
    } catch (error) {
      console.error("Error:", error);
    
    }
    // if fail return empty array
    return []
  },

  async addPlayList(playListName, trackUri) {
    let playListId;
    let id;
    const token = await this.getAccessToken();
    console.log(`tracks found: ${trackUri}`);
    // get user id
    try {
      const response = await fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const result = await response.json();
        id = result.id;
        console.log(`id retrival successful : ${id}`);
      } else {
        const errorData = await response.json();
        console.error(`error retriving id ${errorData.error.message} `);
      }
    } catch (error) {
      console.error("Error:", error);
    }
    // create playlist name
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/users/${id}/playlists`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: playListName,
            description: "New playlist description",
            public: false,
          }),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        playListId = responseData.id;

        console.log(`Playlist Created ${playListId}`);
      } else {
        const errorData = await response.json();
        console.error("Error sending playlist name:", errorData.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }

    // send play list tracks
    try {
      console.log(typeof playListId);
      console.log(trackUri);
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playListId}/tracks`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uris: trackUri,
            position: 0,
          }),
        }
      );
      if (response.ok) {
        const responseData = await response.json();
        console.log(`traks added ${responseData}`);
      } else {
        const errorData = await response.json();
        console.error("Error sending tacks:", errorData.error.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  },
};

// Other functions like exchangeCodeForTokens...

export default Spotify;
