const validarCorreoElectronico = require('./email');

test('Validar correo electrónico válido', () => {
  expect(validarCorreoElectronico("ledysy.torresr@gmail.com")).toBe(true);
  expect(validarCorreoElectronico("yurayny12@gmail.com")).toBe(true);
});

test('Validar correo electrónico no válido', () => {
  expect(validarCorreoElectronico("correoinvalido@dominio")).toBe(false);
  expect(validarCorreoElectronico("correo@invalido")).toBe(false);
});
