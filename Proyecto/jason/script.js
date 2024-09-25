// Código JavaScript existente
document.addEventListener('DOMContentLoaded', function () {
    // Aquí puedes agregar cualquier funcionalidad JavaScript que ya tenías.
    console.log('La página está lista');
    
    // Ejemplo de código existente: manejar la apertura de un menú desplegable
    const dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('mouseenter', function() {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function() {
        const dropdownContent = this.querySelector('.dropdown-content');
        dropdownContent.style.display = 'none';
    });

 
    const integrantes = document.querySelectorAll('.carrusel-equipo .integrante');
    const prevButton = document.querySelector('.carrusel-btn.anterior');
    const nextButton = document.querySelector('.carrusel-btn.siguiente');
    let currentIndex = 0;

    function mostrarIntegrantes(index) {
        integrantes.forEach((integrante, i) => {
            integrante.classList.remove('activo');
            if (i === index || i === index + 1) {
                integrante.classList.add('activo');
            }
        });
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 2 : integrantes.length - 2;
        mostrarIntegrantes(currentIndex);
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex < integrantes.length - 2) ? currentIndex + 2 : 0;
        mostrarIntegrantes(currentIndex);
    });

    // Inicializar mostrando los dos primeros integrantes
    mostrarIntegrantes(currentIndex);
});
