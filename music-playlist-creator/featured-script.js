//get the data in a variable in this file
// then call the populateModal and pass in the data/id

// const data = playlistsData; // Get data from data.js

function populateModal(playlistID) {
    const randomIndex = Math.floor(Math.random() * data.playlists.length);
    const playlist = data.playlists[randomIndex];
    // const playlist = data.playlists.find(pl => pl.playlistID === playlistID);
    if (!playlist) {
      console.error('Playlist not found');
      return;
    }
    console.log(playlist)
    
    const modalContent = document.getElementsByClassName('featured-modal')[0];
    if (!modalContent) {
      console.error('Modal content element not found');
      return;
    }
    console.log(modalContent)
    
    modalContent.innerHTML = '';
    
    const playlistArt = document.createElement('img');
    playlistArt.src = playlist.playlist_art;
    playlistArt.alt = `${playlist.playlist_name} cover art`;
    playlistArt.idName = "featured-playlist-image";
    console.log(playlistArt.idName);
    
    const playlistName = document.createElement('h3');
    playlistName.textContent = playlist.playlist_name;
    
    const playlistCreator = document.createElement('h4');
    playlistCreator.textContent = `Created by: ${playlist.playlist_creator}`;
    
    modalContent.appendChild(playlistArt);
    modalContent.appendChild(playlistName);
    modalContent.appendChild(playlistCreator);
    
    const songList = document.createElement('ul');
    playlist.songs.forEach(song => {
      const songItem = document.createElement('li');
      const songImg = document.createElement('img');
      songImg.src = song.cover_art;
      songItem.textContent = `${song.title} by ${song.artist} - ${song.duration}`;
      songList.appendChild(songItem);
      songList.appendChild(songImg);
    });
    
  
    modalContent.appendChild(songList);
  }
  
  
  
  data.playlists.forEach((playlist) => {
    // const tile = createPlaylistTile(playlist);
    // playlistContainer.appendChild(tile);
    populateModal(playlist.playlistID)
  });
  
  
  // Function to shuffle an array using sort with random comparison
  
  