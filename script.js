document.addEventListener('DOMContentLoaded', function() {
    
    const calcularBtn = document.getElementById('calcularBtn');
    const inputArvores = document.getElementById('arvores');
    const resultadoP = document.getElementById('resultado');

    calcularBtn.addEventListener('click', function() {
        
        const quantidade = parseInt(inputArvores.value);

        if (isNaN(quantidade) || quantidade < 0) {
            resultadoP.textContent = "Ops! Digite um número válido para podermos calcular. 😉";
            resultadoP.style.color = "#d32f2f";
            return; 
        }

        if (quantidade === 0) {
            resultadoP.innerHTML = "Tudo bem! Toda grande floresta começa com uma única semente. Que tal combinar com seus amigos ou escola de plantar uma árvore esse ano? 🌱";
            resultadoP.style.color = "#f57c00"; 
        } 
        else if (quantidade > 0 && quantidade <= 5) {
            resultadoP.innerHTML = `Que maravilha! Suas <strong>${quantidade}</strong> árvores já estão fazendo a diferença, dando sombra e purificando o ar para nós. Continue assim! 💚`;
            resultadoP.style.color = "#2e7d32"; 
        } 
        else {
            const co2Absorvido = quantidade * 22;
            resultadoP.innerHTML = `Uau, que impacto incrível! 😍<br>Com <strong>${quantidade}</strong> árvores, você e sua comunidade estão ajudando a retirar cerca de <strong>${co2Absorvido} kg</strong> de CO₂ do ar por ano! O planeta agradece muito pelo seu cuidado! 🌍✨`;
            resultadoP.style.color = "#1b5e20"; 
        }
    });
});