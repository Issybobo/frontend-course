



/*import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function Definition (){
    const [word, setWord] = useState([]); // Initialize with an empty array

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/helicopter')
             .then((response) => response.json())
             .then((data) => {
                setWord(data[0].meanings);
                console.log(data[0].meanings)});
    }, []);

    return (
        <>
        <h1>Here is a Definition:</h1>
        {word ? word.map((meaning) => { // Add a check to ensure word is not undefined
            return ( 
                <p key={uuidv4}>{meaning.partOfSpeech + ': '}
                {meaning.definitions[0].definition}</p>
            );
        }): null}
        </>
    )
}*/


/*import { useState, useEffect } from "react";
import NotFound from "../components/NotFound";
import { useParams, useNavigate, Link } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


export default function Definition (){
    const [word, setWord] = useState([]); // Initialize with an empty array
    const [notFound, setNotFound] = useState(false);
    const navigate = useNavigate();
    
    let {search} = useParams();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
             .then((response) => {
                if(response.status === 404 ){
                    setNotFound(true);
                    
                }
               return response.json();;
            })
            .then((data) => {
                setWord(data[0].meanings);
            });
    }, []);
            

   
    
    

    return (
        <>
        
        {word ? <>
            <h1>Here is a Definition:</h1>
        {word.map((meaning) => { // Add a check to ensure word is not undefined
            return ( 
                // Use the unique ID for the key prop
                <p key={meaning.id}>{meaning.partOfSpeech + ': '}
                {meaning.definitions[0].definition}</p>
            );
        })} </>: null}
        </>
    )
}*/


/*import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../components/NotFound';

export default function Definition() {
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    let { search } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
            .then((response) => {
                if (response.status === 404) {
                    setNotFound(true);
                }
                return response.json();
            })
            .then((data) => {
                setWord(data[0].meanings);
            });
    }, []);

    if (notFound === true) {
        return (
            <>
                <NotFound />
                <Link to="/dictionary">Search another</Link>
            </>
        );
    }
    return (
        <>
            {word ? (
                <>
                    <h1>Here is a definition:</h1>
                    {word.map((meaning) => {
                        return (
                            <p key={uuidv4()}>
                                {meaning.partOfSpeech + ': '}
                                {meaning.definitions[0].definition}
                            </p>
                        );
                    })}
                </>
            ) : null}
        </>
    );
}*/


import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import NotFound from '../components/NotFound';
import DefinitionSearch from '../components/DefinitionSearch';

export default function Definition() {
   const [word, setWord] = useState();
   const [notFound, setNotFound] = useState(false);
   let { search } = useParams();
   const navigate = useNavigate();
   const [error, setError] = useState(false);

   useEffect(() => {
    //const url = 'https://dlfkgjdflkgjdflkgjdflkgjdflkgjdflkgjdflkg.com';
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + search;
    fetch(url)
       //fetch('https://api.dictionaryapi.dev/api/v2/entries/en/' + search)
           .then((response) => {
            if (!response.ok) {
                throw new Error('Something went wrong.');
            }
            console.log(response.status);

               if (response.status === 404) {
                  setNotFound(true);
                } else if (response.status === 401) {
                    navigate('/login');
                } else if (response.status === 500) {
                    //setServerError(true);
                }
               return response.json();
           })
           .then((data) => {
               if (data && data[0]) {
                  setWord(data[0].meanings);
                }})
                .catch((e) => {
                    setError(true);
                    console.log(e);
                
               
     });
   }, []);

   if (notFound === true) {
       return (
           <>
               <NotFound />
               <Link to="/dictionary">Search another</Link>
           </>
       );
   }

   if (error === true) {
    return (
        <>
            <p>There was a problem with the server, try again later.</p>
            <Link to="/dictionary">Search another</Link>
        </>
    );
}
   return (
       <>
           {word ? (
               <>
                  <h1>Here is a definition:</h1>
                  {word.map((meaning) => {
                      return (
                          <p key={uuidv4()}>
                              {meaning.partOfSpeech + ': '}
                              {meaning.definitions[0].definition}
                          </p>
                      );
                  })}
                  <p>Search again</p>
                  <DefinitionSearch/>
               </>
           ) : null}
       </>
   );
}