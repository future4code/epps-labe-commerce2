import React from 'react';
import Home from './components/Home.js';
import './App.css';
import Filtro from './components/Filtro.js';

export default class App extends React.Component {

  state = {
    produtos: [
        {
            id: '1',
            name: "Nome do Produto",
            value: 3333,
            imageUrl: "https://picsum.photos/200/300?random=1"
        },
        {
            id: '2',
            name: "Nome do Produto",
            value: 2222,
            imageUrl: "https://picsum.photos/200/300?random=2"
        },
        {
            id: '3',
            name: "Nome do Produto",
            value: 1111,
            imageUrl:  "https://picsum.photos/200/300?random=3"
        },
        {
            id: '4',
            name: "Nome do Produto",
            value: 4444,
            imageUrl:  "https://picsum.photos/200/300?random=4"
        },
        {
            id: '5',
            name: "Nome do Produto",
            value: 8888,
            imageUrl:  "https://picsum.photos/200/300?random=5"
        },
        {
            id: '6',
            name: "Nome do Produto",
            value: 6666,
            imageUrl:  "https://picsum.photos/200/300?random=6"
        },
        {
            id: '7',
            name: "Nome do Produto",
            value: 5555,
            imageUrl:  "https://picsum.photos/200/300?random=7"
        },
        {
            id: '8',
            name: "Nome do Produto",
            value: 7777,
            imageUrl:  "https://picsum.photos/200/300?random=8"
        },
    ],
    filtro: "crescente",
    data: "",
    inputValueMin:0,
    inputValueMin:1000,
    inputValueText:'',
    filtroInput:false
  }
  render(){
  
  return (
    <div>
          <Home />
          <Filtro produtos={this.state.produtos} min={this.state.produtos.inputValueMin} max={this.state.produtos.inputValueMax} />
    </div>
  );
}
}

