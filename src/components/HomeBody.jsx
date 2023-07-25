import React from 'react'
import { styled } from 'styled-components'
import cardIcon1 from '../assets/cardIcon1.png'
import cardIcon2 from '../assets/cardIcon2.png'
import cardIcon3 from '../assets/cardIcon3.png'
import cardIcon4 from '../assets/cardIcon4.png'


const Container=styled.div`
    background-color:  #191A1D;
    height: 30vh;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    .mainrow1{
      display: flex;
      width: 50%;
      justify-content: space-around;
    }
    .mainrow2{
      display: flex;
      width: 50%;
      justify-content: space-around;
    }
    @media screen and (max-width:550px ){
        height: 70vh;
        display: grid;
        .mainrow1{
          width: 100%;
          display: flex;
          justify-content: space-around;
        }
        .mainrow2{
          width: 100%;
          display: flex;
          justify-content: space-around;
          margin-top: 5vh;
        }
        img{
            height: 40px;
            width: 30px;
        }
        h3{
            font-size: 13px;
        }
        p{
            font-size: 10px;
        }
        
    }
   
    .cards{
        width: 21vw;
        background-color: #3C3C3C;
        height: 29vh;
        border-top-right-radius: 20px;
        border-bottom-left-radius: 20px;
        border: 3px solid #0becb4;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
        /* transform:
        perspective(800px)
        rotateY(25deg) scale(0.9)
        rotateX(10deg);
        filter: blur(2px);
        opacity: 0.5;
        transition: 0.6s ease all;

    &:hover {
        transform:
        perspective(800px)
        rotateY(-15deg)
        translateY(-50px)
        rotateX(10deg)
        scale(1);
        filter: blur(0);
        opacity: 1; */
  /* } */
           }
    .image{
        width: 50px;
        height: 70px;
    }
    h3{
        background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.27) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-bottom: 5px;
    }
    p{
        color: #8F8F8F;
        font-family: Montserrat;
        margin: 5px;
    }
    @media screen and (max-width:550px ){
      .cards{
        width: 30vw;
      }
    }
`

function HomeBody() {

  return (
    <Container className='main'>
      <div className='mainrow1'>
      <div className="cards">
        <img src={cardIcon1} alt="" className='image'/>
        <h3>UI & UX</h3>
        <p>
        Designing interfaces that are intuitive, efficient, and enjoyable to use.      
        </p>
      </div>
      <div className="cards">
      <img src={cardIcon2} alt="" className='image'/>
        <h3>Web & Mobile App</h3>
        <p>
        Transforming ideas into exceptional web and mobile app experiences.        </p>
      </div>
      </div>
      <div className='mainrow2'>
      <div className="cards">
      <img src={cardIcon3} alt="" className='image'/>
        <h3>Design & Creative</h3>
            <p>
            Crafting visually stunning designs that connect with your audience.            </p>
        </div>
      <div className="cards">
      <img src={cardIcon4} alt="" className='image'/>
        <h3>Development</h3>
        <p>
        Bringing your vision to life with the latest technology and design trends.        </p>
      </div>
      </div>
    </Container>
  )
}

export default HomeBody
