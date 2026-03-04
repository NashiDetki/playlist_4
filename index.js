const container = document.querySelector(".conteiner");
const songsContainer = container.querySelector(".songs-conteiner");
const addButton = container.querySelector(".form__submit-btn_action_add");
const resetButton = container.querySelector(".form__submit-btn_action_reset");
const noSongsElement = container.querySelector(".no-songs");

const inputSong = container.querySelector(".input__text_type-song");
  const inputArtist = container.querySelector(".input__text_type-artist");

function renderHasSongs() {
  resetButton.classList.remove("form__submit-btn_disabled");
  resetButton.removeAttribute("disabled");
  noSongsElement.classList.add("no_songs_hidden");
}

function renderNoSongs() {
  resetButton.setAttribute("disabled", true);
  resetButton.classList.add("form__submit-btn_disabled");
  noSongsElement.classList.remove("no_songs_hidden");
}

function addSong(artistValue, titleValue) {
    const songTemplete = document.querySelector('#song-templete').content;
    // console.log(songTemplete);
    const songElement = songTemplete.querySelector('.song').cloneNode(true);
    // console.log(songElement);

    const artist = songElement.querySelector('.song__artist');
    // console.log(artist);
    artist.textContent = artistValue;

    songElement.querySelector('.song_title').textContent = titleValue;

    songElement.querySelector('.song__like').addEventListener('click', function(evt){
      console.log(evt.target);
      evt.target.classList.toggle('song__like_active');
    })

    songsContainer.append(songElement);


}

// const playList = {
//   Кино: "Кукушка",
//   Ария: "Штиль",
//   Любэ: "Родня",
//   Чайф: "Не спеши",
//   Чиж: "Полонез",
//   ДДТ: "Осень",
// };

// // console.log(playList);

// let artistPlayList = Object.keys(playList);
// // console.log(artistPlayList);

// let songPlayList = Object.values(playList);
// // console.log(songPlayList);

// for (let i = 0; i < artistPlayList.length; i++) {
//   addSong(artistPlayList[i], songPlayList[i]);
  
// }

addButton.addEventListener("click", function () {
  const inputSong = container.querySelector(".input__text_type-song");
  const inputArtist = container.querySelector(".input__text_type-artist");

  addSong(inputArtist.value, inputSong.value);
  renderHasSongs();

  inputArtist.value = "";
  inputSong.value = "";
});

resetButton.addEventListener("click", function (event) {
  const song = document.querySelectorAll('.song');
  // console.log(song);

  // songsContainer.innerHTML = "";

  for (let i=0; i < song.length; i++){
    // console.log(song[i]);
    song[i].remove(); 
    console.log(song);

  }

   
  renderNoSongs();
});


// renderNoSongs();
 renderHasSongs();

// document.addEventListener('keypress', function(){
//  console.log('нажи клавишу');
// })

// document.addEventListener('keydown', function(){
//  console.log('все клавиши');
// })

// document.addEventListener('keyup', function(){
//  console.log('клавиша не нажата');
// })

// inputSong.addEventListener('keyup', function(evt) {
//  console.log('evt.key');
//  console.log('evt.keyCode');
//  console.log('evt.target.value');
//  if (Number.isNaN(Number(evt.key))){
//    console.log(Number(evt.key));
//    prompt('Ведено не число!');
//  }

// })

inputSong.addEventListener('keydown', function(evt){
//  console.log(evt.key);
if(evt.key === 'Enter'){
  console.log(evt);
  addSong(inputArtist.value, inputSong.value);
  inputArtist.value = "";
  inputSong.value = "";
  renderHasSongs()
}
})

inputSong.addEventListener('keydown', function(evt){
//  console.log(evt.key);
if(evt.key === 'Enter'){
  console.log(evt);
  addSong(inputArtist.value, inputSong.value);
  inputArtist.value = "";
  inputSong.value = "";
  renderHasSongs()
}
})

const coverHeading = container.querySelector('cover__heading');
// coverHeading.addEventListener('mouseover', function(){
//   console.log('наведение мыши');
// }

// coverHeading.addEventListener('mouseover', function(){
//   console.log('кусор покидает элемент');
// })

// coverHeading.addEventListener('mouseover', function(){
//   console.log('кнопка в нижнем полжении');
// })

// coverHeading.addEventListener('mouseover', function(){
//   console.log('кнопка отпущена');
// })

// coverHeading.addEventListener('click', function(){
//   console.log('click');
// })

// coverHeading.addEventListener('dblclick', function(){
//   console.log('dblclick');
// })

// coverHeading.addEventListener('contextmenu', function(){
//   console.log('contextmenu');
// })

