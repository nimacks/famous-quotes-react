import * as React from 'react'
import "./components.css"

export interface IQuote{
    quote: string;
    author: string;
}



class Quote extends React.Component<IQuote>{
    constructor(props: IQuote){
        super(props);
    }
    public render(){
        return(
            <div className="quote">
                <span>{this.props.quote}</span>
                    <p>{this.props.author}</p>
            </div>
        )
    }
}

export default Quote;