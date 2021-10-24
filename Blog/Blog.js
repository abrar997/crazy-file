import React, { Component } from "react";
import "./Blog.css";
// import img from "../Blog/image/future.webp";
// import img1 from "../Blog/image/1.webp";
// import img2 from "../Blog/image/2.webp";
// import img3 from "../Blog/image/3.webp";
// import img4 from "../Blog/image/4.webp";
// import Articles from "./Articles/Articles";
import Articles from "./Articles/Articles";

// import img5 from "../Blog/image/5.webp";

export class Blog extends Component {
  // life cycle steps first step is mounting 
  // A-Mounting  consist of 4 steps And the firsdt is putting  in main file second step is drive state from props::::
  // 1 constructor(){} 2-getDerviedStateFromProps(){} 3-render(){} 4-componentDidMount() {}

  // 1-
  constructor(props) {
    super(props);
    this.state = {
    // data:0,
    show:true

    //   info: [
    //     { imgUrl: img , p: "AUG 27, 2019", span: "ADMIN ",span1:"3", h2: "Why Lead Generation is Key for Business Growth", pargraph: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.", link: "CONTINUE" },
    //     { imgUrl: img1 , p: "AUG 27, 2019", span: "ADMIN ",span1:"3", h2: "Why Lead Generation is Key for Business Growth", pargraph: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.", link: "CONTINUE" },
    //     { imgUrl: img2 , p: "AUG 27, 2019", span: "ADMIN ",span1:"3", h2: "Why Lead Generation is Key for Business Growth", pargraph: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.", link: "CONTINUE" },
    //     { imgUrl: img3 , p: "AUG 27, 2019", span: "ADMIN ",span1:"3", h2: "Why Lead Generation is Key for Business Growth", pargraph: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.", link: "CONTINUE" },
    //     { imgUrl: img4 , p: "AUG 27, 2019", span: "ADMIN ",span1:"3", h2: "Why Lead Generation is Key for Business Growth", pargraph: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.", link: "CONTINUE" },
    //   ]
    
    // }
  
    }  
  
}

deleteFunction=()=>{
  this.setState({
    show:false
  })

}


render() {
let Headerzzz;
if(this.state.show){
  Headerzzz = < Articles />;

}

// var abrar;
// this.state.show?(abrar = <Articles/>):null



      return (
        <div>
          {Headerzzz}

          <section className="blog">
            <div className="container">
              <div className="row">
                {/* <h1>Best things to do is to read an articles</h1>
                <h1> {this.state.data} </h1>
                <button
                  onClick={() => {
                    this.setState({ data: this.state.data + 1 });
                  }}> ++ </button>
                <button
                  onClick={() => {
                    this.setState({ data: this.state.data - 1 });
                  }}>---</button> */}

                {/* sometimes you don't neet to write الاقواس  (return) or {arrow function}  */}
                {/* as this element bellow  */}
                {/* <button onClick={() => this.setState({ data: this.state.data + 1 }) } > +++ </button> */}

                {/* props always write in calling tag element  بالمكان اللي استدعي بي ملف الكومبننت وتكون اما من ستايت او بروب خارجية  */}
                {/* <Articles data={this.state.data} favColor="red" /> */}

                <button type="button" onClick={this.deleteFunction}>
                  delete component
                </button>
              </div>
            </div>
          </section>
        </div>
      );
  }
}

export default Blog;
