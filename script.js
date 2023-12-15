// Função para alterar a cor do título em um loop
function alterarCorTitulo() {
    var titulo = document.getElementById("titulo");
    var cores = ["#b84d4d", "#008080", "#4d4db8"]; // Adicione mais cores conforme necessário
    var index = 0;

    setInterval(function () {
        titulo.style.color = cores[index];
        index = (index + 1) % cores.length;
    }, 1000); // Altera a cor a cada 1000 milissegundos (1 segundo)
}

// Chama a função quando a página carrega
window.onload = function () {
    alterarCorTitulo();
};
