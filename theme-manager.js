// theme-manager.js - Global Dark Mode & Reading Mode Controller for Infi 2
(function () {
    let currentTheme = localStorage.getItem('site-theme') || 'normal';

    function applyTheme() {
        const existing = document.getElementById('dynamic-theme-style');
        if (existing) existing.remove();

        if (currentTheme !== 'normal') {
            const style = document.createElement('style');
            style.id = 'dynamic-theme-style';
            let css = '';

            if (currentTheme === 'dark') {
                css = `
                    html {
                        filter: invert(0.9) hue-rotate(180deg);
                    }
                    img, video, iframe, aside, pre, .bg-slate-900, .bg-slate-800, .bg-darker, .bg-dark, .no-invert {
                        filter: invert(1) hue-rotate(180deg);
                    }
                `;
            } else if (currentTheme === 'reading') {
                css = `
                    html {
                        filter: sepia(0.5) brightness(0.95);
                    }
                `;
            }

            style.textContent = css;
            document.head.appendChild(style);
        }
        updateThemeIcon();
    }

    function updateThemeIcon() {
        const btn = document.getElementById('theme-toggle-btn');
        if (!btn) return;
        
        let iconHtml = '';
        if (currentTheme === 'normal') {
            iconHtml = '☀️';
        } else if (currentTheme === 'dark') {
            iconHtml = '🌙';
        } else {
            iconHtml = '📖';
        }
        btn.innerHTML = iconHtml;
    }

    window.toggleTheme = function() {
        if (currentTheme === 'normal') {
            currentTheme = 'dark';
        } else if (currentTheme === 'dark') {
            currentTheme = 'reading';
        } else {
            currentTheme = 'normal';
        }
        localStorage.setItem('site-theme', currentTheme);
        applyTheme();
    };

    window.addEventListener('storage', function(e) {
        if (e.key === 'site-theme') {
            currentTheme = e.newValue || 'normal';
            applyTheme();
        }
    });

    applyTheme();
    window.addEventListener('DOMContentLoaded', updateThemeIcon);
})();
