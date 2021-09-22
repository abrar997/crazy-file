import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <h1>hello world </h1>
            </div>
        )
    }
}

export default Header



// import React, { Component } from "react";
// import "./web.css";
// export class Header extends Component {
//     // state and function always write here befor render
//     state = {
//         name: "muthanna",
//         age: 57,
//         city: "irbil",
//     };
//     newState = () => {
//         this.setState({
//             name: "Bushra",
//             age: 50,
//         });
//     };

//     myFunc() {
//         console.log(this); //undefined to solve this problem we have to ways
//         //1_bind
//         // 2_ constructor class
//     }

//     //or by arrow function ()=>{}
//     myFunc1 = () => {
//         console.log(this); //app
//     };

//     constructor(props) {
//         super(props);
//         this.myFunc = this.myFunc.bind(this);
//     }

//     myFunction() {
//         console.log(this);
//     }

//     render() {
//         return (
//             <div>
// fontSize=32,
//                 <h1 >
//                     <span>my </span> name is {this.props.name} <span>my </span> age{" "}
//                     {this.props.age} <span>and </span> from {this.props.city}{" "}
//                 </h1>

//                 {/* show data and change state information by one click */}
//                 <h1>
//                     <span>my </span> name is {this.state.name} <span>my </span> age{" "}
//                     {this.state.age} <span>and </span> from {this.state.city}{" "}
//                 </h1>
//                 <button onClick={this.newState}> click</button>

//                 <button onClick={this.myFunction}>regular function</button>

//                 {/* regular function */}
//                 <button onClick={this.myFunc}>regular by constructor</button>
//                 {/* first way  to solve reglar function problem ,convert this tbasy undefined to app */}
//                 {/* <button onClick={this.myFunc.bind(this)}>click here</button> */}
//                 {/* arrow function */}
//                 <button onClick={this.myFunc1}>click here</button>
//             </div>
//         );
//     }
// }
// export default Header;


