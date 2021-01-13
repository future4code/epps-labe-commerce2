import React from "react";
import './Filtro.css';


export default class Filtro extends React.Component {

  state = {
    produtos: [
      {
        id: Date.now(),
        name: "",
        inputValueMin: "",
        InputValueMax: "",
        InputValueText: "",
      }
    ],
  };
  onChangeInputMin = (event) => {
    this.setState({
      inputValueMin: event.target.value
    });
  };
  onChangeInputMax = (event) => {
    this.setState({
      InputValueMax: event.target.value
    });
  };
  onChangeInputText = (event) => {
    this.setState({
      InputValueText: event.target.value
    });
  };





  render() {

    const listaFiltrada = this.props.produtos.filter((produto) => {

      if (produto.value < this.valueMax) {
        return true
      } else {
        return false
      }
    }).filter((produto) => {

      if (produto.Text < this.valueText) {
        return true
      } else {
        return false
      }
    });;

    console.log(listaFiltrada)

    return (
      <div>
        <div class='containerFiltro'>
          <div class='inputFiltro'>


            <h3>Filtros:</h3>

            <ul>{listaFiltrada.map(produto => {
              return <li>{produto}</li>
            })}</ul>

            <label for="valorMin">Valor Mínimo:</label>
            <input valueMin={this.state.inputValueMin}
              onChange={this.onChangeInputMin}
              type='number' />
          </div>
          <div class='inputFiltro'>
            <label for="valorMax">Valor Máximo:</label>
            <input valueMax={this.state.InputValueMax}
              onChange={this.onChangeInputMax} type='number' />
          </div>
          <div class='inputFiltro'>
            <label>Buscar Produtos</label>
            <input valueText={this.state.InputValueText}
              onChange={this.onChangeInputText}
              type="text"
              name="busca" />
          </div>

        </div>


      </div >
    );
  }
}