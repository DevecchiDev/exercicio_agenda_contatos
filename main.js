const form = document.getElementById('form-contato');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroContato = document.getElementById('numero-contato');

    let linha = '<tr>';
    linha +=`<td>${inputNomeContato.value}</td>`;
    linha += `<td>${inputNumeroContato.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
});