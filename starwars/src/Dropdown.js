import React, {useState} from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from "styled-components"; 

const Dropper = styled.div`
    margin-bottom: 15px;
`

const Example = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    console.log(props);
    return (
        <Dropper>
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle caret>
            {props.name}
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Birth Year: {props.birth}</DropdownItem>
            <DropdownItem>Gender: {props.gender}</DropdownItem>
            <DropdownItem>Height: {props.height}</DropdownItem>
            <DropdownItem>Weight: {props.weight}</DropdownItem>
            <DropdownItem>Eye Color: {props.eye}</DropdownItem>
            <DropdownItem>Hair Color: {props.hair}</DropdownItem>
            <DropdownItem>Skin Color: {props.skin}</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </Dropper>
      );
}
export default Example;