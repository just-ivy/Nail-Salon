let headerToggle = document.querySelector('.header__toggle')
let headerNav = document.querySelector(".header__nav")

headerToggle.onclick = function(){
    headerNav.classList.toggle("header__nav--active")
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname === "/services.html") {
        // Array of services with their ID, name, price, and category
        const services = [
            // { id: 1, name: "Basic Manicure", price: 9000, category: "manicure" },
            // { id: 2, name: "Deluxe Manicure", price: 12000, category: "manicure" },
            // { id: 3, name: "Luxury Deluxe Manicure", price: 15000, category: "manicure" },
            { id: 4, name: "Dry Pedicure", price: 12000, category: "pedicure" },
            { id: 5, name: "Basic Pedicure", price: 15000, category: "pedicure" },
            { id: 6, name: "Deluxe Pedicure", price: 17000, category: "pedicure" },
            { id: 7, name: "Luxury Deluxe Pedicure", price: 20000, category: "pedicure" },
            // { id: 8, name: "Basic Mani/Pedi", price: 20000, category: "combo" },
            // { id: 9, name: "Deluxe Mani/Pedi", price: 23000, category: "combo" },
            // { id: 10, name: "Luxury Deluxe Mani/Pedi", price: 25000, category: "combo" },
            { id: 11, name: "kids manicure", price: 5000, category: "kids" },
            { id: 12, name: "kids pedicure", price: 7000, category: "kids" },
            // { id: 13, name: "Mani/pedi combo", price: 8000, category: "kids" },
            { id: 58, name: "Gel Polish", price: 7000, category: "kids" },
            { id: 14, name: "BIAB clear", price: 13000, category: "biab" },
            { id: 15, name: "Colored BIAB", price: 15000, category: "biab" },
            { id: 16, name: "BIAB clear + Gel polish", price: 17000, category: "biab" },
            { id: 17, name: "BIAB clear + Extensions", price: 17000, category: "biab" },
            { id: 18, name: "BIAB clear + Extensions + Gel Polish", price: 19000, category: "biab" },
            { id: 21, name: "BIAB on Toes", price: 10000, category: "toes" },
            { id: 22, name: "Regular Polish", price: 7000, category: "ga" },
            { id: 22, name: "Gel Polish on Fingers", price: 9000, category: "ga" },
            { id: 23, name: "Gel Polish on Toes", price: 8000, category: "toes" },
            { id: 24, name: "French Gel Polish", price: 10000, category: "ga" },
            { id: 25, name: "Acrylic Nails", price: 13000, category: "ga" },
            { id: 26, name: "Ombre Gel", price: 10000, category: "o" },
            { id: 27, name: "Chrome Nails", price: 11000, category: "o" },
            { id: 28, name: "Acrylics + French tips", price: 17000, category: "ga" },
            { id: 29, name: "Ombre Acrylic", price: 18000, category: "o" },
            { id: 30, name: "Polygel", price: 20000, category: "o" },
            { id: 31, name: "Acrylic on Toes", price: 10000, category: "toes" },
            { id: 30, name: "Polygel on Toes", price: 20000, category: "toes" },
            { id: 32, name: "Stick-On Nails", price: 7000, category: "o" },
            { id: 33, name: "Acrylic Nails", price: 2000, category: "off" },
            { id: 34, name: "Gel Polish", price: 1000, category: "off" },
            { id: 35, name: "Stick-On Nails", price: 2000, category: "off" },
            { id: 36, name: "BIAB Nails", price: 2500, category: "off" },
            { id: 37, name: "Regular Nails", price: 1000, category: "repair" },
            { id: 37, name: "Acrylic", price: 2000, category: "repair" },
            { id: 38, name: "Stick-On", price: 1000, category: "repair" },
            { id: 39, name: "Polygel", price: 2500, category: "repair" },
            { id: 40, name: "BIAB", price: 1500, category: "repair" },
            { id: 41, name: "BIAB + Extension", price: 2000, category: "repair" },
            { id: 42, name: "Gel Polish", price: 1000, category: "repair" },
            // { id: 43, name: "Glitter", price: 1500, category: "extras" },
            { id: 45, name: "Nail Stones", price: '500 - 2,000', category: "extras" },
            { id: 46, name: "Stickers", price: 300, category: "extras" },
            { id: 47, name: "3D nail art", price: 2000, category: "extras" },
            { id: 48, name: "Gel Polish", price: 8000, category: "refill" },
            { id: 49, name: "Acrylic", price: 10000, category: "refill" },
            { id: 50, name: "Normal Nails", price: 7000, category: "refill" },
            { id: 51, name: "Polygel", price: 15000, category: "refill" },
            { id: 52, name: "BIAB Extensions", price: 13000, category: "refill" },
            { id: 53, name: "BIAB + Gel", price: 13000, category: "refill" },
            { id: 57, name: "Ombre Nails", price: 12000, category: "refill" },
            // { id: 57, name: "Soak/Buff Off", price: 2500, category: "refill" },
        ];

        // Function to generate service items dynamically
        function renderServices() {
            services.forEach(service => {
                const categoryElement = document.getElementById(service.category).querySelector(".services-list");

                // Create a new service item element
                const serviceItem = document.createElement("div");
                serviceItem.classList.add("service-item");

                // Create the name and price elements
                const serviceName = document.createElement("span");
                serviceName.classList.add("service-name");
                serviceName.textContent = service.name;

                const servicePrice = document.createElement("span");
                servicePrice.classList.add("service-price");
                servicePrice.textContent = "₦" + service.price.toLocaleString();

                // Append the name and price to the service item
                serviceItem.appendChild(serviceName);
                serviceItem.appendChild(servicePrice);

                // Append the service item to the appropriate category section
                categoryElement.appendChild(serviceItem);
            });
        }

        // Toggle the display of services list when chevron is clicked
        function setupToggleButtons() {
            const toggleButtons = document.querySelectorAll(".services__toggle");

            toggleButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const servicesList = button.closest(".services").querySelector(".services-list");
                    const isListVisible = servicesList.style.display === "block";

                    // Toggle display of services list
                    servicesList.style.display = isListVisible ? "none" : "block";

                    // Toggle the icon from chevron-right to chevron-down
                    if (content.classList.contains('services__content--active')) {
                        icon.className = 'fa fa-chevron-right';
                        // icon.classList.add('fa-chevron-down');
                    } else {
                        icon.className = 'fa fa-chevron-down';
                        // icon.classList.add('fa-chevron-right');
                    }
                });
            });
        }

        // Call the functions to render the services and set up toggle buttons on page load
        renderServices();
        setupToggleButtons();
    }

    else if (window.location.pathname === "/gallery.html") {
        const allNailImages = [
            { image: "nail1.webp" },
            { image: "nail2.avif" },
            { image: "toes1.jpg" },
            { image: "nail4.jpg" },
            { image: "toes6.webp" },
            { image: "biab2.webp" },
            { image: "extras4.jpg" },
            { image: "others2.jpg" },
            { image: "nail9.jpg" },
            { image: "toes7.jpg" },
            { image: "nail10.webp" },
            { image: "nail11.jpg" },
            { image: "nail12.jpg" },
            { image: "toes2.jpg" },
            { image: "biab4.jpg" },
            { image: "nail16.webp" },
            { image: "nails1.webp" },
            { image: "extras2.webp" },
            { image: "nails2.webp" },
            { image: "toes5.jpg" },
            { image: "nails3.jpg" },
            { image: "nails4.jpg" },
            { image: "nails5.jpg" },
            { image: "nails6.avif" },
            { image: "nails7.webp" },
            { image: "nails8.webp" },
            { image: "nails9.webp" },
            { image: "toes4.jpg" },
            { image: "nails10.webp" },
            { image: "nails11.png" },
            { image: "nails12.jpg" },
            { image: "nails13.jpg" },
            { image: "nails14.webp" },
            { image: "nail17.jpeg" },
            { image: "nails20.jpg" },
            { image: "nails15.webp" },
            { image: "toes3.jpg" },
            { image: "nails16.webp" },
            { image: "nail5.webp" },
            { image: "nails19.jpg" }
        ];
        // Select the gallery container
        const galleryWrap = document.querySelector(".gallery__wrap");

        // Render images using innerHTML
        function renderGallery(images) {
            galleryWrap.innerHTML = images.map(
                    (img) => `
                    <div class="gallery__item">
                        <img src="./images/${img.image}" alt="Nail Art" class="gallery__image">
                    </div>
                `
                )
                .join(""); // Join to avoid unwanted commas between elements
        }
        // Render all nail images initially
        renderGallery(allNailImages);
    }
});

