document.addEventListener("DOMContentLoaded", function() {
  // Saudação conforme horário
  const hour = new Date().getHours();
  let timeKey = 'morning';
  if (hour >= 12 && hour < 18) {
    timeKey = 'afternoon';
  } else if (hour >= 18 || hour < 5) {
    timeKey = 'night';
  }

  // Dicionário de traduções com placeholders e botões
  const translations = {
    pt: {
      welcome: "<b>Bem-vindo(a)</b>, tenha ",
      morning: "um bom dia.",
      afternoon: "uma boa tarde.",
      night: "uma boa noite.",
      manual: "Inserir<br>Dados<br>Manualmente",
      photo: "Enviar Foto",
      manual_value_placeholder: "Valor da moeda",
      manual_type_placeholder: "Tipo (ex: pesos, cents, real)",
      manual_year_placeholder: "Ano: (ex: 1500)",
      manual_submit: "Enviar",
      manual_close: "Fechar",
      manual_success: "Dados enviados com sucesso!",
      manual_value_error: "O valor da moeda deve ser maior que 1500 ou igual a 1500."
    },
    en: {
      welcome: "<b>Welcome</b>, have a ",
      morning: "good morning.",
      afternoon: "good afternoon.",
      night: "good evening.",
      manual: "Enter<br>Data<br>Manually",
      photo: "Send Photo",
      manual_value_placeholder: "Coin value",
      manual_type_placeholder: "Type (e.g.: pesos, cents, real)",
      manual_year_placeholder: "Year: (e.g.: 1500)",
      manual_submit: "Send",
      manual_close: "Close",
      manual_success: "Data sent successfully!",
      manual_value_error: "Coin value must be greater than 1500 or equal to 1500."
    },
    es: {
      welcome: "<b>Bienvenido(a)</b>, que tenga ",
      morning: "un buen día.",
      afternoon: "una buena tarde.",
      night: "una buena noche.",
      manual: "Ingresar<br>Datos<br>Manualmente",
      photo: "Enviar Foto",
      manual_value_placeholder: "Valor de la moneda",
      manual_type_placeholder: "Tipo (ej: pesos, cents, real)",
      manual_year_placeholder: "Año: (ej: 1500)",
      manual_submit: "Enviar",
      manual_close: "Cerrar",
      manual_success: "¡Datos enviados con éxito!",
      manual_value_error: "El valor de la moneda debe ser mayor que 1500 o igual a 1500."
    },
    de: {
      welcome: "<b>Willkommen</b>, einen ",
      morning: "schönen Tag noch.",
      afternoon: "schönen Nachmittag.",
      night: "schönen Abend.",
      manual: "Daten<br>manuell<br>eingeben",
      photo: "Foto senden",
      manual_value_placeholder: "Münzwert",
      manual_type_placeholder: "Münztyp (z.B.: Peso, Cent, Real)",
      manual_year_placeholder: "Jahr (z.B.: 1500)",
      manual_submit: "Senden",
      manual_close: "Schließen",
      manual_success: "Daten erfolgreich gesendet!",
      manual_value_error: "Der Münzwert muss größer als null sein."
    }
  };

  // Detecta idioma do navegador
  let lang = navigator.language.slice(0,2);
  if (!['pt','en','es','de'].includes(lang)) lang = 'en'; // padrão inglês

  // Monta a saudação dinâmica traduzida
  document.getElementById('welcome-message').innerHTML =
    translations[lang].welcome + translations[lang][timeKey];

  // Traduz botões
  document.getElementById('manual-btn').innerHTML = translations[lang].manual;
  document.getElementById('photo-btn').innerHTML = translations[lang].photo;

  // Exporta para uso global em main.js
  window.translations = translations;
  window.lang = lang;
});