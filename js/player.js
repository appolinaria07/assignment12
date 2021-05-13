window.addEventListener('load', () => {
    class Jukebox {
        constructor(albums) {
            this.albums = [];
        }
        addAlbum = function(album) {
            this.albums.push(album);
        }
        favoriteAlbum = function() {
            let max = -1, fav;
            for (let i = 0; i < this.albums.length; i++) {
                if (this.albums[i].played > max) {
                    max = this.albums[i].played;
                    fav = this.albums[i];
                }
            }
            return fav.display();
        }
    }
    
    class Album {
        constructor(artist, title) {
            this.artist = artist;
            this.title = title;
            this.played = 0;
        }
        play = function() {
            this.played += 1;
        } 
    
        display = function() {
            return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
        }
    }
    
    // ***********
    const $ = function (id) {
        'use strict';
        return window.document.getElementById(id);
    };
    let albumsArr = ['Operation Ivy - Energy', 'Blink 182 - Dude Ranch', 'New Found Glory - Sticks and Stones', 'Scorpions - Crazy World'];
    let albumsId = $('albums');
    for (let i = 0; i < albumsArr.length; i++) {
        let option = window.document.createElement('option');
        option.text = albumsArr[i];
        option.value = albumsArr[i];
        albumsId.add(option);
    }
    
    $('playBtn').addEventListener('click', () => {
        for (let i = 0; i < albumsId.options.length; i++) {                   
            if (albumsId[i].selected && albumsId[i].value === 'Operation Ivy - Energy') {
                album1.play();
            } else if (albumsId[i].selected && albumsId[i].value === 'Blink 182 - Dude Ranch') {
                album2.play();
            }  else if (albumsId[i].selected && albumsId[i].value === 'New Found Glory - Sticks and Stones') {
                album3.play();
            } else if (albumsId[i].selected && albumsId[i].value === 'Scorpions - Crazy World') {
                album4.play();
            }

        }
    });
  
    // ********
    var jbox = new Jukebox();
    const album1 = new Album('Operation Ivy', 'Energy');
    const album2 = new Album('Blink 182', 'Dude Ranch');
    const album3 = new Album('New Found Glory', 'Sticks and Stones');
    const album4 = new Album('Scorpions', 'Crazy World');
    
    jbox.addAlbum(album1);
    jbox.addAlbum(album2);
    jbox.addAlbum(album3);
    jbox.addAlbum(album4);
    
     $('show').addEventListener('click', () => {
        $('favoriteAlbum').textContent = `Your favorite album is: ${jbox.favoriteAlbum()}`;
    });
});
