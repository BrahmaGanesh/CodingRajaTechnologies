const music = document.getElementById('music');
const disk = document.getElementById('disk');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const photos =[
    'photo/p1.jpeg',
    'photo/p2.jpeg',
    'photo/p3.jpeg'
]; 
let currentphotoIndex = 0;
const songs = [
'song/song1.mp3',
'song/song2.mp3',
'song/song3.mp3'
];
let currentSongIndex = 0;
playButton.addEventListener('click', () => {
    music.play();
});

pauseButton.addEventListener('click', () => {
    music.pause();
});

prevButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    currentphotoIndex = (currentphotoIndex - 1 + photos.length) % photos.length;
    disk.src = photos[currentphotoIndex];
    music.src = songs[currentSongIndex];
    music.play();
});
nextButton.addEventListener('click', () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    currentphotoIndex = (currentphotoIndex + 1) % photos.length;
    disk.src =  photos[currentphotoIndex];
    music.src = songs[currentSongIndex];
    music.play();
});
music.addEventListener('ended', () => {
    //Automatically play the next song when the current one ends
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    currentphotoIndex = (currentphotoIndex + 1) % photos.length;
    disk.src = photos[currentphotoIndex];
    music.src = songs[currentSongIndex];
    music.play();
});