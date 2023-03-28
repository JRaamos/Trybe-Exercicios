const { myFizzBuzz } = require('../script')

describe('A função myFizzBuzz(num) recebe um número num como parâmetro', () => {
  it('Execute a função myFizzBuzz(num), sendo num um número divisível por 3 e 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz")
  })
  it('Caso num seja um número divisível apenas por 3, retorna "fizz"', () => {
    expect(myFizzBuzz(6)).toBe("fizz")
  })
  it('Execute a função myFizzBuzz(num), sendo num um número divisível por 5, e verifique se o retorno é o esperado.', () => {
    expect(myFizzBuzz(10)).toBe("buzz")
})
it('Execute a função myFizzBuzz(num), sendo num um número que não é divisível por 3 ou 5, e verifique se o retorno é o esperado.', () => {
  expect(myFizzBuzz(7)).toBe(7)
})
it('Execute a função myFizzBuzz(num), sendo num um parâmetro que não é um número, e verifique se o retorno é o esperado', () => {
  expect(myFizzBuzz('dois')).toBeFalsy()
})
});