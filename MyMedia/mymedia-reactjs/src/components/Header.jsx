import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: #000000a8;
    height: 68px;
    border-bottom: 2px solid #f44336;
    position: fixed;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

    span{
        margin-left: 1rem;
        font-size: 2rem;
        color: #b71c1c;
        font-weight: 500;
        text-decoration: none;
    }

    nav{
        margin-right: 1rem;
    }
`
const StyledLinkNav = styled(Link)`
        text-decoration: none;
        color: white;
        padding-inline: 1rem;
        font-size: 18px;
        font-weight: 500;
`

const StyledLinkLogo = styled(Link)`
        text-decoration: none;
`

const Header = () => {
  return (
    <StyledHeader>
        <StyledLinkLogo to="/">
            <span>FavTube</span>
        </StyledLinkLogo>
        <nav>
            <StyledLinkNav to="/">Home</StyledLinkNav>
            <StyledLinkNav to="/watch">Error</StyledLinkNav>
            <StyledLinkNav to="/search">Pesquisar</StyledLinkNav>
        </nav>
    </StyledHeader>
  )
}

export default Header;

