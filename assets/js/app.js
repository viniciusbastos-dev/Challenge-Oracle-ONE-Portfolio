const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visivel");
        }
    });
});

const elementosEscondidos = document.querySelectorAll(".escondido");
elementosEscondidos.forEach((el) => observador.observe(el));
