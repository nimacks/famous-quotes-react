import * as React from 'react'
import Quote from "./Quote";

export interface IQuote {
    quote: string;
    author: string;
}

export interface IProps {
    quotes: IQuote[];
}

class FamousQuotes extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                {this.props.quotes.map((content) =>
                <Quote key={content.author} quote={content.quote} author={content.author}/>
            )};
            </div>
        )
    }


}

export default FamousQuotes;