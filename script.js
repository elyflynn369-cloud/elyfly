document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;
    const desktopText = document.getElementById('theme-text-desktop');
    const mobileToggle = document.getElementById('btn-theme-toggle-mobile');
    const desktopToggle = document.getElementById('btn-theme-toggle-desktop');

    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-bs-theme', 'light');
            if (desktopText) desktopText.textContent = '🌙 Dark Mode';
            if (mobileToggle) mobileToggle.textContent = '🌙';
        } else {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            if (desktopText) desktopText.textContent = '☀️ Light Mode';
            if (mobileToggle) mobileToggle.textContent = '☀️';
        }
    }

    if (desktopToggle) {
        desktopToggle.addEventListener('click', toggleTheme);
    }
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', toggleTheme);
    }
});
