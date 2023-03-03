let clientesTrybeBank = ['Ada', 'John', 'Gus'];

  function removeClient (client){
    if(typeof client === 'string'){
      let customerFound = false;
      for (index = 0; index < clientesTrybeBank.length; index += 1){
        if(client === clientesTrybeBank[index]){
        clientesTrybeBank.splice(index, 1)
        customerFound= true;
        return 'Client remove sucessfully'
      }
    }
  if(customerFound === false){
    console.log('customer not found ');
    }
  } else{
    console.log('O parâmetro passado deve ser do tipo "string"');
  }
}
removeClient(8)
console.log(clientesTrybeBank);
