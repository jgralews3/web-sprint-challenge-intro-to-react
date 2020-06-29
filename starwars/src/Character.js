import React, {useState} from "react";
import styled from "styled-components"; 
import './Character.css';

const CharactersInfo = styled.div `
    // display:none;
`

const ShowButton = styled.button `
    color: slateblue;
    background-color: black;
    border-radius: 13px;
    padding: 1%;
    &:hover {
        cursor: pointer;
    }
    margin-bottom: 10px;
`
const Info = styled.p `
    font-size: 12px;

`

const Name = styled.h2 `
    font-size: 24px;
    text-decoration: underline;
`


function Character(props){
    return (<div>
        <Name>{props.name}</Name>
        {/* <ShowButton  onClick={props.function} >Show</ShowButton>; */}
        <div className="CharactersInfo">
            <Info>Birth Year: {props.birth}</Info>
            <Info>Gender: {props.gender}</Info>
            <Info>Height: {props.height}</Info>
            <Info>Weight: {props.mass}</Info>
            <Info>Eye Color: {props.eye}</Info>
            <Info>Hair Color: {props.hair}</Info>
            <Info>Skin Color: {props.skin}</Info>
        </div>
        </div>)
}

export default Character