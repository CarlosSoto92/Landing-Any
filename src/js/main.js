document.addEventListener('DOMContentLoaded', () => {

    // Inicializar Lucide Icons
    lucide.createIcons();

    // Lógica para el menú móvil
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        const menuIcon = mobileMenuButton.querySelector('i');

        mobileMenuButton.addEventListener('click', () => {
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
            mobileMenu.classList.toggle('hidden');
            
            // Cambiar icono de menú a 'X' y viceversa
            if (mobileMenu.classList.contains('hidden')) {
                menuIcon.setAttribute('data-lucide', 'menu');
            } else {
                menuIcon.setAttribute('data-lucide', 'x');
            }
            lucide.createIcons(); // Re-renderizar el icono
        });

        // Cerrar menú móvil al hacer clic en un enlace
        const mobileLinks = document.querySelectorAll('#mobile-menu .mobile-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
                menuIcon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            });
        });
    }
});
