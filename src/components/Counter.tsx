// import * as React from 'react';
// import {connect} from 'react-redux';
//
// class Counter extends React.Component{
//     // The count state is stored in the top level Counter component
//    // public state = {count :0}
//
//     // When the user clicks “+”, the button’s onClick handler is called,
//     // which is bound to the increment function in the Counter component.
//     // The increment function updates the state with the new count.
//     public increment = () =>{//
//         this.props.dispatch({type:'INCREMENT'});
//     }
//
//     public decrement = () =>{//
//         this.props.dispatch({type:'DECREMENT'});
//     }
//
//     public render(){
//         return(
//             <div>
//                 <h2>Counter</h2>
//                 <div>
//                     <button onClick={this.decrement}>-</button>
//                     <span>{this.props.count}</span>
//                     <button onClick={this.increment}>+</button>
//                 </div>
//             </div>
//
//         )
//     }
// }
//
// // The object you return from mapStateToProps gets fed into your component as props.
// // The example above will pass state.count as the value of the count prop: the keys
// // in the object become prop names, and their corresponding values become the props’
// // values. So you see, this function literally defines a mapping from state into props.
//
// function mapStateToProps(state){
//     return {
//         count:state.count
//     };
// }
//
// // What connect does is hook into Redux, pull out the entire state,
// // and pass it through the mapStateToProps function that you provide.
// export default connect(mapStateToProps)(Counter);