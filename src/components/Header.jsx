import React from 'react'
import { styled } from 'styled-components'
import vectorux1 from '../assets/vectorux1.png'

const Container1=styled.div`
/* width: 3364px; */
width: 100%;
height: 70vh;
background: url(${vectorux1});
background-size: 100% 100%;
display: grid;
align-items: center;
@media screen and (max-width:600px ){
 .nameContainer{
  margin-left: -10vw;
 }
}

.nameContainer{
    /* display: grid; */
    align-items: center;
    margin-left: 10vw;
}
.vector{
color: #FFF;
font-family: Staatliches;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom: 0;
line-height: 1;
}
.ux{
color: #63E7DA;
font-family: Staatliches;
font-size: 40px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
.subVector{
color: #FFF;
font-family: Merienda;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 0;
}
.subVectorAnd{
color: #63E7DA;
font-family: Merienda;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
}
`

function Header() {
  return (
    <Container1>
        <div className='nameContainer'>
            <h1 className='vector'>VECTOR<span className='ux'>UX</span></h1>
            <h3 className='subVector'>we ideate, create <span className='subVectorAnd'>&</span> innovate</h3>
        </div>
    </Container1>
  )
}

export default Header
