import React from 'react'
import styled from 'styled-components';

const StyledContainer = styled.section`
    width: 100%;
    min-height: 400px;
    background-color: #191919;
    padding-block: 1rem;
    color: #fff;
    text-align:center;
`

const Container = ({ children }) => {
  return (
    <StyledContainer>
        {children}
    </StyledContainer>
  )
}

export default Container;
