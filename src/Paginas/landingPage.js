import React, { Component } from 'react';
import './landingPage.scss';

class landingPage extends Component {
    render() {
        return (
            <div className="landingPage">
                <div className="botaoCardapio" onClick={() => this.props.trocaPagina('CARDAPIO')}>
                    Cardápio
                </div>
            </div>
        );
    }
}

export default landingPage;