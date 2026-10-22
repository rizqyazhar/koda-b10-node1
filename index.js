const fs = require("node:fs");

// const PATH = "C:\Users\asus\Music";

const songs = [
  {
    title: "Bang Bang",
    artist: "Niki Minaj",
  },
  {
    title: "Starships",
    artist: "Niki Minaj",
  },
  {
    title: "Super Bass",
    artist: "Niki Minaj",
  },
  {
    title: "Tusa",
    artist: "Niki Minaj",
  },
  {
    title: "Swalla",
    artist: "Niki Minaj",
  },
  {
    title: "Timber",
    artist: "Pitbull",
  },
  {
    title: "On The Floor",
    artist: "Pitbull",
  },
  {
    title: "Time of Our Lives",
    artist: "Pitbull",
  },
  {
    title: "Give Me Everything (feat. Nayer)",
    artist: "Pitbull",
  },
  {
    title: "Hotel Room Service",
    artist: "Pitbull",
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
  },
  {
    title: "Don't Look Back in Anger",
    artist: "Oasis",
  },
  {
    title: "Stand by Me",
    artist: "Oasis",
  },
  {
    title: "Live Forever",
    artist: "Oasis",
  },
  {
    title: "Champagne Supernova",
    artist: "Oasis",
  },
];

function createFile(songs) {
  songs.forEach((song) => {
    fs.writeFileSync(`${song.title} - ${song.title}.mp3`, "");
  });
}

createFile(songs);
