import React from 'react';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Menu from '../../components/Menu'
import dadosIniciais from '../../data/dados_iniciais.json'

function Home() {
  return (
    <div>

      <Menu />
      
      <BannerMain 
        videoTitle = {dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription = {"Speed-Painting de uma pintura a óleo impressionante"} 
      />

      <Carousel
      ignoreFirstVideo
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

export default Home;