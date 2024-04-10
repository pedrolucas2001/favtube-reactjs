import React from 'react'
import styled from 'styled-components';
import videos from "../videos.json"

const StyledCategory = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20;
    border-bottom: 1px solid #303030;
    margin-bottom: 1rem;
    div{
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        justify-content: center;
    }
`

export const categories = [
  "Funk",
  "Rap",
  "Trap",
  "Reggae",
  "Freestyle"
]

export function filterCategory(id) {
  return videos.filter(video => video.category === categories[id])
}

const Category = ({ nomeCategory, children }) => {
  return (
    <StyledCategory>
        <h2>{nomeCategory}</h2>
        <div>
            {children}
        </div>
    </StyledCategory>
  )
}

export default Category;
