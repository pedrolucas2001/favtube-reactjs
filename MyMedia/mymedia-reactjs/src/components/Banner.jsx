import React from 'react'
import styled from 'styled-components';

const StyledBanner = styled.div`
    width: 100%;
    height: 347px;
    /* background-image: url('../../images/banner-home.png');  */
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top: 68px;
`

 const Banner = ({ nomeImg }) => {
  return (
    <StyledBanner style={{ backgroundImage: `url('../../images/banner-${nomeImg}.png')` }}>

    </StyledBanner>
  )
}

export default Banner;