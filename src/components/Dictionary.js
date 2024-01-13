import { useState, useEffect } from "react"

export default function Dictionary (){
    const [word, setWord] = useState('');
    const [word2, setWord2] = useState('');

    useEffect(() => {
        console.log('State Updated' + word );
    }, [word]);

    useEffect(() => {
        console.log('State Updated' + word2);
    }, [word2]);

    // no depency array --> update for any state change
    // empty dependency array --> execute once
    // passing in data --> only execute when those state variables are changed

    return (
        <>
            <input type= "text" onChange={(e) => {
                setWord(e.target.value);
            }}>
            </input>
            <h1>Lets go to the shopping mall {word}</h1>

            <input type= "text" onChange={(e) => {
                setWord2(e.target.value);
            }}>
            </input>
            <h1>Lets go to the shopping mall {word2}</h1>
        </>

    )
}