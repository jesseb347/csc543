document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('section h2, h3, h4, h5, h6');
    headers.forEach(header => {
        // Initially collapse all sections
        header.setAttribute('aria-expanded', 'false');
        header.nextElementSibling.style.display = 'none';
        
        header.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', String(!isExpanded));
            this.nextElementSibling.style.display = isExpanded ? 'none' : 'block';
        });
    });
});
