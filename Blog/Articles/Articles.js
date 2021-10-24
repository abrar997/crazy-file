import React, { Component } from "react";
// import img1 from '../image/1.webp'
// import img2 from "../image/2.webp";
// import img3 from "../image/3.webp";
// import img4 from "../image/4.webp";

export class Articles extends Component {
  // to drive state from props we need another state by constructor writte here
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       currentValue: 0,
  //       newProduct: img1,
  //       p: "hello worl ",
  //       favouriteColor: "gray",
  //     };
  //   }

  //   // 2- getDerivedStateFromProps(props, state)
  //   // Syntax: static getDerivedstateFromProps **with two parameters** (props,state)
  //   //   use to connect beween two data

  //   static getDerivedStateFromProps(props, state) {
  //     return { currentValue: props.data * 10 }; //as setSatate  and  new value take from data as props in another compo
  //   }

  //   // 3- render(jsx code (java script xml code)  )

  //   // 4- componentDidMount to run function during a limited time  fourth step but it always writing befor render
  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ newProduct: img2, p: "hello world " });
  //     }, 6000);
  //     setTimeout(() => {
  //       this.setState({ newProduct: img3, p: "hello worl sssssss" });
  //     }, 3000);

  //     setTimeout(() => {
  //       this.setState({ newProduct: img3, p: "hello worl sssssss" });
  //     }, 3000);
  //   }

  //   // B-update which consist of 5 steps ::::
  //   // 1-getDerviedStateFromProps(){} 2-shouldComponentUpdate(){true or false}  3-render(){}   4-getSnapshotBeforeUpdate(get screen shot befor update) 5- componentDidUpdate(){} (4-5 write befor render)

  //   // static getDerivedStateFromProps(props, state) {
  //   //   return { favouriteColor: props.favColor }; //as setSatate  and  new value take from data as props in another compo
  //   // }

  //   // other way to change a color by button or limit time but without getDerviedStateFromProps(){} step by second step  shouldComponentUpdate(){true or false} with some steps as bellow
  //   // 2-shouldComponentUpdate()
  //   shouldComponentUpdate() {
  //     //boolean result
  //     // return true or false
  //     // return false   //function not work
  //     //   return true; //default value
  //     return this.state.favouriteColor === "gray" ? true : false;
  //   }

  //   // you can add this in any time to make fuction work during limited time
  //   componentDidMount() {
  //     setTimeout(() => {
  //       this.setState({ favouriteColor: "red" });
  //     }, 3000);
  //   }

  //   // 3-getSnapshotBeforeUpdate (two parameter (prev,after)) ,step 2 important must write to function work u need to write 2 duv with its (id)
  //   // u have to use componentDidUpdate() with getSnapshotBeforeUpdate this change run after 3000s in code above
  //   getSnapshotBeforeUpdate(prevState, prevprops) {
  //     // get data befor update ===color in state
  //     document.getElementById("div11").innerHTML =
  //       // color==gray from constructor state
  //       "get data befor update ::" + "  " + prevprops.favouriteColor;

  //     return null; // to solve this problem in console ::A snapshot value (or null) must be returned. You have returned undefined.
  //   }

  // componentDidUpdate(){

  //  document.getElementById("div22").innerHTML =
  // //  color ==color from componentDidMount
  // //  componentDidMount() {
  //   //   setTimeout(() => {
  //   //     this.setState({ favouriteColor: "red" });
  //   //   }, 3000);
  //   // }

  //   "get data after update ::" + " " + this.state.favouriteColor;

  // }

  //   // changeColor = () => {
  //   //   this.setState({
  //   //     favouriteColor: "black",
  //   //   });
  //   // };

  // // 3- unMouting (delete) just one step

  // // componentWillUnmount() //anti componentDidMount write with some steps written in main div
  // اخليهة بالكوميننت اللي اريد احذو
  componentWillUnmount() {}

  render() {
    return (
      <div>
        <h1 style={{ color: "white" }}>heloo world</h1>
      </div>
    );
  }
}

export default Articles;

//  {/* <h1>current value {this.state.currentValue}</h1>

// <img src={this.state.newProduct} />
// <h1>{this.state.p}</h1>

// <h1>{this.state.favouriteColor}</h1>

// <button type="button" onClick={this.changeColor}>
//   changeColor
// </button>

// <div>
//   <h1 id="div11"></h1>
// </div>
// <div>
//   <h1 id="div22"></h1>
// </div> */}
