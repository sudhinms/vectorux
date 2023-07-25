import React from 'react'
import { styled } from 'styled-components'
import { useState } from 'react';

const Container=styled.div`
    background-color: #191A1D;
    /* padding: 5px; */
    position: relative;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #FFF;
    font-family: Lato;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    .logo{
        font-size: 30px;
    }
    .links{
        display: flex;
        font-size: 20px;
    }

    .link1{
        margin-right: 30px;
    }

    .icon{
        display: none;
    }
    @media screen and (max-width:600px ){
        .icon{
            display: flex;
            margin-bottom: 40px;
        }
        .links{
            display: none;
        }
        .side_link1{
        margin-top: 5px;
        font-size: 15px;
    }
    }

    .side_nav{
        height: 25vh;
        width: 250px;
        background-color: grey;
        position: absolute;
        top: 100px;
        left: 0;
        transform: translateX(${(props)=>props.stateval?"0px":"-300px"});
        transition: all 0.5s ease-in-out;
        border-bottom-right-radius: 20px;
        
    }
    .side_logo{
        font-size: 30px;
        font-weight: bold;
        display: flex;
        justify-content: center;
        padding-top: 20px;
        margin-bottom: 0;
    }
    .side_links{
        font-size: 20px;
        display: grid;
        justify-content: space-around;
    }

    .side_link1{
        margin-top: 5px;
    }
    .fa-bars{
        height: 10px;
        width: 9px;
        margin-right: 40px;
    }


`

function Navbar() {
  const [state,setstate]=useState(false);

  return (
  <Container stateval={state}>
    {/* <div className="nav_main"> */}
      <div className="logo"></div>
      <div className="links">
          <div className="link1">Home</div>
          <div className="link1">About</div>
          <div className="link1">Contact</div>
          <div className="link1">Help</div>
      </div>
      <div className="icon"><i className="fa-solid fa-bars" onClick={()=>setstate(!state)}></i></div>
    {/* </div> */}
    <div className="side_nav">
          <div className="side_logo"></div>
          <div className="side_links">
              <div className="side_link1">Home</div>
              <div className="side_link1">About</div>
              <div className="side_link1">Contact</div>
              <div className="side_link1">Help</div>
          </div>
    </div>
  </Container>
  )
}

export default Navbar
