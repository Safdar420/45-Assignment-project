function makeAlbum(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = makeAlbum("Ed Sheeran", "Divide", 12);
var album2 = makeAlbum("Beyoncé", "Lemonade");
var album3 = makeAlbum("Imagine Dragons", "Evolve", 14);
console.log(album1);
console.log(album2);
console.log(album3);
