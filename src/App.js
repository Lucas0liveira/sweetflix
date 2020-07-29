import React from 'react';
import BannerMain from './components/BannerMain'
import Button from './components/Button'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Menu from './components/Menu'
import dadosIniciais from './dados_iniciais.json'

function App() {
  return (
    <div>

      <Menu />
      
      <BannerMain 
        videoTitle = {dadosIniciais.categorias[1].videos[1].titulo}
        url={dadosIniciais.categorias[1].videos[1].url}
        videoDescription = {"O que é Front-end? Trabalhando na área."} 
      />

      <Carousel
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      
      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer/>

    </div>
  );
}

export default App;