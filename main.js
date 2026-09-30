// Os botões "Quero..." levam ao cadastro do painel, já com o plano escolhido.
const CADASTRO = "https://darkchannel.meprepara.app.br/cadastro";

document.querySelectorAll(".js-contato").forEach((a) => {
  a.href = CADASTRO + (a.dataset.plano ? "?plano=" + encodeURIComponent(a.dataset.plano) : "");
});

document.getElementById("ano").textContent = new Date().getFullYear();
