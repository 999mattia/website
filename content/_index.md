+++
author = "mattia.netlify.app"
+++

<div>
<div id="song"></div>
by
<div id="artist"></div>
<img id="img" src=""><img>

<script>
window.onload = fetchMusic;
function fetchMusic() {
  fetch('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=mattia_999&api_key=ddd142322b7ef8898f1fc27ad07a1760&format=json&limit=1')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const song = document.getElementById('song');
      const artist = document.getElementById('artist');
      const img = document.getElementById('img');
      song.innerHTML = data.recenttracks.track[0].name;
      artist.innerHTML = data.recenttracks.track[0].artist['#text'];
      img.src = data.recenttracks.track[0].image[2]['#text'];
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

setInterval(fetchMusic, 1000);
</script>
</img>
