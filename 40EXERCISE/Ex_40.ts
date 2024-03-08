function makeAlbum (artist: string, title: string): { artist: string; title: string} {
     const dictionaries = {
          artist: artist.charAt(0).toUpperCase() + artist.slice(1),
          title: title.charAt(0). toLocaleUpperCase() + title.slice(1)
     };
      return dictionaries;

}


let album = makeAlbum("Moazam", "light")
console.log(album)


album = makeAlbum("Samand" , "red waves")
console.log(album)


album = makeAlbum("umaiz", "seenbreeze")
console.log(album)
