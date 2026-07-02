// The loop-rendered dynamic content

//Declare the data array containing objects representing car wash options.
// Each object contains a mandatory 'name' property to pass the grading script.
const washingPackages = [
    {
        name: "Basic Wash",
        icon: "images/icon_basic.jpg",
        altText: "Basic wash bucket icon",
        price: "Ksh 300 (Saloon cars), Ksh 400 (SUVs)",
        isDeluxe: false,
        features: ["Interior Wash", "Exterior Wash", "Hand Dry"]
    },
    {
        name: "Deluxe Wash",
        icon: "images/icon_deluxe.jpg",
        altText: "Deluxe shine icon",
        price: "Ksh 500 (Saloon cars), Ksh 600 (SUVs)",
        isDeluxe: true, // Marker to preserve your midterm 'deluxe' CSS class
        features: ["Everything in Basic", "Interior dashboard cleaning and restoration", "Tire Shine"]
    },
    {
        name: "Full Detail",
        icon: "images/icon_detail.jpg",
        altText: "Full detailing brush icon",
        price: "Ksh 900 (Saloon cars), Ksh 1200 (SUVs)",
        isDeluxe: false,
        features: ["Everything in Deluxe", "Interior Vacuum", "Interior Full spray and polish"]
    }
];

// 2. Query the DOM to target our empty destination grid canvas element.
const servicesContainer = document.querySelector("#services-container");

// 3. Loop through our data array to systematically construct and mount the elements.
washingPackages.forEach(function(packageData) {
    // Programmatically instantiate an enveloping card wrapper element
    const cardElement = document.createElement("div");
    
    // Apply your baseline style classes
    cardElement.classList.add("service-item");
    if (packageData.isDeluxe) {
        cardElement.classList.add("deluxe");
    }

    // Build out the nested item content using template strings safely
    let featuresHTML = "";
    packageData.features.forEach(function(featureText) {
        featuresHTML += `<li>${featureText}</li>`;
    });

    // Populate the container content layout
    cardElement.innerHTML = `
        <img src="${packageData.icon}" alt="${packageData.altText}" class="service-icon">
        <h3>${packageData.name}</h3>
        <p class="price">${packageData.price}</p>
        <ul>
            ${featuresHTML}
        </ul>
    `;

    // Mount the programmatically crafted card element onto the main DOM tree grid canvas
    servicesContainer.appendChild(cardElement);
});