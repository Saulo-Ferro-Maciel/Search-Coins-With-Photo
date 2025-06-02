document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function() {
  const manualBtn = document.getElementById('manual-btn');
  const buttonGroup = document.querySelector('.button-group');
  
  manualBtn.addEventListener('click', function() {
    // Anima os botões para sair para a esquerda
    buttonGroup.classList.add('animate__animated', 'animate__fadeOutLeft');

    // Remove manual-div se já existir
    const oldManualDiv = document.getElementById('manual-div');
    if (oldManualDiv) oldManualDiv.remove();

    // Pega traduções do idioma atual
    const t = window.translations[window.lang];

    // Cria a div manual
    const manualDiv = document.createElement('div');
    manualDiv.id = 'manual-div';
    manualDiv.className = 'manual-div animate__animated animate__fadeInRight';
    manualDiv.innerHTML = `
      <h2 style="margin-bottom:1rem;">${manualBtn.innerText.replace(/\n/g, ' ')}</h2>
      <form id="manual-form" style="display:flex;flex-direction:column;align-items:center;gap:1rem;">
        <input type="number" min="1" required placeholder="${t.manual_value_placeholder}" style="padding:10px;width:80%;" id="coin-value">
        <input type="text" required placeholder="${t.manual_type_placeholder}" style="padding:10px;width:80%;" id="coin-type">
        <input type="number" min="1500" required placeholder="${t.manual_year_placeholder}" style="padding:10px;width:80%;" id="coin-year">
        <button type="submit" style="padding:10px 20px;">${t.manual_submit}</button>
      </form>
      <button id="close-manual" style="padding:10px 20px;margin-top:1rem;">${t.manual_close}</button>
    `;
    manualDiv.style.margin = "40px auto 0 auto";
    document.querySelector('main').appendChild(manualDiv);

    // Evento para fechar a div manual
    document.getElementById('close-manual').onclick = function() {
      // Sai para a direita
      manualDiv.classList.remove('animate__fadeInRight');
      manualDiv.classList.add('animate__fadeOutRight');
      // Botões entram pela direita após a saída da div manual
      setTimeout(() => {
        manualDiv.remove();
        buttonGroup.classList.remove('animate__fadeOutLeft');
        buttonGroup.classList.add('animate__fadeInLeft');
        // Limpa as animações após a entrada dos botões
        setTimeout(() => {
          buttonGroup.classList.remove('animate__animated', 'animate__fadeInRight');
        }, 600);
      }, 500);
    };

    // Validação do formulário
    document.getElementById('manual-form').onsubmit = function(e) {
      e.preventDefault();
      const value = document.getElementById('coin-value').value;
      if (parseInt(value, 10) <= 0) {
        alert(t.manual_value_placeholder + ' deve ser maior que zero.');
        return false;
      }
      alert('Dados enviados com sucesso!');
      document.getElementById('close-manual').click();
    };
  });
}); 