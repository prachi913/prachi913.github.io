import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

export const Navbar = () => {
    return (
        <DIV>
            <div className='div1'>me</div>
            <div className='div2'>
              
                <Link to={"#"}>Home</Link>
                <Link to={"#"}>About</Link>
                <Link to={"#"}>Skill</Link>
                <Link to={"#"}>Projects</Link>
                <Link to={"#"}>Contact-Us</Link>
            </div>
        </DIV>
    );
};
const DIV = styled.div`
  height: 80px;
  margin: auto;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;

  .div1 {
    border: 1px solid black;
  }
  .div2 {
    border: 1px solid black;
    text-decoration: none;
    margin: auto;
    justify-content: space-around;
  }
`;
