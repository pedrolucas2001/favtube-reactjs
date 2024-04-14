import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledCard = styled.section`
    display: flex;
    a{
        text-decoration: none;
        color: #fff;
    }
    img{
        border-radius: 8px;
        width: 250px;
    }
    
`

 const Card = ({ id, titleVideo }) => {
  return (
    <StyledCard>
        <Link to={`/watch/${id}`}>
            <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="capa"/>
            <h5>{`${titleVideo}`}</h5>
        </Link>
    </StyledCard>
  )
}

export default Card;
