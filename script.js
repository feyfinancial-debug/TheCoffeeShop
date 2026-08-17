document.addEventListener("DOMContentLoaded", () => {
    const galleryBtn = document.getElementById("gallery-btn");
    const imageDisplayArea = document.getElementById("image-display-area");
    

 const images = [ 
    { src: "./images/logo.png", alt: "The Coffee Shop logo" }, 
    { src: "./images/Americano.jpg", alt: "Americano coffee" }, 
    { src: "./images/Cappuccino.jpg", alt: "Cappuccino coffee" }, 
    { src: "./images/Latte.jpg", alt: "Latte coffee" }, 
    { src: "./images/Macchiato.jpg", alt: "Macchiato coffee" }, 
    { src: "./images/fresh pastries.jpg", alt: "Fresh pastries" }, 
    { src: "./images/Comfortable seating.jpg", alt: "Comfortable seating area" }, 
    { src: "./images/Specialty coffee selections.jpg", alt: "Specialty coffee selection" }, 
    { src: "./images/Free Wi-Fi.jpg", alt: "Free Wi-Fi" }
];
    

    if (galleryBtn && imageDisplayArea) {
        galleryBtn.addEventListener("click", () => {
            imageDisplayArea.innerHTML = ""; 
            
           
            images.forEach(image => {
                const newImg = document.createElement("img");
                newImg.src = image.src;
                newImg.alt = image.alt;
                newImg.style.width = "200px";
                newImg.style.margin = "10px";
                newImg.style.borderRadius = "8px";
                imageDisplayArea.appendChild(newImg);
            });
        });
    }


    const faqToggles = document.querySelectorAll(".faq-toggle");
    faqToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const answer = toggle.nextElementSibling;
            const isExpanded = toggle.getAttribute("aria-expanded") === "true";
            toggle.setAttribute("aria-expanded", !isExpanded);
            if (!isExpanded) {
                answer.style.maxHeight = "100px";
                const icon = toggle.querySelector(".icon");
                if (icon) icon.textContent = "−";
            } else {
                answer.style.maxHeight = "0";
                const icon = toggle.querySelector(".icon");
                if (icon) icon.textContent = "+";
            }
        });
    });


    const contactForm = document.getElementById("contact-form");
    const formFeedback = document.getElementById("form-feedback");
    
    if (contactForm && formFeedback) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Stop page reload
            const nameInput = document.getElementById("name").value.trim();
            const emailInput = document.getElementById("email").value.trim();
            const msgInput = document.getElementById("message").value.trim();
            
            if (nameInput === "" || emailInput === "" || msgInput === "") {
                formFeedback.style.color = "#900";
                formFeedback.textContent = "Please fill out all required fields correctly.";
            } else {
                formFeedback.style.color = "#2d5a27";
                formFeedback.textContent = "Thank you! Your message has been sent successfully.";
                contactForm.reset();
            }
        });
    }
});