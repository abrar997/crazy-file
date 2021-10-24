import axios from 'axios'
import React, { Component } from 'react'

export class Anime extends Component {
 sate={
     anime:[]
 }
 
componentDidMount(){
    axios.get("https://anilistmikilior1v1.p.rapidapi.com/getAnimeList")
      .then((res) => {
        console.log(res.data);
      });
}

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Anime
