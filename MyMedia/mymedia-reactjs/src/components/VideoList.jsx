import React from 'react'
import styled from 'styled-components';
import Card from './Card';

const StyledVideoList = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
`

 const VideoList = ({ videos, emptyHeading }) => {

    const count = videos.length
    let heading = emptyHeading
    if(count > 0){
        const noun = count > 1 ? "Vídeos" : "Vídeo" 
        heading = `${count} ${noun}`
    }
    

  return (
    <>
        <h2>{heading}</h2>
        <StyledVideoList>
            {videos.map((video)=> <Card id={video.id} key={video.id} titleVideo={video.title}/>)}
        </StyledVideoList>
    </>
  )
}

export default VideoList;

