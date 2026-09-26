
 document.querySelectorAll('.sidebar-nav a').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                // On smaller screens, collapse nav behavior if needed
                const targetId = this.getAttribute('href');
                if(targetId.startsWith('#')) {
                    e.preventDefault();
                    const targetElement = document.querySelector(targetId);
                    if(targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth'
                        });
                    }
                }
            });
        });

        // <!-- JavaScript to Handle Theme Toggle -->
   
        const toggleButton = document.getElementById('btn-theme-toggle');
        const themeText = document.getElementById('theme-text');
        const htmlElement = document.documentElement;

        toggleButton.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-bs-theme');
            if (currentTheme === 'dark') {
                htmlElement.setAttribute('data-bs-theme', 'light');
                themeText.textContent = '🌙 Dark Mode';
            } else {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                themeText.textContent = '☀️ Light Mode';
            }
        });
