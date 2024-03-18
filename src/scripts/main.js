
//document.addEventListener('DOMContentLoaded', function   (){
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt (numeroMaximo);

        let numeroAleatorio = Math.random() * numeroMaximo;
        numeroAleatorio =  Math.floor(numeroAleatorio + 1);

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';

    })
//})

document.addEventListener('DOMContentLoaded', function () {
    let numerosSorteados = [];

    document.getElementById('form-sorteador').addEventListener('submit', function (evento) {
        evento.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let numeroAleatorio;
        do {
            numeroAleatorio = Math.floor(Math.random() * numeroMaximo) + 1;
        } while (numerosSorteados.includes(numeroAleatorio));

        numerosSorteados.push(numeroAleatorio);

        if (numerosSorteados.length === 60) {
            alert('Foram sorteados 60 números. A tela será limpa.');
            limparTela();
            return;
        }

        document.getElementById('resultado-valor').innerText = numeroAleatorio;
        document.querySelector('.resultado').style.display = 'block';

        // Atualiza a lista de números sorteados
        let listaNumerosSorteados = document.getElementById('numeros-sorteados');
        listaNumerosSorteados.innerHTML = '';
        numerosSorteados.forEach(function (numero) {
            let li = document.createElement('li');
            li.textContent = numero;
            listaNumerosSorteados.appendChild(li);
        });
    });

    function limparTela() {
        numerosSorteados = [];
        document.getElementById('resultado-valor').innerText = '';
        document.querySelector('.resultado').style.display = 'none';
        document.getElementById('numeros-sorteados').innerHTML = '';
    }
});