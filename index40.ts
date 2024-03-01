function makeAlbum ( artist : string, title : string, tracks? : number) : Record<string,any> {
    const album : Record <string , any> = {
        artist : artist,
        title : title
    };
  if (tracks !== undefined){
    album.tracks = tracks;
  }
  return album;
}

const album1 = makeAlbum("Ed Sheeran", "Divide", 12);
const album2 = makeAlbum("Beyoncé", "Lemonade");
const album3 = makeAlbum("Imagine Dragons", "Evolve", 14);

console.log(album1);
console.log(album2);
console.log(album3);
