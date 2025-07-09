
// Constants
const clientId = import.meta.env.VITE_SPOTIFY_CLIENTID;
const redirectUri = window.location.origin + "/callback"
const scope = "user-read-private user-read-email playlist-modify-public playlist-modify-private";
const authUrl = new URL("https://accounts.spotify.com/authorize");
const url = "https://accounts.spotify.com/api/token"

const generateRandomString = (length) => {
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const values = crypto.getRandomValues(new Uint8Array(length));
  return values.reduce((acc, x) => acc + possible[x % possible.length], "");
};

const codeVerifier = generateRandomString(64);
const sha256 = async (plain) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(plain);
  return window.crypto.subtle.digest("SHA-256", data);
};

const base64encode = (input) => {
  return btoa(String.fromCharCode(...new Uint8Array(input)))
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
};

export const authCode = async () => {
  window.localStorage.setItem('code_verifier', codeVerifier);

  const hashed = await sha256(codeVerifier);
  const codeChallenge = base64encode(hashed);

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
  };

  authUrl.search = new URLSearchParams(params).toString();
  window.location.href = authUrl.toString();
};


export const exchangeCodeForTokens = async (code) => {
    const codeVerifier = localStorage.getItem('code_verifier');

    const payload = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        grant_type: 'authorization_code',
        code,
        redirect_uri: redirectUri,
        code_verifier: codeVerifier,
      }),
    };

    const response = await fetch(url, payload);
    const data = await response.json();
    
    if (data.access_token) {
      localStorage.setItem('access_token', data.access_token);
      // Optionally store the expiry time and refresh token if provided
      if (data.expires_in) {
        const expiryTime = new Date().getTime() + data.expires_in * 1000; // convert seconds to milliseconds
        localStorage.setItem('expiry_time', expiryTime);
      }
      if (data.refresh_token) {
        localStorage.setItem('refresh_token', data.refresh_token);
      }
    } else {
      console.error("Failed to get access token", data);
    }
  }

  export const getRefreshToken = async () => {

    // refresh token that has been previously stored
    const refreshToken = localStorage.getItem('refresh_token');
    const url = "https://accounts.spotify.com/api/token";
 
     const payload = {
       method: 'POST',
       headers: {
         'Content-Type': 'application/x-www-form-urlencoded'
       },
       body: new URLSearchParams({
         grant_type: 'refresh_token',
         refresh_token: refreshToken,
         client_id: clientId
       }),
     }

     const body = await fetch(url, payload);
     const data = await body.json();
     if (data.access_token) {
      localStorage.setItem('access_token', data.access_token);
      // Optionally store the expiry time and refresh token if provided
      if (data.expires_in) {
        const expiryTime = new Date().getTime() + data.expires_in * 1000; // convert seconds to milliseconds
        localStorage.setItem('expiry_time', expiryTime);
      }
      if (data.refresh_token) {
        localStorage.setItem('refresh_token', data.refresh_token);
      }
    } else {
      console.error("Failed to get access token", data);
    }
   }
 

