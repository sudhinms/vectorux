import React from 'react'
import { styled } from 'styled-components'

const Container=styled.div`
width: 100%;
height: 80vh;
background-color: #191A1D;
display: flex;
justify-content: end;
align-items: end;
h3{
    margin-right: 1vw;
    color: white;
}
.sp{
  color:  rgb(99, 231, 218);
  font-family: fantasy;
}
`

function Footer() {
  return (
    <Container>
        
        <h3>Lets <span className='sp'><i>connect</i></span> there</h3>
    </Container>
  )
}

export default Footer
