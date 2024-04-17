const validEmail = require('./email');

test('Validar correo electrónico válido', () => {
  expect(validEmail("ledysy.torresr@unac.edu.co")).toBe("ledysy.torresr@unac.edu.co");
  expect(validEmail("yurayny12@gmail.com")).toBe("yurayny12@gmail.com");
});

test('Validar correo electrónico inválido', () => {
  expect(validEmail("correoInvalido@")).not.toBe("correoValido@gmail.com");
});