const { encode, decode } = require('../script');

describe('Funções encode e decode', () => {
  it('Teste se encode e decode são funções', () => {
    expect(typeof encode).toBe("function");
    expect(typeof decode).toBe("function");
  });
  it('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('a, e, i, o, u')).toBe("1, 2, 3, 4, 5");
  });
  it('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente;', () => {
    expect(decode('1, 2, 3, 4, 5')).toBe('a, e, i, o, u');
  });
  it('As demais letras/números não são convertidos para cada caso', () => {
    expect(encode('a')).toBe('1')
    expect(encode('e')).toBe('2')
    expect(encode('i')).toBe('3')
    expect(encode('o')).toBe('4')
    expect(encode('u')).toBe('5')
    expect(decode('1')).toBe('a')
    expect(decode('2')).toBe('e')
    expect(decode('3')).toBe('i')
    expect(decode('4')).toBe('o')
    expect(decode('5')).toBe('u')
  })
  it('A string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('a, e, i, o, u')).toHaveLength(13)
  })
});