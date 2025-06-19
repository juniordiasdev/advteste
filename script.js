// Script para Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        // Fecha outros itens abertos
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.display = 'none';
            }
        });

        // Alterna o display do item clicado
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
