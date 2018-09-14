import * as React from "react";
import './Hello.css';


export interface IPersonality {
    name:string;
    enthusiasmLevel ?:number;
}

export interface IState {
    currentEnthusiasm: number;
}

class Hello extends React.Component<IPersonality,IState>{
    constructor(personality:IPersonality){
        super(personality);
        this.state ={currentEnthusiasm: personality.enthusiasmLevel || 1};
    }

    public onDecrement =() => this.updateEnthusiasm(this.state.currentEnthusiasm - 1);
    public onIncrement = () => this.updateEnthusiasm(this.state.currentEnthusiasm +1);

    public render(){
            const {name} = this.props;
            if(this.state.currentEnthusiasm <= 0){
                throw new Error('You could be a little more enthusiastic. :D');
            }

        return(
            <div className="hello">
                <div className="greeting">
                    Hello + {name + getExclamationMarks(this.state.currentEnthusiasm)}
                </div>
                <button onClick={this.onDecrement}>-</button>
                <button onClick={this.onIncrement}>+</button>
            </div>
        )
    }

     public updateEnthusiasm(currentEnthusiasm:number){
        this.setState({currentEnthusiasm});
     }
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}