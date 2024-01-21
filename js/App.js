const photographer = fetch(/data/photographer.json);
try {
    const response = await fetch('/data/photographer.json');
    const photographer = await response.json();
    // Utilisez l'objet photographer ici
    console.log(photographer);


    
} catch (error) {
    // Gérez les erreurs
    console.error(error);
}


