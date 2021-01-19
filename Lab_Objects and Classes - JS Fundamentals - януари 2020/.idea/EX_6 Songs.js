function songs(array) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let count = array.splice(0, 1);
    const tempTypeList = array.pop();
    let songList = [];
    for (const string of array) {
        let [typeList, name, time] = string.split('_');
        songList.push(new Song(typeList, name, time));
    }

    if (tempTypeList == 'all') {
        songList
            .splice(0, count)
            .forEach(song => console.log(song.name));
    } else {
        songList
            .filter(filterSong)
            .splice(0, count)
            .forEach(song => console.log(song.name));
    }
    function filterSong(song) {
        return song.typeList == tempTypeList;
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);