const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        // Cerrar todos los demás
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.classList.remove('active');
                otherHeader.nextElementSibling.style.maxHeight = 0;
            }
        });
      
        header.classList.toggle('active');
        const content = header.nextElementSibling;
        if (header.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = 0;
        }
    });
});