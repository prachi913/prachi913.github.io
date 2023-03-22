import React from 'react'

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 


export const Navbar = () => {
    return (
      <DIV id="nav-menu">
        <div className="div1">
          <img src="" alt="k" />
        </div>
        <div className="div2">
          <a href="#home" id="nav-link home">
            Home
          </a>
          <a href="#about" id="nav-link about">
            About
          </a>
          <a href="#skills" id="nav-link skills">
            Skills
          </a>
          <a href="#projects" id="nav-link projects">
            Projects
          </a>
          <a href="#contact" id="nav-link contact">
            Contact
          </a>
        </div>

        <label className="icon">
          <FontAwesomeIcon icon={faBars} className="kkk" />
        </label>
        <div className="div3" id="nav-link resume">
          <a
            class="resume"
            href="https://drive.google.com/file/d/1pzmJHhMOmiPx3V60t7tP19OjamtvLSWO/view?usp=sharing"
            target="blank"
            download="Prachi-Tiwari-Resume"
          >
            <button> Resume</button>
          </a>
        </div>
      </DIV>
    );
};
// <span className="icon">
        //   <FontAwesomeIcon icon={faBars} className="kkk" />
        // </span>
const DIV = styled.div`
  height: 80px;
  /* margin: auto; */
  border: 1px solid red;
  /* display: flex; */
  /* justify-content: space-between; */

  .div1 {
    border: 1px solid red;
    width: 90px;
    height: auto;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .div3 {
    /* width: auto; */
    /* border: 1px solid red; */
    /* height:auto; */
    /* width:auto; */
    /* text-align: center; */
    /* height: 100%; */
    float: right;
    display: flex;
    align-items: center;
    margin-top: -25px;
    margin-right: 60px;

    /* te */
    /* line-height:80px; */
    /* margin-top:1px; */
    /* margin-right: -100px; */

    /* justify-content: space-around; */
  }
  .div2 {
    display: flex;
    /* margin: 0 8px; */
    border: 1px solid black;
    text-decoration: none;
    /* display:inline-block; */
    margin: auto;
    justify-content: space-around;
    color: red;
    width: 400px;
    /* line-height: 80px; */
    /* margin-right: 300px; */
    /* font-size */
    /* float: right; */
  }
  .div3>a:hover {
    border: 3px solid teal;
    transition: 0.9s;
    /* color:navy; */
    background-color:blue;
    
  }
  .div2>a:hover {
    /* border: 3px solid white; */
    color:blue;
    transition: 2s;
  }

  .resume {
    font-size: 25px;
    font-weight: bold;
    /* line-height: 80px; */
    letter-spacing: 2px;
    /* float: right; */
  }
  .kkk {
    /* display: none; */
    /* col */
    color:white;
    font-size:30px;
    /* border:1px solid red; */
  }
  .icon {
    /* line-height: 200px; */
  }
  @media all and (max-width: 1000px) {
    /* display: flex;
    justify-content: space-between; */

    .div2 {
      position: fixed;
      display: flex;
      margin: 0 8px;

      text-decoration: none;
      /* margin: auto; */
      justify-content: space-around;
      color: black;
      width: 400px;
      line-height: 200px;
    }
    .div2 > a {
      color: black;
    }
    .div1 {
      position: fixed;

      width: 90px;
      height: auto;
      /* margin-left: 200px; */
      /* margin-right: 250px; */
    }
    .div3 {
      width: auto;
      position: fixed;
      /* text-align: center; */
      display: flex;
      align-items: center;
      /* margin-right: 400px; */

      /* justify-content: space-around; */
    }
    .kkk {
      color: white;

      /* border:1px solid red; */
    }
    .icon {
      line-height: 80px;
      display: block;
      /* margin-left: 900px; */
    }
  }
  @media all and (max-width: 510px) {
    .div2 {
      display: flex;
      margin: 0 8px;

      text-decoration: none;
      /* margin: auto; */
      justify-content: space-around;
      color: black;
      width: 400px;
      line-height: 200px;
    }
    .div2 > a {
      color: black;
    }
    .kkk {
      color: white;
      /* border:1px solid red; */
    }
    .div1 {
      position: fixed;
      margin: auto;
      width: 90px;
      height: auto;
      margin-left: 30px;
      display: flex;
      align-items: center;
      height: 60px;
      margin-top: 10px;

      /* margin-right: 250px; */
    }
    .div3 {
      width: auto;

      /* text-align: center; */
      display: flex;
      align-items: center;
      margin-left: 40px;
      /* margin-right: 250px; */
      line-height: 200px;

      /* justify-content: space-around; */
    }
    .resume {
      font-size: 25px;
      font-weight: bold;
      line-height: 200px;
      letter-spacing: 2px;
      color: black;
    }

    .icon {
      line-height: 80px;
      margin-left: 460px;
    }
  }
`;
