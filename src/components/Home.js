import React from 'react';
import Produtos from './Produtos.js'
import './Home.css'

class Home extends React.Component {

    state = {
        produtos: [
            {
                id: '1',
                name: "Nome do Produto",
                value: "3333",
                imageUrl: "https://picsum.photos/200/300?random=1"
            },
            {
                id: '2',
                name: "Nome do Produto",
                value: "2222",
                imageUrl: "https://picsum.photos/200/300?random=2"
            },
            {
                id: '3',
                name: "Nome do Produto",
                value: "1111",
                imageUrl:  "https://picsum.photos/200/300?random=3"
            },
            {
                id: '4',
                name: "Nome do Produto",
                value: "4444",
                imageUrl:  "https://picsum.photos/200/300?random=4"
            },
            {
                id: '5',
                name: "Nome do Produto",
                value: "8888",
                imageUrl:  "https://picsum.photos/200/300?random=5"
            },
            {
                id: '6',
                name: "Nome do Produto",
                value: "6666",
                imageUrl:  "https://picsum.photos/200/300?random=6"
            },
            {
                id: '7',
                name: "Nome do Produto",
                value: "5555",
                imageUrl:  "https://picsum.photos/200/300?random=7"
            },
            {
                id: '8',
                name: "Nome do Produto",
                value: "7777",
                imageUrl:  "https://picsum.photos/200/300?random=8"
            },
        ],
        filtro: "crescente",
        data: "",
      }

      onChangeFilter = (event) => {
        this.setState({ filtro: event.target.value })
        console.log(this.state.filtro)
      }
      
      

    render() {        

        const mostrarProdutos = this.state.produtos
            .sort( this.state.filtro === "crescente" ? 
            ((a, b) => (b["value"] - a["value"])) : ((a, b) => (b["value"] - a["value"])*(-1)) )
            .filter(produto => {
                return produto
            })

        return (
            <div>
                <p className="pClass">Quantidade de produtos: 8
                    <br />
                    <select value={this.state.filter} onChange={this.onChangeFilter}>
                        <option value="crescente">Crescente</option>
                        <option value="decrescente">Decrescente</option>
                    </select>
                </p>
                <div className="cardProdutos">
                {mostrarProdutos.map(produto => {
                    return (
                     <Produtos
                        id={produto.id}
                        name={produto.name}
                        value={produto.value}
                        imageUrl={produto.imageUrl}
                     />   
                    )
                })}
                </div>
            </div>
        );
    }
}

export default Home;