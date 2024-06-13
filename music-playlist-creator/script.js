
/*
Sources:
1) Figuring out how to make grids:
https://www.w3schools.com/css/css_grid.asp


*/

// Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("song-image");

// for (let j = 0; j < btn.length; j++){
//     btn.onclick = function() {
//         modal.style.display = "block";
//         console.log("test")
//       }
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal


// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

data.playlists.forEach(function(playlist){
    let newCard = document.createElement("div")
    newCard.className = "card"

    let newPlaylistImg = document.createElement("img")
    newPlaylistImg.src = playlist.playlist_art;
    newPlaylistImg.className = "playlistPic";

    let newPlaylistTitle = document.createElement("h4")
    newPlaylistTitle.textContent = playlist.playlist_name;

    let newCreatorName = document.createElement("p")
    newCreatorName.textContent = playlist.playlist_creator;

    let newLikeCount = document.createElement("p")
    newLikeCount.textContent = playlist.likeCount;
    newLikeCount.className = "likeCount";

    let heart = document.createElement("span")
    heart.className = "heart";
    heart.textContent = "❤";

    let likeContainer = document.createElement("div");
    likeContainer.className = "like-container";
    likeContainer.appendChild(heart);
    likeContainer.appendChild(newLikeCount);


    newCard.appendChild(newPlaylistImg)
    newCard.appendChild(newPlaylistTitle)
    newCard.appendChild(newCreatorName)
    newCard.appendChild(newLikeCount)
    newCard.appendChild(heart)

    let newPlaylistCards = document.querySelector(".playlist-cards")

    newPlaylistCards.appendChild(newCard)

}) 

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("playlistPic");



// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

let likeBtn = document.getElementsByClassName("heart");
let likes = document.getElementsByClassName("likeCount");

for (let j = 0; j < likeBtn.length; j++){
    likeBtn[j].addEventListener("click", () => {
        let count = likes[j].textContent;
        count++;
        likes[j].textContent = count;
        console.log(count);
    })
}


function populateModal(playlistID) {
  const playlist = data.playlists.find(pl => pl.playlistID === playlistID);
  if (!playlist) {
    console.error('Playlist not found');
    return;
  }
  console.log(playlist)
  
  const modalContent = document.getElementsByClassName('modal-content')[0];
  if (!modalContent) {
    console.error('Modal content element not found');
    return;
  }
  console.log(modalContent)
  
  modalContent.innerHTML = '';
  
  const playlistArt = document.createElement('img');
  playlistArt.src = playlist.playlist_art;
  playlistArt.alt = `${playlist.playlist_name} cover art`;
  
  const playlistName = document.createElement('h3');
  playlistName.textContent = playlist.playlist_name;
  
  const playlistCreator = document.createElement('h4');
  playlistCreator.textContent = `Created by: ${playlist.playlist_creator}`;
  const shuffleButton = document.createElement('button');
  shuffleButton.id = 'shuffle-button';
  shuffleButton.textContent = 'Shuffle';
  console.log(shuffleButton);
  
  modalContent.appendChild(playlistArt);
  modalContent.appendChild(playlistName);
  modalContent.appendChild(playlistCreator);
  modalContent.appendChild(shuffleButton);
  
  const songList = document.createElement('ul');
  playlist.songs.forEach(song => {
    const songItem = document.createElement('li');
    songItem.textContent = `${song.title} by ${song.artist} - ${song.duration}`;
    songList.appendChild(songItem);
  });
  

   
  shuffleButton.addEventListener('click', () =>{
    console.log("click")
  shuffleArray(songList);
  })
  
  modalContent.appendChild(songList);
}

function shuffleArray(songList) {
  console.log(typeof(songList));
 const songs = Array.from(songList.children);
 songs.sort(() => Math.random() - 0.5);
 songList.innerHTML = ""; // Clear existing songs
  songs.forEach((song) => songList.appendChild(song)); // Append shuffled songs
 console.log("shuffle");
}

for (let j = 0; j < btn.length; j++){
  btn[j].onclick = function() {
      modal.style.display = "block";
      populateModal(j)
    }
}





// Function to shuffle an array using sort with random comparison





