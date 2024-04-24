function obtenerEmail(correo) {
    const patron = /^[^@]+@[^@]+\.[^@]+$/;
  return patron.test(correo);
}

module.exports = obtenerEmail;
