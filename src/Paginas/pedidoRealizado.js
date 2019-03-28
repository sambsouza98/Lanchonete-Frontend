import React, { Component } from 'react';
import './pedidoRealizado.scss';

class pedidoRealizado extends Component {

    state = {
        timeout: null
    }

    componentDidMount() {
        this.setState({
            timeout: setTimeout(() => {
                this.props.trocaPagina('INICIO');
            }, 2000)
        })
    }

    componentWillUnmount() {
        clearTimeout(this.state.timeout)
    }

    render() {
        return (
            <div className="Texto">
                Pedido Realizado!
            </div>
        );
    }
}

export default pedidoRealizado;