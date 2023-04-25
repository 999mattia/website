+++
author = "mattiag.ch"
+++

<div>
  <div style="display: flex; flex-direction: row; align-items: center; justify-content: left; max-height: 200px; height: 200px; margin-left: -3rem; margin-top: -5rem;">
    <img src="/icon.png" style="height: 175px; margin-right: 0rem;">
    <div>
      <div style="font-weight: 625;">hey, i'm mattia</div>
      <div>i like sports</div>
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
  fetch('https://spotifyapi-7a5y.onrender.com/current')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const song = document.getElementById('song');
      const artist = document.getElementById('artist');
      const img = document.getElementById('img');
      song.innerHTML = data.name;
      artist.innerHTML = data.artists;
      img.src = data.imageUrl;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    })
}

setInterval(fetchMusic, 1000);
</script>

</div>
