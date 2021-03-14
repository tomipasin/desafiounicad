import React, { Component } from 'react';
import { Input, Button } from 'reactstrap';
import axios from "axios";
import Nav from './Nav';



class CriaEntrega extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeEntrega = this.onChangeEntrega.bind(this);
    this.onChangeOrigem = this.onChangeOrigem.bind(this);
    this.onChangeDestino = this.onChangeDestino.bind(this);

    this.state = {
      nome: "",
      entrega: "",
      origem: "",
      destino: ""
    }
  }

  onChangeNome = (e) => {
    const nome = e.target.value;
    console.log(this.state.nome)
    this.setState({ nome: nome });
  };
  onChangeEntrega = (e) => {
    const entrega = e.target.value;
    console.log(this.state.entrega)
    this.setState({ entrega: entrega });
  };
  onChangeOrigem = (e) => {
    const origem = e.target.value;
    console.log(this.state.origem)
    this.setState({ origem: origem });
  };
  onChangeDestino = (e) => {
    const destino = e.target.value;
    console.log(this.state.destino)
    this.setState({ destino: destino });
  };

  handleRegister = (e) => {
    e.preventDefault();
    console.log(this.state.nome, this.state.entrega, this.state.origem, this.state.destino)

    const userObject = {
      "nome": this.state.name,
      "entrega": this.state.entrega,
      "origem": this.state.origem,
      "destino": this.state.destino
    };
    console.log(userObject)

    axios.post('https://murmuring-shore-51053.herokuapp.com/contatos/', userObject)
      .then((res) => {
        console.log(res.data)
      }).catch((error) => {
        console.log(error)
      });

    this.setState({
      nome: "",
      entrega: "",
      origem: "",
      destino: ""
    })
  }


  render() {
    return (
      <div className='container'>
        <Nav />
        <div>
          <Input
            placeholder="nome"
            type="text"
            name="nome"
            value={this.state.nome}
            onChange={this.onChangeNome}
          />

          <Input
            placeholder="entrega"
            type="text"
            name="entrega"
            value={this.state.entrega}
            onChange={this.onChangeEntrega}
          />

          <Input
            placeholder="origem"
            type="text"
            name="origem"
            value={this.state.origem}
            onChange={this.onChangeOrigem}
          />

          <Input
            placeholder="destino"
            type="text"
            name="destino"
            value={this.state.destino}
            onChange={this.onChangeDestino}
          />

          <Button color="primary" onClick={this.handleRegister}>Registrar</Button>
        </div>
      </div>
    );
  }
}

export default CriaEntrega;