import React from 'react'
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background-color: black;
    border-top: 2px solid #f44336;
    width: 100%;
    height: 50px;
    display: flex;
    padding-block: 0.5rem;
    font-size: 1.5rem;
    align-items: center;
    justify-content: center;
    
    h2{
        font-size: 1rem;
        color: white;
        font-weight: 500;
    }
`

 const Footer = () => {
  return (
    <StyledFooter>
       <h2>PobreFlix &copy; Desenvolvidor por Pedro Lucas 2024 </h2> 
    </StyledFooter>
  )
}

export default Footer;