const form = document.getElementById('appointment__form');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');

// Set minimum date to tomorrow (booking a day in advance)
const today = new Date();
today.setDate(today.getDate() + 1);
dateInput.min = today.toISOString().split('T')[0]; 

// Auto-open the calendar and time picker on focus
dateInput.addEventListener('focus', () => dateInput.showPicker());
timeInput.addEventListener('focus', () => timeInput.showPicker());

// Adjust available time ranges based on the selected day
dateInput.addEventListener('input', () => {
    const selectedDate = new Date(dateInput.value);
    const dayOfWeek = selectedDate.getUTCDay(); // 0 = Sunday, 6 = Saturday

    // Reset time input on date change
    timeInput.value = '';

    // Set business hours for the chosen day
    if (dayOfWeek === 0) { // Sunday: 12 PM - 6 PM
        timeInput.min = '12:00';
        timeInput.max = '18:00';
    } else if (dayOfWeek === 6) { // Saturday: 9 AM - 7 PM
        timeInput.min = '09:00';
        timeInput.max = '19:00';
    } else { // Weekdays: 10 AM - 7 PM
        timeInput.min = '10:00';
        timeInput.max = '19:00';
    }
});

// Validate time only after the user changes it (to avoid premature alerts)
timeInput.addEventListener('change', () => {
    const [hours] = timeInput.value.split(':').map(Number);
    const selectedDate = new Date(dateInput.value);
    const dayOfWeek = selectedDate.getUTCDay();

    const isInvalidTime = (
        (dayOfWeek === 0 && (hours < 12 || hours >= 18)) || // Sunday
        (dayOfWeek === 6 && (hours < 9 || hours >= 19)) ||  // Saturday
        (dayOfWeek !== 0 && dayOfWeek !== 6 && (hours < 10 || hours >= 19)) // Weekdays
    );

    if (dayOfWeek == 1){
        alert("We don't open on Mondays")
        timeInput.value = '';
    } else if (isInvalidTime) {
        alert("Please select a time we are open for the chosen day.");
        timeInput.value = ''; // Clear invalid time input
    }
});

// Form submission handler
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    alert("Your appointment has been booked!");
    form.reset(); // Clear the form
});
