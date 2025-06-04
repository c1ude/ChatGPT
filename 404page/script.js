// Simple client-side behavior for the 404 page

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('homeBtn');
    if (btn) {
        btn.addEventListener('click', () => {
            window.location.href = '/';
        });
    }
});
