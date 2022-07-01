    import React from 'react'
    import './characterList.css';
    import { useCharacters } from '../hooks/useCharacters';
    import {Link} from 'react-router-dom'
    
    export default function CharactersList() {

      const {error, data, loading} = useCharacters();
      if(loading) return <div>Spinner...</div>;
      if(error) return <div>Something went wrong </div>;

      return (<div className="CharacterList">
        {data.characters.results.map((character) => {
            return(
              <Link to={`/${character.id}`}>
                  <img src = {character.image}/>
                  <h2>{character.name}</h2>
              </Link>
            );
      })}
      </div>);
    }
    