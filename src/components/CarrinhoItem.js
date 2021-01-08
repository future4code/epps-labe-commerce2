import React from 'react'; 

const CarrinhoItem = (props) => {
    return (
        <li>
            <span>
                <p>{props.name}</p>
                <p>{props.value}</p>
            </span>
            
            <button>X</button>
        </li>
    )
}

export default CarrinhoItem;