import React, { Component } from 'react'

export class ChangeColor extends Component {
state={
brand:"ford",
model:"mustange",
color:"red",
year:1964

}
 changeColors=()=>{
this.setState({color:"green"})

 }
    render() {
        return (
            <div>
                <p>this car is {this.state.brand} width modal {this.state.model } and color {this.state.color}</p>

                <button onClick={this.changeColors} >change Colors</button>
            </div>
        )
    }
}

export default ChangeColor
