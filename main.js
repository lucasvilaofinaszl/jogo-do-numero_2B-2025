
  const palpites = document.querySelector('palpites');
  const ultimoResultado = document.querySelector('.ultimoResultado');
  const baixoOuAlto = document.querySelector('baixoOualto');
  const envioPalpite = document.querySelector('.envioPalpite');
  const campoPalpite = document.querySelector('.campoPalpite');



  function verificarPalpite() {
    const palpiteUsuario = Number(campoPalpite.value);
    if (contagemPalpites === 1) {
        palpites.textContent = "Palpites anteriores: ";
    }
    palpites.textContent += palpiteUsuario + " ";
    

    if (palpiteUsuario === numero Aleatorio) {
        ultimoResultado.textContent = "Parabens! Voce Acertou!";.
    }