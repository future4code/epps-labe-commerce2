import React from 'react';
import Home from './components/Home.js';
import './App.css';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro.js';

export default class App extends React.Component {

  state = {
    carrinho: false,
    carrinhoItem: [],
    total: 0,
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

  abreFechaCarrinho = () => {
    this.setState((prevState) => ({
      carrinho: !prevState.carrinho,
    })
    )
  }

  addAcarrinho = (produto) => {
    const produtoAddNovo = {
      id: Date.now(),
      name: produto.name,
      value: produto.value,
      imgUrl: produto.imgUrl
    }

    const totalCarrinho = this.state.total + produtoAddNovo.value;

    const produtoAddLista = [produtoAddNovo, ...this.state.carrinhoItem]

    this.setState({total: totalCarrinho})
    this.setState({carrinhoItem: produtoAddLista})
  }

  removerDoCarrinho = (produtoID) => {
    const atualizaNovoCarrinho = this.state.carrinhoItem.filter((produto) => {
      return produtoID !== produto;
    })

    let calculaNovoTotal = 0;
    calculaNovoTotal = this.state.total - produtoID.value

    this.setState({total: calculaNovoTotal })
    this.setState({carrinhoItem: atualizaNovoCarrinho})

  }

  render(){
  
  return (
    <div>
          <Home />
          <Filtro produtos={this.state.produtos} min={this.state.produtos.inputValueMin} max={this.state.produtos.inputValueMax} />
          <button class='button-carrinho' onClick={this.abreFechaCarrinho}>Carrinho</button>
          <div>
            {this.state.carrinho ? <Carrinho /> : ''}
          </div>
    </div>
  );
}
}
