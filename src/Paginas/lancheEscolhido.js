import React, { Component } from 'react';
import axios from 'axios';
import './lancheEscolhido.scss';

class lancheEscolhido extends Component {

    state ={
        lanche: {nome: ''},
        listaIngredientes: [],
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
        } else {
            this.setState({
                lanche: {nome: 'Personalizado'}
            })
        }
        axios.get('http://localhost:8080/Ingredientes')
            .then((retorno) => {
                this.setState({
                    listaIngredientes: retorno.data
                })
            })
    }

    adicionarAoCarrinho = () => {
        axios.post('http://localhost:8080/Pedido', {
            ingredientes: this.state.lanche.ingredientes
        }).then((retorno) => {
            this.setState({
                preco: retorno.data
            })
        })
    }

    removerIngrediente = (id) => {
        let ingredientes = this.state.lanche.ingredientes;
        let posicaoIngrediente = ingredientes.findIndex(ingrediente => ingrediente === id);

        ingredientes = ingredientes.filter((ingrediente, indice) => {
            return indice !== posicaoIngrediente;
        });

        this.setState({
            preco: null,
            lanche: {
                ...this.state.lanche,
                ingredientes
            }
        })

    }

    acrescentarIngrediente = (id) => {
        let ingredientes = this.state.lanche.ingredientes ? this.state.lanche.ingredientes : [];

        ingredientes.push(id);

        this.setState({
            preco: null,
            lanche: {
                ...this.state.lanche,
                ingredientes
            }
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
                        {this.state.listaIngredientes.map(ingrediente => (
                                <div className="ingrediente">
                                    { this.state.lanche.ingredientes && this.state.lanche.ingredientes.includes(ingrediente.id) &&
                                        <div className="remover" onClick={() => this.removerIngrediente(ingrediente.id)}> - </div>
                                    }
                                    <div className="nomeIngrediente">
                                        {ingrediente.nome}
                                    </div>
                                    <div className="acrescentar" onClick={() => this.acrescentarIngrediente(ingrediente.id)}> + </div>
                                </div>
                            ))}
                    </div>
                    {!this.state.preco ?
                        <div className="botaoCalcularPreco" onClick={() => this.adicionarAoCarrinho()}>
                            Calcular Preço
                        </div>
                        :
                        <div className="botaoCalcularPreco">
                            <div>R$ {this.state.preco}</div>
                            Adicionar ao Carrinho
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default lancheEscolhido;