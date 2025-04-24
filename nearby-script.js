document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const placeName = urlParams.get("name") || "Unknown Place";
    const placeImage = urlParams.get("image") || "images/default.jpg";
    const placeAddress = urlParams.get("address") || "Address not available";
    const placeRating = urlParams.get("rating") || "No rating available";

    // Update Page Elements
    document.getElementById("place-name").textContent = placeName;
    document.getElementById("place-image").src = placeImage;
    document.getElementById("place-address").textContent = placeAddress;
    document.getElementById("place-rating").textContent = placeRating;
    document.getElementById("destination-header").style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(${placeImage})`;

    // Load Google Map if address is available
    if (placeAddress !== "Address not available") {
        setTimeout(loadGoogleMap, 1000);
    }
});


function displayPlaces(category, places) {
    
    const container = document.getElementById("nearby-places");

    // Check if a section for this category already exists
    let existingSection = document.querySelector(`.info-section[data-category="${category}"]`);

    if (!existingSection) {
        // Create a new section if it doesn't exist
        existingSection = document.createElement("div");
        existingSection.classList.add("info-section");
        existingSection.setAttribute("data-category", category);

        const sectionHeader = document.createElement("h3");
        sectionHeader.textContent = categoryNames[category];

        const placesContainer = document.createElement("div");
        placesContainer.classList.add("places-container");

        existingSection.appendChild(sectionHeader);
        existingSection.appendChild(placesContainer);
        container.appendChild(existingSection);
    }

    const placesContainer = existingSection.querySelector(".places-container");

    // Clear previous places before adding new ones
    placesContainer.innerHTML = "";

    places.slice(0, 50).forEach(place => {
        const placeName = place.name || "Unknown Name";
        const placeAddress = place.vicinity || "Address not available";
        const placeRating = place.rating ? `⭐ ${place.rating}/5` : "No rating available";

        let placeImage = "images/default.jpg";
        if (place.photos && place.photos.length > 0) {
            placeImage = place.photos[0].getUrl({ maxWidth: 400 });
        }

        // Create Place Card
        const placeCard = document.createElement("div");
        placeCard.classList.add("place-card");
        placeCard.innerHTML = `
            <img src="${placeImage}" alt="${placeName}" class="place-img" onerror="this.onerror=null; this.src='images/default.jpg';">
            <div class="place-info">
                <strong>${placeName}</strong>
                <p>📍 ${placeAddress}</p>
                <p>${placeRating}</p>
            </div>
        `;

        // Add click event to open a new page
        placeCard.addEventListener("click", () => {
            const queryParams = new URLSearchParams({
                name: placeName,
                image: placeImage,
                address: placeAddress,
                rating: placeRating
            });
            window.open(`nearby-place.html?${queryParams.toString()}`, "_blank");
        });

        placesContainer.appendChild(placeCard);
    });
}
