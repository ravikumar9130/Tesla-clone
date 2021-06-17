import React from 'react'
import Section from './Section'
import styled from 'styled-components';

function Main() {
    return (
        <Container>
        <Section text={"Model S"} description={"Order Online for Touchless Delivery"} imgObj={"model-s.jpg"}  lBtn={ "existing inventory"} rBtn={ "custom order"}/>
        <Section text={"Model y"} description={"Order Online for Touchless Delivery"} imgObj={"model-y.jpg"} lBtn={ "existing inventory"} rBtn={ "custom order"}/>
        <Section text={"Model 3"} description={"Order Online for Touchless Delivery"} imgObj={"model-3.jpg"}  lBtn={ "existing inventory"} rBtn={ "custom order"}/>
        <Section text={"Model X"} description={"Order Online for Touchless Delivery"} imgObj={"model-x.jpg"} lBtn={ "existing inventory"} rBtn={ "custom order"}/>
        <Section text={"Lowest Cost Solar Panels in America"} description={"Money-back guarantee"} imgObj={"solar-panel.jpg"} lBtn={ "Order now"} rBtn={ "learn more"}/>
        <Section text={"Solar for New Roofs"} description={"Solar Roof Costs Less Than a New Roof Plus Solar Panels"} imgObj={"solar-roof.jpg"} lBtn={ "Order now"} rBtn={ "learn more"}/>
        <Section text={"Accessories"} description={""} imgObj={"accessories.jpg"} lBtn={"shop now"}  />
      
  
        </Container>
    )
}

export default Main

const Container = styled.div`
 width:100vw;
`



