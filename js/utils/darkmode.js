// Check if dark mode is enabled
function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
  
    // Store the dark mode state in localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkModeEnabled', isDarkMode);
}

// Initialize dark mode
function initDarkMode() {
    // Retrieve the dark mode state from localStorage
    const isDarkMode = localStorage.getItem('darkModeEnabled') === 'true';
  
    if (isDarkMode) {
        toggleDarkMode();
    }
}

// Listen for dark mode changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const isDarkMode = e.matches;
    if (isDarkMode) {
        toggleDarkMode();
    }
});

// Call the initDarkMode function to initialize dark mode on page load
initDarkMode();

// Check if dark mode is enabled
function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Utilisation de la fonction isDarkModeEnabled()
if (isDarkModeEnabled()) {
    // Le système est en mode sombre
    // Ajoutez votre code ici pour activer le mode sombre
} else {
    // Le système est en mode clair
    // Ajoutez votre code ici pour activer le mode clair
}
