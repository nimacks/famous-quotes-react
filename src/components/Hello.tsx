import * as React from 'react';

export interface IPersonality {
    name: string;
    enthusiasmLevel ?: number;
    mood: string;

}


function Hello({name,mood,enthusiasmLevel =1}:IPersonality){
    if(enthusiasmLevel <= 0){
        throw new Error('You could be a little more enthusiastic :D');
    }

    return(
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)} You seem to be very {mood}
            </div>
        </div>
    )
}

export default Hello;

function getExclamationMarks(numChars: number) {
    return Array(numChars + 1).join('!');
}