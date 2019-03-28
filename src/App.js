import React, { Component } from 'react';
import './App.css';
import landingPage from './Paginas/landingPage';
import cardapio from './Paginas/cardapio';
import lancheEscolhido from './Paginas/lancheEscolhido';
import pedidoRealizado from './Paginas/pedidoRealizado';

const PAGINAS = {
    'INICIO': landingPage,
    'CARDAPIO': cardapio,
    'LANCHESELECIONADO': lancheEscolhido,
    'PEDIDOREALIZADO': pedidoRealizado,
}

class App extends Component {
    state = {
        visao: 'INICIO',
        idLanche: null
    };

    trocaPagina = (visao) => {
        this.setState({
            visao
        })
    }

    selecionaLanche = (idLanche) => {
        this.setState({
            visao: 'LANCHESELECIONADO',
            idLanche
        })
    }

    render() {
        const PaginaAtual = PAGINAS[this.state.visao];

        return (
            <div className="App">
                <PaginaAtual trocaPagina={this.trocaPagina}
                             selecionaLanche={this.selecionaLanche}
                             idLanche={this.state.idLanche}
                />
            </div>
        );
    }
}

export default App;
