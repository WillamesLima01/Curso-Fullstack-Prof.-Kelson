let display = document.getElementById('display');

document.addEventListener('DOMContentLoaded', function () {
    // Essa função é chamada quando o DOM (Document Object Model) está completamente carregado
    display.value = '0'; // Define o valor inicial do display como '0'
});

function appendToDisplay(value) {

    if (display.value === '0') {
        display.value = '';
    }
    display.value += value;
}

function clearDisplay() {
    display.value = 0;
}

function calculate() {
    try {
        const expression = display.value.trim(); // Remova espaços em branco no início e no final
        if (expression === '') {
            display.value = 0; // Se nenhum número for digitado, não exiba nada
            return;
        }
       
        const result = eval(expression);

        if (isNaN(result) || !isFinite(result)) {            
            display.style.fontSize = '20px';
            display.value = 'Impossível dividir por 0'; // Se a expressão resultar em NaN ou infinito (divisão por zero), exiba 'Impossível'

            setTimeout(() => {
                display.value = '';
                display.style.fontSize = '40px'; // Restaura o tamanho da fonte para 40px após limpar
            }, 2000); // Limpa o display após 2 segundos (ajuste conforme necessário)

        } else {
            display.value = `${result}`;
            display.style.fontSize = '40px';
        }
    } catch (error) {
        display.value = 'Error';
    }
}