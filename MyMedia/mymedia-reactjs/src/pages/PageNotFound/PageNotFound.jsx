import React from 'react'
import styled from 'styled-components';
import imgError404 from "./erro404.png"
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Container from '../../components/Container';

const StyledPageNotFound = styled.section`
    width: 100%;
    height: 80vh;
    padding-top: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
`

const PageNotFound = () => {
    return (
        <>
            <Header />
            <Container>
                <StyledPageNotFound>
                    <h2>Ops! Conteúdo não localizado</h2>
                    <img src={imgError404} alt="Logo de página não localizada" />
                </StyledPageNotFound>
            </Container>
            <Footer />
        </>
    )
}

export default PageNotFound;