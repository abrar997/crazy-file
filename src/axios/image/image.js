import React, { Component } from 'react'
import axios from 'axios';



export class image extends Component {

state={

    photo:[]
}

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log(res.data);
      this.setState({
        photo: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          {this.state.photo.map((photo) => (
            <div key={photo.id}>
              <figure>
                <img src={photo.url} />
              </figure>

              <p>{photo.title} </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default image
