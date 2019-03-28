import React, { Component } from 'react';
import axios from 'axios';
import './lancheEscolhido.scss';

class lancheEscolhido extends Component {

    state ={
        lanche: {nome: '', ingredientes: {}},
        listaIngredientes: {},
        preco: null
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
        }
        axios.get('http://localhost:8080/Ingredientes')
            .then((retorno) => {
                this.setState({
                    listaIngredientes: retorno.data
                })
                if(!this.props.idLanche){
                    this.setState({
                        lanche: {nome: 'Personalizado', ingredientes: retorno.data}
                    })
                }
            })
    }

    adicionarAoCarrinho = () => {
        axios.post('http://localhost:8080/Pedido', {
            lanche: this.state.lanche
        }).then((retorno) => {
            this.setState({
                preco: retorno.data
            })
        })
    }

    removerIngrediente = (id, ingrediente) => {
        this.setState({
            lanche: {
                ...this.state.lanche,
                ingredientes: {
                    ...this.state.lanche.ingredientes,
                    [id]: {
                        ...this.state.lanche.ingredientes[id],
                        quantidade: ingrediente.quantidade - 1
                    }
                }
            },
            preco: null
        })
    }

    acrescentarIngrediente = (id, ingrediente) => {
        this.setState({
            lanche: {
                ...this.state.lanche,
                ingredientes: {
                    ...this.state.lanche.ingredientes,
                    [id]: {
                        ...this.state.lanche.ingredientes[id],
                        quantidade: ingrediente.quantidade + 1
                    }
                }
            },
            preco: null
        })
    }


    render() {
        let ingredientesLanche = this.state.lanche.ingredientes;
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
                        {Object.keys(this.state.lanche.ingredientes).length > 0 && Object.keys(this.state.listaIngredientes).map(ingrediente => (
                                <div className="ingrediente">
                                    <div className={"remover" + (ingredientesLanche[ingrediente].quantidade !== 0 ? '' : ' hidden')} onClick={() => this.removerIngrediente(ingrediente, ingredientesLanche[ingrediente])}> - </div>
                                    <div className="nomeIngrediente">
                                        {ingredientesLanche[ingrediente].nome}
                                    </div>
                                    <div className="contadorQuantidade">{ingredientesLanche[ingrediente].quantidade}</div>
                                    <div className="acrescentar" onClick={() => this.acrescentarIngrediente(ingrediente, ingredientesLanche[ingrediente])}> + </div>
                                </div>
                            ))}
                    </div>
                    {!this.state.preco ?
                        <div className="botaoCalcularPreco" onClick={() => this.adicionarAoCarrinho()}>
                            Calcular Preço
                        </div>
                        :
                        <div className="botaoCalcularPreco" onClick={() => this.props.trocaPagina('PEDIDOREALIZADO')}>
                            <div className={"preco"}>R$ {this.state.preco}</div>
                            Realizar Pedido
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default lancheEscolhido;