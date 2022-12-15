import './Banner.css'

function Banner() {
  //JSX
  return(
    <header className="banner"> 
      <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
    </header>
  )
}

export default Banner

/*__Outra alternativa__ 

import './Banner.css'

export const Banner= () => {

  return(
    <header className="banner"> 
      <img src="/imagens/banner.png" alt="O banner principal da página do Organo"/>
    </header>
  )
}

e depois disso criar um arquivo index.js nessa mesma pasta e importar e exportar esse banner 

import { Banner } from "./Banner";

export default Banner

apos isso
ir em App.js e importar

import Banner from './componentes/Banner' <!-- /* Lembrando q não é necessario por o nome do arquivo, só as pastas já servem -->;                                      

Desse jeito é interessante se fazer pois permite que vc exporte apenas uma função de muitas que podem ter em um mesmo componente. Mas como só tem uma função aqui, então não é necessário fazer isso
*/