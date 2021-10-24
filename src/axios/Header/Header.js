import axios from "axios";
import React, { Component } from "react";

export class Header extends Component {
  state = {
    post: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log(res.data);
      this.setState({ post: res.data });
    });
  }



  render() {
    return (
      <div>
        <div>
          {this.state.post.map((post) =>
            <div key={post.id}>
              <p>{post.title}</p>
              <p>{post.body} </p>
            </div>
          )}

        </div>

            </div>
    );
  }
}

export default Header;

    // <Card>
    //           <div key={post.id}>
    //             <CardBody>
    //               <CardSubtitle tag="h6">{post.title}</CardSubtitle>
    //               <CardSubtitle tag="h6">{post.body} </CardSubtitle>{" "}
    //             </CardBody>
    //           </div>
    //         </Card>;
    //       })}v 