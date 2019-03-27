import React, { Component } from 'react';
import axios from 'axios';
import './lancheEscolhido.scss';

class lancheEscolhido extends Component {

    state ={
        lanche: {nome: ''},
        ingredientes: []
    }

    componentWillMount() {
        if(this.props.idLanche){
            let url = `http://localhost:8080/Cardapio/${this.props.idLanche}`;
            axios.get(url)
                .then((retorno) => {
                    this.setState({
                        lanche: retorno.data
                    })
                })
        } else {
            this.setState({
                lanche: {nome: 'Personalizado'}
            })
        }
        axios.get('http://localhost:8080/Ingredientes')
            .then((retorno) => {
                this.setState({
                    ingredientes: retorno.data
                })
            })
    }


    render() {
        return (
            <div className="lanche">
                <div className="botaoCardapio" onClick={() => this.props.trocaPagina('CARDAPIO')}>
                    Cardapio
                </div>
                <div className="imagemLanche">
                    <div className="paoCima"/>
                    <div className="bacon"/>
                    <div className="ovo"/>
                    <div className="queijo"/>
                    <div className="hamburguer"/>
                    <div className="alface"/>
                    <div className="paoBaixo"/>
                </div>
                <div className="informacoesLanche">
                    <div className="nomeLanche">
                        {this.state.lanche.nome}
                    </div>
                    <div className="listaIngredientes">
                        {this.state.ingredientes.map(ingrediente => (
                                <div className="ingrediente">
                                    <div className="remover"> - </div>
                                    <div className="nomeIngrediente">
                                        {ingrediente.nome}
                                    </div>
                                    <div className="acrescentar"> + </div>
                                </div>
                            ))}
                    </div>
                    <div className="botaoCalcularPreco" >
                        Calcular Preco
                    </div>
                </div>
            </div>
        );
    }
}

export default lancheEscolhido;