// 1. The loop-rendered dynamic content

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

//  Query the DOM to target our empty destination grid canvas element.
const servicesContainer = document.querySelector("#services-container");

//  Loop through our data array to systematically construct and mount the elements.
washingPackages.forEach(function (packageData) {
    // Programmatically instantiate an enveloping card wrapper element
    const cardElement = document.createElement("div");

    // Apply your baseline style classes
    cardElement.classList.add("service-item");
    if (packageData.isDeluxe) {
        cardElement.classList.add("deluxe");
    }

    // Build out the nested item content using template strings safely
    let featuresHTML = "";
    packageData.features.forEach(function (featureText) {
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

// 2. Dynamically add & remove elements (Wishlist-style)

// Target the HTML elements we just created
const addonForm = document.querySelector("#addon-form");
const addonInput = document.querySelector("#addon-input");
const addonList = document.querySelector("#addon-list");

// Listen for the form submission
addonForm.addEventListener("submit", function (event) {
    // Prevent the page from reloading when the button is clicked
    event.preventDefault();

    const inputValue = addonInput.value.trim();

    // Only proceed if the user actually typed something
    if (inputValue !== "") {
        // Create the new List Item (li)
        const li = document.createElement("li");
        li.textContent = inputValue + " "; // Add a space after the text

        //Create the Delete Button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Remove";
        deleteBtn.classList.add("delete-btn"); // Optional class for styling

        // Make the Remove button actually work
        deleteBtn.addEventListener("click", function () {
            li.remove(); // This removes the specific element from the DOM
        });

        // Assemble the pieces and put them on the screen
        li.appendChild(deleteBtn); // Put the button inside the li
        addonList.appendChild(li); // Put the li inside the ul

        // 7. Clear the input box for the next item
        addonInput.value = "";
    }
});

// 3. Form handling with validation feedback

//  Target the form and its elements
const bookingForm = document.querySelector("#booking-form");
const nameInput = document.querySelector("#user-name");
const emailInput = document.querySelector("#user-email");
const feedbackDisplay = document.querySelector("#form-feedback");

// Listen for the 'submit' event
bookingForm.addEventListener("submit", function (event) {
    // Stop the browser from refreshing the page
    event.preventDefault();

    // Read what the user typed (and trim any accidental extra spaces)
    const userName = nameInput.value.trim();
    const userEmail = emailInput.value.trim();

    // 3. Validation Logic
    if (userName === "" || userEmail === "") {
        // ERROR: One or both fields are empty
        feedbackDisplay.textContent = "Please fill out both your name and email.";
        feedbackDisplay.style.color = "red"; // Direct visual feedback
    } else {
        // SUCCESS: Both fields have text
        feedbackDisplay.textContent = `Thanks for your feedback ${userName}! We'll contact you at ${userEmail} to confirm your booking.`;
        feedbackDisplay.style.color = "green";

        // Clear the form fields after a successful submission
        nameInput.value = "";
        emailInput.value = "";
    }
});

//4. Persistent State with localStorage
// On page load: Check if there's a saved draft. If yes, fill the inputs automatically
if (localStorage.getItem("draftName")) {
    nameInput.value = localStorage.getItem("draftName");
}
if (localStorage.getItem("draftEmail")) {
    emailInput.value = localStorage.getItem("draftEmail");
}

//  As the user types: Save their text immediately to localStorage
nameInput.addEventListener("input", function () {
    localStorage.setItem("draftName", nameInput.value);
});

emailInput.addEventListener("input", function () {
    localStorage.setItem("draftEmail", emailInput.value);
});


// 5. Click-to-reveal on your banner

// Target the banner image and the newly added caption text
const bannerImage = document.querySelector(".main-banner-img");
const bannerCaption = document.getElementById("banner-caption");

// Add a click event listener to the image
bannerImage.addEventListener("click", function () {
    // Toggle the 'reveal' class on the caption element
    bannerCaption.classList.toggle("reveal");
});