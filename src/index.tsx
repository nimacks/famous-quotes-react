import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import './index.css';
import FamousQuotes from "./components/FamousQuotes";


const initialState={
    count:0
}

// @ts-ignore
function reducer(state=initialState,action){
    if(action.type === "INCREMENT"){
        return{
            count: state.count +1
        } ;
    }else if(action.type === "DECREMENT"){
        return{
            count:state.count -1
        };
    }

    return state;

}
// @ts-ignore
const store = createStore(reducer);

const quotes = [
    {
        "quote": "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
        "author": "Mark Caine"
    }
    , {
        "quote": "Get busy living or get busy dying",
        "author": "Stephen King"
    },
    {
        "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        "author": "Mark Twain"
    },
    {
        "quote": "Great minds discuss ideas, average minds discuss events, small minds discuss people",
        "author": "Eleanor Roosevelt"
    },
    {
        "quote": "Those who dare to fail miserably can achieve greatly",
        "author": "John F. Kennedy"
    },
    {
        "quote": "You only live once, but if you do it right, once is enough",
        "author": "Mae West"
    },
    {
        "quote": "It is hard to fail, but it is worse never to have tried to suceed",
        "author": "Theodore Roosevelt"
    },
    {
        "quote": "I'm a success today because I had a friend who believe in me and I didn't have the heart to let him down",
        "author": "Abraham Lincoln"
    }
];
const App = ()=>(
    <Provider store={store}>
        <FamousQuotes quotes={quotes}/>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
//  registerServiceWorker();
/*<Hello name="TypeScript" enthusiasmLevel={5} />,*/