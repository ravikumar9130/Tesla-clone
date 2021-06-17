import React,{useState} from 'react'
import styled from 'styled-components'


function Header() {
    
    const [closer, setCloser] = useState(false);

    return (
        <Nav>
            <Logo>
                <img className="logo" src="../../images/logo.svg" alt="" />
            </Logo>
            <Middle>``
                <a href="/">Model s</a>
                <a href="/">Model 3</a>
                <a href="/">Model x</a>
                <a href="/">Model y</a>
                <a href="/">solar roof</a>
                <a href="/">solar panels </a>
            </Middle>
            <Rightside>
                <Tiny>
            <a href="/">SHOP</a>
                    <a href="/">TESLA </a>
                    </Tiny>
                <img onClick={()=>setCloser(true)} className="menu "  src="/images/menu.png" alt="" />

            </Rightside>
            <SlideNav show={closer}>
                <CloseIcon  >
                    <img onClick={()=>setCloser(false)}  src="/images/icons8-close-window-50.png" alt="" />
                </CloseIcon>
                <li><a href="/">model s</a></li> 
                <li> <a href="/">Model 3</a></li>
                <li>  <a href="/">Model x</a></li>
                <li>  <a href="/">Model y</a></li>
                <li> <a href="/">SHOP</a></li>
                <li> <a href="/">Model 3</a></li>
                <li><a href="/">TESLA </a></li>
            </SlideNav>
        </Nav>
    )
}

export default Header


const Nav = styled.div`
position: fixed;
margin: 0px 15px;
height:60px;
top: 0;
left: 0;
right: 0;
display: flex;
align-items: center;
justify-content: space-between;
z-index: 10;

`
const Logo = styled.div`

`

const Middle = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 768px) {
    display: none;
}`
const Tiny = styled.div`
display: flex;
@media (max-width: 768px) {
    display: none;
}
`

const Rightside = styled.div`
display: flex;
`

const SlideNav = styled.div`
   background-color: white;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    width: 300px;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: transform 0.4s ease-in-out ;
    justify-content: space-evenly;
    transform: ${(props)=>props.show ?'translatex(0)':'translatex(100%)'};
li{
    text-decoration: none;
    display: flex;
    border-bottom: 1px solid rgb(0,0,0,.2);
    width: 70%;
    
  
}

`
const CloseIcon = styled.div`
cursor: pointer;

`