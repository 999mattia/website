+++
author = "mattiag.ch"
+++

<div>
  <div style="display: flex; flex-direction: row; align-items: center; justify-content: left; max-height: 200px; height: 200px; margin-left: -3rem; margin-top: -5rem;">
    <img src="/icon.png" style="height: 175px; margin-right: 0rem;">
    <div>
      <div style="font-weight: 625;">hey, i'm mattia</div>
      <div>i like sports and coding</div>
    </div>
  </div>
  <center style="margin-top: 4rem;">
    currently listening to:
  </center>
  <div id="musicContent" style="display: flex; flex-direction: row; align-items: center; justify-content: center; max-height: 200px; height: 200px; ">
    <div id="musicText" style="display: flex; flex-direction: column; justify-content: space-between; margin-right: 3rem; height: 100%; padding-top: 2rem; padding-bottom: 2rem;">
      <div id="song" style="font-weight: 625"></div>
      <div>by</div>
      <div id="artist" style="font-weight: 625"></div>
    </div>
  <img id="img" style="border-radius: 20px; margin-left: 3rem; 	box-shadow: 0 10px 20px -5px rgba(115, 115, 115, 0.75),
		-10px 0 20px -5px rgba(115, 115, 115, 0.75); height: 175px;" src=""><img>
</div>

<script>
window.onload = fetchMusic();
function fetchMusic() {
  // fetch('https://spotify.mattiag.ch/current')
  //   .then(response => response.json())
  //   .then(data => {
  //     console.log(data);
  //     const song = document.getElementById('song');
  //     const artist = document.getElementById('artist');
  //     const img = document.getElementById('img');
  //     song.innerHTML = data.name;
  //     artist.innerHTML = data.artists;
  //     img.src = data.imageUrl;
  //   })
  //   .catch(error => {
  //     console.error('Error fetching data:', error);
  //   })
const clientId = 'c4a1d44eea4b4b00a45dabe89d3d7238';
const clientSecret = '58fc5b44408140cda5f0145ff01ea62f';
const refreshToken = 'AQDXM8i5ctzhTu3y7TvfMmbNTYLUS4Qf3nGvKDmukvTI-eGXM26_5EJ_r9Oww-gIh29WN_DspgVuktTt5XVU9Rks9ftCcF8R0GO57EqJ0S2VneoTLMVULIB-BAcn4dPbmF4';
let accessToken = 'BQCc8l4s1Od0KqjpWGp-e8vpeMgWm2t2MEyRH7B584Cq_yOeccY_Yv3w5edRfgoaXuvPabpYxpXL6O5vPtZJ96aKgKVnO37J1d4K4YpKIwUaeinCeCmK9Qm5qqt-bCo7EQ001rQ4GQk3DvZw5UXQ829R8xI4SToWpQp1KfrDkt7cezjSTIoz05T50125B5jEO2iKnq92QWw8OO7Q2vbn0Ldz2c-OmKnKY29nzegefcYuxatcQ4ES8wmuBtvo4pHDdJMkxb9IxCdX3fcJZmFHFXOSMytYbqQ6M5fyM32sQ_9ZNJ5XPcPlHwI_PBVJpcbhrw';

function getCurrentPlayingTrack() {
  refreshAccesToken()
  fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 401) {
        return refreshAccessToken()
          .then(() => getCurrentPlayingTrack());
      } else {
        throw new Error('Request failed with status code: ' + response.status);
      }
    })
    .then(data => {
      if (data.item) {
        const trackName = data.item.name;
        const artist = data.item.artists[0].name;
        console.log(`Currently playing: ${trackName} - ${artist}`);
      } else {
        console.log('No track is currently playing.');
        getLastPlayedTrack();
      }
    })
    .catch(error => {
      console.error('Error sending request:', error);
    });
}

function getLastPlayedTrack() {
  fetch('https://api.spotify.com/v1/me/player/recently-played', {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Request failed with status code: ' + response.status);
      }
    })
    .then(data => {
      if (data.items && data.items.length > 0) {
        const lastPlayedTrack = data.items[0].track;
        const trackName = lastPlayedTrack.name;
        const artist = lastPlayedTrack.artists[0].name;
        console.log(`Last played track: ${trackName} - ${artist}`);
      } else {
        console.log('No last played track found.');
      }
    })
    .catch(error => {
      console.error('Error sending request:', error);
    });
}

function refreshAccessToken() {
  const data = new URLSearchParams();
  data.append('grant_type', 'refresh_token');
  data.append('refresh_token', refreshToken);

  return fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: data
  })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Token refresh request failed with status code: ' + response.status);
      }
    })
    .then(data => {
      accessToken = data.access_token;
      console.log('Access token refreshed');
    });
    .catch(error => {
      console.error('Error refreshing access token:', error);
    });
}
}

setInterval(fetchMusic, 1000);
</script>

</div>
