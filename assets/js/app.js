// Criação de um novo observador de interseção
const observador = new IntersectionObserver(
    (entradas) => {
        // Itera sobre as entradas do observador
        entradas.forEach((entrada) => {
            console.log(entrada);
            // Verifica se a entrada está em interseção com o viewport
            if (entrada.isIntersecting) {
                // Adiciona a classe "visivel" ao elemento alvo da entrada
                entrada.target.classList.add("visivel");
            }
        });
    },
    {
        threshold: .8,
    }
);

// Seleciona todos os elementos com a classe "escondido"
const elementosEscondidos = document.querySelectorAll(".escondido");
// Itera sobre os elementos escondidos e observa cada um deles
elementosEscondidos.forEach((el) => observador.observe(el));

// Seleciona todos os links com a classe "menu__link"
const links = document.querySelectorAll(".menu__link");

// Itera sobre os links
links.forEach((link) => {
    // Adiciona um ouvinte de evento de clique a cada link
    link.addEventListener("click", (event) => {
        // Impede o comportamento padrão de clicar em um link
        event.preventDefault();

        // Obtém o ID do alvo a partir do atributo "href" do link
        const targetId = link.getAttribute("href");

        // Seleciona o elemento alvo com base no ID obtido
        const targetElement = document.querySelector(targetId);

        // Faz com que o elemento alvo role suavemente para a visualização
        targetElement.scrollIntoView({
            behavior: "smooth",
        });
    });
});
