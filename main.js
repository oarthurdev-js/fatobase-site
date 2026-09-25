// Link de contato dos botões "Quero começar" (Telegram, formulário, e-mail...). Vazio = levam para o preço.
const CONTATO = "";

if (CONTATO) {
  document.querySelectorAll(".js-contato").forEach((a) => {
    a.href = CONTATO;
    if (/^https?:/.test(CONTATO)) {
      a.target = "_blank";
      a.rel = "noopener";
    }
  });
}

document.getElementById("ano").textContent = new Date().getFullYear();
