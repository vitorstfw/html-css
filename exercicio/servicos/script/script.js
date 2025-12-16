const prestadores = [
    {
        nome: "João Silva",
        servico: "Desenvolvimento Web",
        cidade: "taubaté",
        preco:" R$ 80/h"
    }, 
    {
        nome: "Maria Oliveira",
        servico: "Encanador",
        cidade: "caçapava",
        preco:" R$ 90/h"
    },
    {
        nome: "Carlos Souza",
        servico: "Eletricista",
        cidade: "pindamonhangaba",
        preco:" R$ 85/h"
    }
];
const lista = document.getElementById("lista-servicos");
const search = document.getElementById("search");

function mostrarprestadores(filtro = ""){
lista.innerHTML = "";

prestadores
.filter(p =>
p.servico.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
)
.forEach(p => {
lista.innerHTML += `
  <div class="card">
    <h3>${p.nome}</h3>
    <p><strong>Serviço:</strong> ${p.servico}</p>
    <p><strong>Cidade:</strong> ${p.cidade}</p>
    <p><strong>Preço:</strong> ${p.preco}</p>
  </div>
  `;
 }); 
}

search.addEventListener("input", () => {
 mostrarprestadores(search.value);
});

mostrarprestadores();