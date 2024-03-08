"use strict";
function makeAlbum(artist, title) {
    const dictionaries = {
        artist: artist.charAt(0).toUpperCase() + artist.slice(1),
        title: title.charAt(0).toLocaleUpperCase() + title.slice(1)
    };
    return dictionaries;
}
let album = makeAlbum("Moazam", "light");
console.log(album);
album = makeAlbum("Samand", "red waves");
console.log(album);
album = makeAlbum("umaiz", "seenbreeze");
console.log(album);
