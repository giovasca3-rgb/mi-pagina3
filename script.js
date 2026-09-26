// Al cargar la página, ocultamos el contenido principal
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contenido-principal").style.display = "none";
});

// Mostrar la página principal
function ingresarPagina() {
    // Ocultar la portada
    document.getElementById("portada").style.display = "none";

    // Mostrar el contenido principal
    document.getElementById("contenido-principal").style.display = "block";

    // Volver al inicio de la página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

console.log("Página de Cuidado del Recién Nacido cargada correctamente.");