import React, {useState, useEffect} from "react";
import axios from "axios";
import Character from "./Character.js";

function CharacterPage (){
  // function myFunction() {
  //   document.getElementsByClassName("CharactersInfo").classList.toggle("CharactersInfoOpen");
  // }
  const [role, setRole] = useState([]);
useEffect (()=>{
  axios.get("https://swapi.dev/api/people/")
  .then(res=>{setRole(res.data.results);})
  .catch(err=>{console.log(err)})
  }, []);
    return (
      <div>
        {role.map((p, index)=>(<Character key={index} 
        name={p.name}
        gender={p.gender}
        height={p.height}
        mass={p.mass}
        birth={p.birth_year}
        eye={p.eye_color}
        hair={p.hair_color}
        skin={p.skin_color}
        // function={myFunction}
        />))}
      </div>
    )
    };

  export default CharacterPage