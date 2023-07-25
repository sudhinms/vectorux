import React from 'react'
import { styled } from 'styled-components'
import Laptop from '../assets/laptop.png'
import finalLogo from '../assets/finalLogo.png'

const Container=styled.div`
    background-color: #191A1D;
    width: 100%;
    height: 70vh;
    margin: 0;

    .lineContainer{
        display: flex;
        align-items: center;
    }
    .linesection1{
      width: 5vw;
      height: 0.5vh;
      background-color: rgb(99, 231, 218);
      border-radius: 15px;
    }

    .lapImg{
        width: 20vw;
        height: 25vh;
    }
    .lapContainer{
      width: 20vw;
      height: 25vh;
    }

    .line{
        width: 60vw;
        height: 0.5vh;
        background-color: #383333;
        display: flex;
        justify-content: space-around;
        
    }
    .line2{
      width: 20vw;
      height: 0.5vh;
      background-color: #383333;
      display: flex;
      justify-content: center;
    }
    
    .servces{
        font-family: Atma;
        background-image: linear-gradient(to right, #ece9e9, #000000);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 15px 60px;
    }
    .svg1{
        height: 40px;
        width: 40px;
    }
    .offers{
        margin-top: 60px;
        display: flex;
        justify-content: space-around;
    }
    p{
        color: #6D6D6D;
        text-align: center;
        font-family: Montserrat;
    }
    .offerTitle{
        background: linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 100%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .cards{
        width: 19vw;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .logo01{
      margin-left: 8px;
    }
    .logo02{
        margin-left: 20px;
    }
    .aboutContainer{
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
    }
    @media screen and (max-width:800px ){
        .lapImg{
            width: 20vw;
            height: 25vh;
            right: 1vw;
        
        } 
        
    }
    .feedbackContainer{
      background-color: #191A1D;
      width: 40vw;
      height: 30vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  .contact{
      display: flex;
      flex-direction: column;
      background-color: #191A1D;
      width: 40vw;
      height: 30vh;
      justify-content: center;
      align-items: center;
  }
  .finalLogo{
    width: 100px;
    height: 100px;
  }
  .inp{
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .btn{
    background-color:  rgb(99, 231, 218);
    border-radius: 20px;
    border: none;
    color: white;
    margin-left: 10px;
    width: 50px;
  }
  .inpField{
    background-color:#191A1D;
    border-width: 1px;
    border-color: #ece9e9;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-top-right-radius: 20px;
    width: 150px;
    height: 20px;
  }
  .para{
    color: white;
    margin: 0;
    padding: 0;
    font-size: 20px;
  }
  .emailContainer{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
  }
  .email{
    color:rgb(99, 231, 218);
    font-size: 20px;
  }
  .spanblue{
    color:rgb(99, 231, 218);
  }
  h2{
    font-size: 25px;
    color: white;
  }
  @media screen and (max-width:600px ){
    background-color: #191A1D;
    width: 100%;
    height: 160vh;
    margin: 0;

    .finalLogo{
    width: 60px;
    height: 60px;
  }
  .feedbackContainer{
    width: 30vw;
    height: 20vh;
    margin-bottom: 10vh;
    margin-left: 13vw;

  }
  .inpField{
    width: 16vw
  }
  h2{
    font-size: 17px;
  }
  .para{
    font-size: 12px;
  }
  .email{
    font-size: 14px;
  }
  .contact{
    width: 55vw;
    height: 10vw;
  }
  .lapImg{
    width: 20vw;
    height: 25vh;
    /* margin-top:80px; */
  }
  
  .offers{
        margin-top: 60px;
        display: grid;
        justify-content: space-around;
    }

    .aboutContainer{
        display: grid;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
    }
    .cards{
      width: 40vw;
    }
  }
  
`

function HomeBody2() {
  return (
    <Container className='main'>
        <div className='lineContainer'>
          <div className='line'>
            <div className='linesection1'></div>
            <div className='linesection1'></div>
            </div>
        <div className='LapContainer'>
            <img src={Laptop} alt="" className='lapImg'/>
        </div>
        <div className='line2'>
          <div className="linesection1"></div>
        </div>
        </div>
        <div>
            <h1 className='servces'>What we offer?</h1>
            <div className='offers'>
                <div className="cards">
                    <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="290" height="366" viewBox="0 0 290 366" fill="none">
                        <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
                    </svg>
                    <h3 className='offerTitle'>24/7 Customer support</h3>
                    <p>
                    If you have any queries don’t wait, we are here for you 24/7
                    </p>
                </div>
                <div className="cards">
                    <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="290" height="366" viewBox="0 0 290 366" fill="none">
                        <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
                    </svg>
                    <h3 className='offerTitle'>Perfection</h3>
                    <p>
                    Perfect Design With Responsive Pages
                    </p>
                </div>
                <div className="cards">
                    <svg className='svg1' xmlns="http://www.w3.org/2000/svg" width="290" height="366" viewBox="0 0 290 366" fill="none">
                        <path d="M198.599 21C137.098 60.0096 79.5353 133.327 26.7694 180.237C-14.3347 216.78 142.896 117.934 198.599 97.398C205.405 94.8889 229.505 87.3943 222.127 104.306C198.599 126.07 173.3 147.202 160.42 156.062C126.398 179.467 127.358 175.217 94.9702 200.06C84.3925 208.174 74.1505 216.635 64.9653 225.779C56.859 233.85 36.5739 252.922 49.368 254.261C56.6399 255.022 63.2256 250.092 69.3272 246.822C83.1565 239.409 95.8633 230.719 108.849 222.378C138.094 203.594 181.485 173.042 213.271 156.062C215.263 154.998 257.351 132.574 235.213 157.763C203.325 194.045 157.28 221.464 122.464 255.855C115.482 262.751 106.632 269.413 104.091 278.067C103.197 281.11 231.813 200.177 235.213 198.659C261.003 187.139 189.125 230.131 207.059 217.49C222.389 206.684 267.22 176.169 258.609 191.027C258.609 191.027 288.718 191.027 246.43 233.751C159.637 321.436 235.213 255.855 122.464 346" stroke="#63E7DA" stroke-width="40" stroke-linecap="round"/>
                    </svg>
                    <h3 className='offerTitle'>Dedication</h3>
                    <p>
                    Our highly dedicated team ensures the on time completion and delivery of the project.
                    </p>
                </div>

            </div>
        </div>
        <div className="aboutContainer">
          <div className="feedbackContainer">
            <img className='finalLogo' src={finalLogo} alt="" />
            <div className='inp'>
              <input type="text" className='inpField' placeholder='write a message'/>
              <button className='btn'>send</button>
            </div>
          </div>
          <div className="contact">
            <h2>Let's <span className='spanblue'><i>talk</i></span> something special.</h2>
            <p className='para'>We seek to push the limitations of creativity to create high-engaging,<br /> user-friendly and memorable interactive experiences.</p>
            <div className='emailContainer'>
              <h3 className='email'>vectorux0@gmail.com</h3>
            </div>
          </div>
        </div>
    </Container>
  )
}

export default HomeBody2
