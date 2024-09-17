// oauthUtils.js

// Function to generate a random string
export const generateRandomString = (length) => {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const values = new Uint8Array(length);
    window.crypto.getRandomValues(values);
    return Array.from(values, (x) => possible[x % possible.length]).join('');
  };
  
  // Function to generate the code challenge
  export const generateCodeChallenge = async (codeVerifier) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    const base64String = btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, '-') // Base64 URL encoding
      .replace(/\//g, '_')
      .replace(/=+$/, '');
    return base64String;
  };
  
  // Utility function to get the access token
  export const getAccessToken = () => localStorage.getItem('access_token');
  
  // Function to start the OAuth flow
  export const startOAuthFlow = async () => {
    const clientId = ''; 
    const redirectUri = 'http://localhost:3000'; 
    const scopes = 'user-read-private playlist-modify-public'; 
  
    let codeVerifier = localStorage.getItem('code_verifier');
    if (!codeVerifier) {
      // Generate and store code verifier if not present
      codeVerifier = generateRandomString(64);
      localStorage.setItem('code_verifier', codeVerifier);
    }
  
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&code_challenge=${codeChallenge}&code_challenge_method=S256`;
  
    window.location.href = authUrl;
  };
  


  
  