import React, { Component } from 'react';
import axios from 'axios';
import './cardapio.scss';

class cardapio extends Component {

    state = {
        lanches: [],
    }

    componentWillMount() {
        axios.get('http://localhost:8080/Cardapio')
            .then((retorno) =>{
                let lanches = retorno.data;
                lanches.push({
                    nome: 'Personalizado',
                    id: null,
                    ingredientes: []
                })
                this.setState({
                  lanches
                });
            })
    }


    render() {
        return (
            <div className="cardapio">
                {this.state.lanches.map(lanche => (
                    <div className="lanches" onClick={() => this.props.selecionaLanche(lanche.id)}>
                        {lanche.nome}
                    </div>
                    ))}
            </div>
        );
    }
}

export default cardapio;