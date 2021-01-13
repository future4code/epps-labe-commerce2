import React from 'react';
import './Produtos.css'

function Produtos(props) {
    return (
        <div className="containerProduto">
            <img src={ props.imageUrl }/>
            <h4>{ props.name }</h4>
            <p>R${ props.value }</p>
            
            {/* <button onClick={() => this.addAcarrinho(produto)}>Adicionar ao carrinho</button> */}
            <button>Adicionar ao carrinho</button>
        </div>
    );
}

export default Produtos;