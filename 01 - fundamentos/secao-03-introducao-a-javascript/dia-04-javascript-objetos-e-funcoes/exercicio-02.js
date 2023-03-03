let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

function customerInfo(order) {
  let motoBoy = order.order.delivery.deliveryPerson;
  let nameClient = order.name;
  let phoneClient = order.phoneNumber;
  let clientAddressStreet = order.address.street;
  let clientAddressNumber = order.address.number;
  let clientAddressApartment = order.address.apartment
  console.log('ola, '+ motoBoy + ' entrega para: '+ nameClient+ ', '+ 'Telefone: '+ phoneClient+ ', '+ 'R. '+clientAddressStreet+', '+'Nº: '+clientAddressNumber+', AP: '+ clientAddressApartment );
  
}
customerInfo(order);

function orderModifier(order) {
  let nameClient = order.name = 'Luiz Silva' ;
  let valueTotal = order.payment.total = '50';
  let flavor = Object.keys(order.order.pizza); 
  let drink = order.order.drinks.coke.type;


  console.log('olá, '+ nameClient+', o valor total de seu pedido de ' + flavor[0]+', '+flavor[1]+ ' e '+drink+' é R$ '+ valueTotal+'.' );
  
};

orderModifier(order);