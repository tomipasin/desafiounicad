# Desafio UNICAD
A proposta do desafio é criar uma versão simplificada de um app de entregas com duas das suas funções: criar registro de entregas e exibir uma rota no mapa para cada uma delas, ao ser solicitado. Tudo está com deploy feito no Heroku.

#### Demo: <a href="https://testeunicadtomipasin.herokuapp.com/">https://testeunicadtomipasin.herokuapp.com/</a>

#### Back end: <a href="https://github.com/tomipasin/unicadbe">https://github.com/tomipasin/unicadbe</a>


## Como fiz?
Usei um back end em NodeJS com express gerenciando a criação e leitura dos registros, que foram feitos em uma instancia do Mongo DB Atlas. 
No front end usei ReactJS com Axios consumindo a API do Google Maps, tanto para o mapa quanto para as rotas (Directions API). 

## Como funciona?
A página inicial mostra um mapa centralizado em Porto Alegre e dois registros de teste. Em cada um há um botão para criação da rota. Ao clicar é realizada a criação da rota e sua renderiação no mapa. 
Na barra de navegação há uma opção para "Cadastrar Entrega" onde um formulário (bem) simples é mostrado. Nele o usuário deve inserir: nome, data da entrega, endereço de orígem e endereço de destino. Ao clicar no botão um registro é criado no banco de dados e ao retornar à página inicial ele deve ser exibido, sendo possível gerar sua rota.

## O que faltou e não foi feito por falta de tempo?
* Implementar melhorias na usabilidade como a possibilidade de atualizar ou deletar um registro por meio de botões na tabela. Hoje isso só pode ser feito por ação direta no DB.
* Implementar um cadastro com validação dos dados nos campos, por exemplo, campo de data aceitar somente o formato de data, etc.
* Implementar a abertura do mapa em uma nova aba/janela do navegador ou por um pop over ao solicitar a rota.
* Melhorias no CSS.

Infelizmente não consegui alocar tempo necessário para implementar estas alterações entretanto meu objetivo foi, dentro do espaço de tempo que eu dispunha, entregar um app com as funcionalidades solicitadas no PDF do desafio. 

Agradeço a oportunidade de ter participado deste desafio e espero que meu teste contemple as suas expectativas. 

Qualquer dúvida é só me chamar pelo @tomipasin no Telegram ou pelo tomipasin@gmail.com.
