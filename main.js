
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
        ultimoResultado.style.backgroundColor = "green";
        baixoOuAlto.textContent = "";
        finalizarJogo();
    } 













    contagemPalpites++;
     campoPalpite.value = "";
     campoPalpite.focus();
  } 

envioPalpite.addEventListener('click', verificarPalpite);

function finalizarJogo() {
 campoPalpite.disabled = true;
  envioPalpite.disabled = true;
  botaoReiniciar = document.createElement('button')
  document.body.appendChild(botaoReiniciar);
  botaoReiniciar.textContent = 'Reiniciar Jogo';
  botaoReiniciar.classList.add('botaoReiniciar');
  document.body.appendChild(botaoReiniciar);
  botaoReiniciar.addEventListener('clik', reiniciarJogo);
    }

function reiniciarJogo() {
  contagemPalpites = 1;
  const paragrafosReiniciar = document.querySelectorAll('.paragrafosResultado p')
  for (const paragrafoReiniciar of paragrafosReiniciar) {
    paragrafosReiniciar.textcontent = "";
  }
    
}

    
