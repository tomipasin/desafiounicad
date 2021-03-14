import axios from "axios";

const API_URL = "https://murmuring-shore-51053.herokuapp.com/contatos";

class AuthService {
register = (nome, entrega, origem, destino) => {
  return axios.post(API_URL + {
    nome: nome,
    entrega: entrega,
    origem: origem,
    destino: destino
  }

  );
  
};
}

export default new AuthService();
