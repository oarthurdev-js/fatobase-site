// Número de WhatsApp (só dígitos, com 55 + DDD). Vazio = botões levam para a seção de contato.
const WHATSAPP = "";
const MENSAGEM = "Oi! Vi o site do Fato Base e quero montar meu canal de notícias.";

if (WHATSAPP) {
  const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MENSAGEM)}`;
  document.querySelectorAll(".js-contato").forEach((a) => {
    a.href = link;
    a.target = "_blank";
    a.rel = "noopener";
  });
}

document.getElementById("ano").textContent = new Date().getFullYear();
