import *  as React from 'react'
import {ChangeEvent} from "react";
import './components.css'

export interface IQuote{
    quote: string;
    author:string;
}
export interface IQuoteProps{
    quotes: IQuote[];
}
export interface IQuoteState{
    author:string;
    edit: boolean;
}
/*
*  Famous Quotes component renders a quote and allows you to change the author
* */
class FamousQuote extends React.Component<IQuote,IQuoteState> {
    constructor(props: IQuote) {
        super(props);
        this.state = {author: props.author, edit: false};
    }

    public render() {
        return(
            <div className="quote">
                {this.props.quote}
                <br/>
                {this.state.author}
                <p>
                    <input type='text' name='author' onChange={this.onUpdate}  />
                </p>

            </div>
       )
    }
    /*
    * Updates an author
    * */
    private onUpdate = (event:  ChangeEvent<HTMLInputElement>) =>{
        const newAuthor = event.target.value;
        this.setState({author: newAuthor});
    }
}
export default FamousQuote;