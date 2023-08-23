document.addEventListener("DOMContentLoaded", function() {
    const calcularButton = document.getElementById("calcular");
    const resultadoElement = document.getElementById("resultado");
    const notasInput = document.getElementById("notas");
    const notasContainer = document.getElementById("notas-container");

    calcularButton.addEventListener("click", function() {
        const notaInputs = document.querySelectorAll(".nota-input");
        const notas = Array.from(notaInputs).map(input => parseFloat(input.value));
        
        const somaNotas = notas.reduce((total, nota) => total + nota, 0);
        const media = somaNotas / notas.length;

        resultadoElement.textContent = `Média: ${media.toFixed(2)}`;
    });

    notasInput.addEventListener("input", function() {
        const numNotas = parseInt(notasInput.value);

        notasContainer.innerHTML = "";
        for (let i = 1; i <= numNotas; i++) {
            const input = document.createElement("input");
            input.type = "number";
            input.step = "0.01";
            input.placeholder = `Nota ${i}`;
            input.className = "nota-input";
            notasContainer.appendChild(input);
        }
    });
});
