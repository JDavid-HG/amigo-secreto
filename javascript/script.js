document.addEventListener("DOMContentLoaded", () => {
    // Mensaje de bienvenida dinámico
    const titulo = document.querySelector(".presentacion__contenido__titulo");
    const usuario = "Josuè Hernàndez";
    titulo.innerHTML = `¡Bienvenido, ${usuario}! <strong class="titulo-destaque">Seré un Front-end de calidad!</strong>`;

    // Efecto de hover en enlaces
    const enlaces = document.querySelectorAll(".presentacion__enlaces__link");
    enlaces.forEach(enlace => {
        enlace.addEventListener("mouseenter", () => {
            enlace.style.color = "#007BFF";
            enlace.style.transform = "scale(1.1)";
        });
        enlace.addEventListener("mouseleave", () => {
            enlace.style.color = "black";
            enlace.style.transform = "scale(1)";
        });
    });

    // Mostrar la fecha actual en el footer
    const footer = document.querySelector(".footer p");
    const year = new Date().getFullYear();
    footer.textContent = `Desarrollado por DAVID GODOY - ${year}`;
});
