import React from 'react'
import styled from 'styled-components';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import videos from "../../videos.json"
import { useParams } from 'react-router-dom';
import PageNotFound from '../PageNotFound/PageNotFound';

const StyledWatch = styled.section`
    padding-top: 84px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    iframe{
        border-radius: 5px;
    }
`
const Watch = () => {

    const params = useParams()
    const video = videos.find((video)=>{return video.id === params.id})
    //Aqui ele verifica se o vídeo passado no parâmetro existe dentro do Array de videos

    if(!video){return <PageNotFound/>}
    //Caso ele não exista exibir a Página PageNotFound

    return (
        <>
            <Header />
            <Container>
                <StyledWatch>
                    <h1>Assistir</h1>
                    <iframe
                        width="854" height="480"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title="YouTube video player"
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>  
                    </iframe>
                        
                        
                </StyledWatch>
            </Container>
            <Footer />
        </>
    )
}

export default Watch;
