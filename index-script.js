const destinations = [
    { name: "Mountain Hiking Tour", location: "", image: "images/img1.jpg", link: "#" },
    { name: "Machu Picchu, Peru", location: "Machu Picchu, Peru", image: "images/img2.jpg", link: "#" },
    { name: "The Grand Canyon, Arizona", location: "The Grand Canyon, Arizona", image: "images/img3.jpg", link: "#" },
    { name: "Mountain Bromo", location: "Mountain Bromo", image: "images/img4.jpg", link: "#" },
    { name: "Serayu Rafting", location: "Serayu Rafting", image: "images/img5.jpg", link: "#" },
    { name: "Curug Hiji Camp", location: "Curug Hiji Camp", image: "images/img6.jpg", link: "#" },
    { name: "Bintang Hill", location: "Bintang Hill", image: "images/img7.jpg", link: "#" },
    { name: "Statue of Liberty", location: "Statue of Liberty", image: "images/img8.jpg", link: "#" },
    { name: "Taj Mahal", location: "Agra, India", image: "images/taj_mahal.jpg", link: "Destination.html" }
];

const categories = [
    { name: "Beach", image: "images/beach.jpg" },
    { name: "Desert", image: "images/desert.jpg" },
    { name: "Mountain", image: "images/mountain.jpg" },
    { name: "Temple", image: "images/temple.jpg" },
    { name: "Tower", image: "images/tower.jpg" },
    { name: "Pyramid", image: "images/pyramid.jpg" }
];

function loadCategories() {
    let container = document.querySelector('.categories-content');
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.overflowX = 'auto';
    container.style.scrollBehavior = 'smooth';

    categories.forEach(cat => {
        let div = document.createElement('div');
        div.classList.add('row');
        div.setAttribute("data-category", cat.name); // ✅ Add data-category attribute

        div.innerHTML = `
            <a href="search-results.html?query=${encodeURIComponent(cat.name)}" class="category-link">
                <div class="row-img">
                    <img src="${cat.image}" alt="${cat.name}">
                </div>
                <h4>${cat.name}</h4>
            </a>
        `;

        container.appendChild(div);
    });
}

function loadDestinations() {
    let container = document.querySelector('.destination-content');
    container.innerHTML = '';

    destinations.forEach(dest => {
        let box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
            <a href="destination-results.html?destination=${encodeURIComponent(dest.name)}">
                <img src="${dest.image}" alt="${dest.name}">
                <h4>${dest.name}</h4>
                <h6>${dest.location}</h6>
                <div class="row">
                    <p><b>$99</b>/person</p>
                    <a href="${dest.link}" class="button">View Details</a>
                </div>
            </a>
        `;
        container.appendChild(box);
    });
}



document.addEventListener('DOMContentLoaded', () => {
    loadDestinations();
    loadCategories();
});















