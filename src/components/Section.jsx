import React from 'react'
import styled from 'styled-components'
import Fade from "react-reveal/Fade"
import Bounce from 'react-reveal/Bounce';

function Section({text,description,imgObj,lBtn, rBtn}) {
    return (
      <Wrap imgbackground={imgObj}>
        <Fade bottom>
        <Header>
          <h1>{ text}</h1>
          <p>{description}</p>
        
          </Header>
          </Fade>
        <Down>
        <ButtonGroup>
          <Bounce left>
              <LeftBtn>{lBtn}</LeftBtn></Bounce>
              <Bounce right>
            {rBtn &&   <RightBtn>{ rBtn}</RightBtn> }
            </Bounce>
          </ButtonGroup>
          <Arrow>
        <img className="arrow" src="/images/down-arrow.svg" />
          </Arrow>
        </Down>
      </Wrap>
    )
}

export default Section


const Wrap = styled.div`
 color:#3b3b3b;
 background-image:${props => `url("/images/${ props.imgbackground}")`};
  background-repeat: no-repeat;
  background-position:center;
  background-size: cover;
  width: 100vw;
  height: 100vh ;
  
display: flex;
justify-content: space-between;
flex-direction: column;
  
`
const Header = styled.div`
padding-top: 14vh;

`
const ButtonGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
@media (min-width: 768px) {
    flex-direction: row;
   
}
`
const LeftBtn = styled.div`
font-size: 12px;
width: 300px;
height: 40px;
margin: 10px ;
background-color:black;
opacity: 0.6;
color:white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
cursor: pointer;
text-transform: uppercase;

`
const RightBtn = styled.div`
text-transform: uppercase;
width: 300px;
height: 40px;
font-size: 12px;
margin: 10px;
opacity: 0.6;
background-color: white;
color:black;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
cursor: pointer;


`

const Down = styled.div`

`

const Arrow = styled.div`

`


