import React from 'react'
import styled from 'styled-components';
import Header from '../../components/Header';
import Container from '../../components/Container';
import Footer from '../../components/Footer';
import VideoList from '../../components/VideoList';
import videos from "../../videos.json"

const StyledSearch = styled.section`
    padding-top: 84px;
    display: flex;
    flex-direction: column;

`
const Search = () => {
    return (
        <>
            <Header />
            <Container>
                <StyledSearch>
                    <h2>Pesquisar</h2>
                    <VideoList videos={videos}></VideoList>
                </StyledSearch>
            </Container>
            <Footer />
        </>

    )
}

export default Search;


