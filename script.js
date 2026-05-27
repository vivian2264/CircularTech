function mostrarMensagem() {
  alert('Bem-vindo à CircularTech! 🌱');
}

function animarNumero(id, valorFinal, tempo) {

  let numero = 0;

  const incremento =
    valorFinal / (tempo / 30);

  const elemento =
    document.getElementById(id);

  const intervalo = setInterval(() => {

    numero += incremento;

    if (numero >= valorFinal) {

      numero = valorFinal;

      clearInterval(intervalo);
    }

    elemento.innerHTML =
      Math.floor(numero);

  }, 30);
}

window.onload = () => {

  animarNumero(
    'residuos',
    2500,
    2000
  );

  animarNumero(
    'empresas',
    320,
    2000
  );

  animarNumero(
    'economia',
    150000,
    2500
  );

};