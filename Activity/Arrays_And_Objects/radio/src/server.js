// Song objects
const song1 = {
  title: "Thriller",
  artist: "Michael Jackson",
};

const song2 = {
  title: "Billie Jean",
  artist: "Michael Jackson",
};

const song3 = {
  title: "God's Plan",
  artist: "Drake",
};

const song4 = {
  title: "Blinding Lights",
  artist: "The Weeknd",
};

const song5 = {
  title: "Shape of You",
  artist: "Ed Sheeran",
};

const song6 = {
  title: "Rolling in the Deep",
  artist: "Adele",
};

const song7 = {
  title: "Smells Like Teen Spirit",
  artist: "Nirvana",
};

const song8 = {
  title: "Hey Jude",
  artist: "The Beatles",
};

const song9 = {
  title: "Bohemian Rhapsody",
  artist: "Queen",
};

const song10 = {
  title: "Uptown Funk",
  artist: "Mark Ronson ft. Bruno Mars",
};

const song11 = {
  title: "Lose Yourself",
  artist: "Eminem",
};

const song12 = {
  title: "Hotel California",
  artist: "Eagles",
};

const song13 = {
  title: "Wonderwall",
  artist: "Oasis",
};

const song14 = {
  title: "Old Town Road",
  artist: "Lil Nas X",
};

const song15 = {
  title: "Levitating",
  artist: "Dua Lipa",
};

const song16 = {
  title: "Humble",
  artist: "Kendrick Lamar",
};

const song17 = {
  title: "Radioactive",
  artist: "Imagine Dragons",
};

const song18 = {
  title: "Stairway to Heaven",
  artist: "Led Zeppelin",
};

const song19 = {
  title: "Bad Guy",
  artist: "Billie Eilish",
};

const song20 = {
  title: "Shallow",
  artist: "Lady Gaga & Bradley Cooper",
};

// Station objects
const station1 = {
  name: "Classic Rock",
  song: [song7, song8, song9, song12, song18],
  nowPlaying: function () {
    const randomIndex = Math.floor(Math.random() * this.song.length);
    const currentSong = this.song[randomIndex];
    console.log(`Now Playing "${currentSong.title}" by ${currentSong.artist}`);
  },
};

const station2 = {
  name: "Pop Hits Radio",
  song: [song2, song4, song5, song10, song15, song19, song20],
  nowPlaying: function () {
    const randomIndex = Math.floor(Math.random() * this.song.length);
    const currentSong = this.song[randomIndex];
    console.log(`Now Playing "${currentSong.title}" by ${currentSong.artist}`);
  },
};

const station3 = {
  name: "Hip Hop & RnB",
  song: [song3, song11, song14, song16],
  nowPlaying: function () {
    const randomIndex = Math.floor(Math.random() * this.song.length);
    const currentSong = this.song[randomIndex];
    console.log(`Now Playing "${currentSong.title}" by ${currentSong.artist}`);
  },
};

const station4 = {
  name: "Legends & Classics",
  song: [song1, song6, song13, song17],
  nowPlaying: function () {
    const randomIndex = Math.floor(Math.random() * this.song.length);
    const currentSong = this.song[randomIndex];
    console.log(`Now Playing "${currentSong.title}" by ${currentSong.artist}`);
  },
};

const radio = {
  stations: [station1, station2, station3, station4],
  changeStation: function () {
    console.log(`Radio:\nChanging Station...`);
    currentStation = Math.floor(Math.random() * this.stations.length);
    console.log(`Station: ${this.stations[currentStation].name}`);
    this.stations[currentStation].nowPlaying();
  },
};

radio.changeStation();
