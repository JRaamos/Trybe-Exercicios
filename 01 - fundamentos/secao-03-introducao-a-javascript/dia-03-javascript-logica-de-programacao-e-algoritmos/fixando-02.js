let clientesTrybeBank = ['Ada', 'John', 'Gus'];



function addNewClient (client){
  if (typeof client === 'string'){
    clientesTrybeBank.push(client)
    return 'ola ' +client +' client add success'

  } else {
    return client + ' não é uma string'
  }
}
addNewClient(8);

console.log(clientesTrybeBank);