// تنزيل با npm i raect-router raect-router-dom
// import in index.js
// in index.js <BrowserRouter> <App /></BrowserRouter>
//  in app.js import { BrowserRouter,Route,Router,Link,NavLink,Switch  } from 'react-router-dom'
// add Fragment to component
// <Fragment>or  <BrowserRouter> no problem
// Link to="/"
// <Switch> <Route path="/" component={} exact>
// هذا كلشي يشتغل



export class incrementDecreament extends Component {
    state = {
        count: 0,
    };

    // increament = ()=>{
    // console.log(this.state.count++);; // with angular function we will have pretty error solved by bind or c(constructor(props){
    // this.setState({
    //   count:this.state.count++}
    // )
    //super(props) { this.state.count.bind(this) }})
    // not work with arrow func
    formatCount() {
        const { count } = this.state
        return count === 0 ? "zero" : count

    }
    increament = () => {
        this.setState({
            count: this.state.count + 1,
            show: true
        });
    };
    decreament = () => {
        this.setState({
            count: this.state.count - 1,
        });
    };

    render() {
        return (
            <Fragment>
                <div className="incrbtn">
                    <button onClick={this.increament}>+</button>
                    <p>
                        {this.formatCount()}

                    </p>
                    <button onClick={this.decreament}>-</button>
                </div>

                <Switch></Switch>
            </Fragment>
        );
    }
}
export default incrementDecreament;
