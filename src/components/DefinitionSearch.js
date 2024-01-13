import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function DefinitionSearch (){
    const [word, setWord] = useState('');
    
    const navigate = useNavigate();
    

    /*useEffect(() => {
        console.log('State Updated' + word );
    }, [word]);*/



    // no depency array --> update for any state change
    // empty dependency array --> execute once
    // passing in data --> only execute when those state variables are changed

    return (
        <form className= "flex space-between space-x-2 max-w-[300px]"onSubmit={()=> {
              navigate('/dictionary/' + word)

        }}>
            <input className="shrink min-w-0 px-2 py-1 rounded" placeholder="Goods" type= "text" onChange={(e) => {
                setWord(e.target.value);
            }}>
            </input>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" >Search
            </button>  
        </form>

    )
}