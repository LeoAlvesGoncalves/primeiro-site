let formulario = document.getElementById("formulario");
let tabela = document.getElementById("tabela");

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    let tecnologia = document.getElementById('fTecnologia').value;
    let aprender = document.getElementById('fAprender').value;
    let revisar = document.getElementById('fRevisar').value;
    let urgente = document.getElementById('fUrgente').value;

    let lista = [tecnologia,aprender,revisar,urgente];

    let linha = document.createElement("tr");

    lista.forEach((dados, index) => {
        let coluna;
        if(index == 0){
            coluna = document.createElement("th");
        } else {
            coluna = document.createElement("td");
        }   
        coluna.textContent = dados;
        linha.appendChild(coluna);
    });
    tabela.appendChild(linha);
});
