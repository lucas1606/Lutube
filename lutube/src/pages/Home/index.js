import React from 'react';
import Menu from '../../components/menu';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain'

function Home() {

  
  return (
    
    
    <div style={{background:'#141414'}}>
       <Menu />
       <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
  videoDescription={dadosIniciais.categorias[0].videos[0].titulo}
  url= {dadosIniciais.categorias[0].videos[0].url} />;

        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
        <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />


       <Footer />
       </div>
  
  );
};

export default Home;
