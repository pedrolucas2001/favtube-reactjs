import Banner from "../../components/Banner";
import Category, { categories, filterCategory } from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
// import React, { useState } from 'react'

const Home = () => {

    // //Sintaxe do useState
    // const [ nome , setNome ] = useState("Nome Digitado");

    // function PegarNome(event){
    //     setNome(event.target.value)
    // }

    return (
        <>
            <Header></Header>
            <Banner nomeImg="home" />
            <Container>
                {/* <Category nomeCategory="Funk">
                        {filterCategory(0).map((video)=> <Card id={video.id} key={video.id} titleVideo={video.title}/>)}
                    </Category>
                    <Category nomeCategory="Rap">
                        {filterCategory(1).map((video)=> <Card id={video.id} key={video.id} titleVideo={video.title}/>)}
                    </Category>
                    <Category nomeCategory="Trap">
                        {filterCategory(2).map((video)=> <Card id={video.id} key={video.id} titleVideo={video.title}/>)}
                    </Category>
                    <Category nomeCategory="Reggae">
                        {filterCategory(3).map((video)=> <Card id={video.id} key={video.id} titleVideo={video.title}/>)}
                    </Category>
                    <Category category="Freestyle">
                        {filterCategory(4).map((video)=> <Card id={video.id} key={video.id} titleVideo={video.title}/>)}
                    </Category> */}

                {
                    categories.map((category, index) =>
                        <Category nomeCategory={category} key={index}>
                            {filterCategory(index).map((video) => <Card id={video.id} key={video.id} titleVideo={video.title} />)}
                        </Category>
                    )
                }

                {/* export function filterCategory(id) {
                    return videos.filter(video => video.category === categories[id])
            } */}



            </Container>
            <Footer></Footer>
        </>
    )
}

export default Home;
