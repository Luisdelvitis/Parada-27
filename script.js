function limparFormulario() {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

function preencherFormulario(dados) {
    if (!dados.erro) {
        document.getElementById('rua').value = dados.logradouro;
        document.getElementById('bairro').value = dados.bairro;
        document.getElementById('cidade').value = dados.localidade;
        document.getElementById('estado').value = dados.uf;
    } else {
        alert("CEP não encontrado.");
        limparFormulario();
    }
}

function pesquisarCEP() {
    const cep = document.getElementById('cep').value.replace(/\D/g, '');
    if (cep !== '') {
        const validacep = /^[0-9]{8}$/;
        if (validacep.test(cep)) {
            fetch(`https://viacep.com.br/ws/${cep}/json/`)
                .then(response => response.json())
                .then(data => preencherFormulario(data))
                .catch(error => {
                    alert('Erro ao buscar CEP.');
                    limparFormulario();
                });
        } else {
            alert('Formato de CEP inválido.');
            limparFormulario();
        }
    } else {
        limparFormulario();
    }
}

