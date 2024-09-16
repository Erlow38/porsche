// Fonction pour afficher le popup à la bonne position
function showPopup(markerId, text, event) {
    const popup = document.getElementById('popup');
    const popupText = document.getElementById('popup-text');
    
    // Récupère les dimensions et la position de la carte
    const container = document.querySelector('.card-image-container');
    const containerRect = container.getBoundingClientRect();
    
    // Met à jour le texte du popup
    popupText.textContent = text;

    // Calcul de la position du popup par rapport au conteneur
    const x = event.clientX - containerRect.left;
    const y = event.clientY - containerRect.top;

    // Positionne le popup
    popup.style.left = `${x}px`;
    popup.style.top = `${y}px`;
    popup.style.display = 'block'; // Affiche le popup
}

// Cacher le popup quand on clique en dehors
document.addEventListener('click', function(event) {
    const popup = document.getElementById('popup');
    if (!event.target.closest('svg')) {
        popup.style.display = 'none';
    }
});

// Ajout des événements de clic pour chaque marqueur
document.getElementById('wheel-marker').addEventListener('click', function(event) {
    event.stopPropagation(); // Empêche de cacher le popup immédiatement
    showPopup('wheel-marker', 'Light alloy wheels with optimized aerodynamics.', event);
});

document.getElementById('battery-marker').addEventListener('click', function(event) {
    event.stopPropagation();
    showPopup('battery-marker', 'The battery is housed under the floor of the Taycan and provides a low center of gravity ideal for achieving sporty driving characteristics. The battery box is a supporting element of the body structure: it accommodates the electronic and cooling components and protects them from atmospheric influences.', event);
});

document.getElementById('weight-marker').addEventListener('click', function(event) {
    event.stopPropagation();
    showPopup('weight-marker', "The Taycan's fully galvanized body is made from a combination of materials, mainly aluminum and steel. The strut bracket, axle suspension and rear spar are made of die-cast aluminum. The impact absorber housings are forged aluminum parts. The front spar combines aluminum monocoque construction with extruded profiles. The 1,941 millimeter long sills are executed as seven-chamber extruded profiles. Compared to a steel threshold, this has the effect of reducing the number of pieces from 15 to three per side.", event);
});
