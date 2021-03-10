import React from 'react';
import classes from './PlayList.module.css'
import Song from "./Song/Song.jsx";


let songData=[
                {id:1, song:'desert rose', autor: 'Sting'},
                {id:2, song:'frozen', autor: 'Madonna'},
                {id:3, song:'cry me a river', autor: 'Justin Timberlake'},
                ];

const newSong =
    songData.map(songlist =>{
        return <Song song={songlist.song}  autor={songlist.autor} /> });

const Playlist = (props) => {
    return    (<div className={classes.content}>
                    <Song song='Shape of my heart' autor='Sting'/>
                    <Song song='la isla bonita' autor='Madonna'/>
                    <Song song='What goes around' autor='Justin Timberlake'/>
                    <Song song={songData[0].song} autor={songData[0].autor} />
                    {newSong}
                </div>);
}

export default Playlist;