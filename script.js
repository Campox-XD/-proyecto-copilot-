// Función para mostrar secciones de contenido
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Actualizar estado del navbar
    updateNavbar(sectionId);
}

// Función para actualizar el estado del navbar
function updateNavbar(sectionId) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        
        // Verificar si el href coincide con la sección
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        }
    });
}

// Función para volver al inicio suavemente
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mostrar la sección de inicio al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');

    // Agregar event listeners a los botones de navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            const sectionId = href.substring(1); // Remover el #
            showSection(sectionId);
        });
    });

    // Agregar scroll listener para actualizar navbar
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
    });
});

// Función para mejorar la experiencia en dispositivos móviles
function handleMobileMenu() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Cerrar cualquier menú móvil si existe (para extensiones futuras)
            console.log('Navegando a:', this.getAttribute('href'));
        });
    });
}

// Llamar función cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', handleMobileMenu);

// Función para registrar análisis (opcional, para mejoras futuras)
function trackPageView(pageName) {
    console.log('Vista de página:', pageName);
}

// Función para copiar código (si se agrega código copiable)
function copyToClipboard(element) {
    const text = element.innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert('Código copiado al portapapeles');
    }).catch(() => {
        alert('Error al copiar el código');
    });
}

// Mejora: Agregar soporte para navegación con teclas del teclado
document.addEventListener('keydown', function(e) {
    // Presionar 'h' para ir al inicio
    if (e.key === 'h' || e.key === 'H') {
        showSection('home');
    }
    // Presionar '1' para ir al POST 1
    if (e.key === '1') {
        showSection('post1');
    }
    // Presionar '2' para ir al POST 2
    if (e.key === '2') {
        showSection('post2');
    }
    // Presionar '3' para ir al POST 3
    if (e.key === '3') {
        showSection('post3');
    }
});

// Función para detectar tema oscuro del sistema y adaptarse (opcional)
function detectDarkMode() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('Modo oscuro detectado');
        // Aquí se podría aplicar tema oscuro en el futuro
    }
}

// Listener para cambios de preferencia de tema
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addListener(detectDarkMode);
}
