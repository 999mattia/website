+++
author = "mattia.netlify.app"
+++

<div>
<div id="musicContent" style="display: flex; flex-direction: row; align-items: center; justify-content: center; max-height: 200px; height: 200px;">
<div id="musicText" style="display: flex; flex-direction: column; justify-content: space-between; margin-right: 2.5rem; height: 100%; padding-top: 1rem; padding-bottom: 1rem;">
<div id="song"></div>
by
<div id="artist"></div>
</div>
<img id="img" style="border-radius: 20px; margin-left: 2.5rem; 	box-shadow: 0 10px 20px -5px rgba(115, 115, 115, 0.75),
		-10px 0 20px -5px rgba(115, 115, 115, 0.75); height: 200px;" src=""><img>
</div>

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

</div>