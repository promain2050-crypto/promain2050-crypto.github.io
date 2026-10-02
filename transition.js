document.addEventListener('DOMContentLoaded', () => {
    const overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    document.body.appendChild(overlay);

    setTimeout(() => {
        overlay.classList.remove('active');
    }, 50);

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            const target = link.getAttribute('href');
            if (target && !target.startsWith('#') && !target.startsWith('http')) {
                e.preventDefault();
                overlay.classList.add('active');
                setTimeout(() => {
                    window.location.href = target;
                }, 400);
            }
        });
    });
});