function cadastrarprestador(event) {
    event.preventDefault();

    const prestador = {
        nome: document.getElementById("nome").value,
        servico: document.getElementById("servico").value,
        cidade: document.getElementById("cidade").value,
        contato: document.getElementById("contato").value
    };

    let prestadores = JSON.parse(localStorage.getItem("prestadores")) || [];

    prestadores.push(prestador);

    localStorage.setItem("prestadores", JSON.stringify(prestadores));

    alert("Prestador cadastrado com sucesso!");

    event.target.reset();

}