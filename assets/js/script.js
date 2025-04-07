//heirui location share su kan shareing option t mei
document.getElementById("shareButton").addEventListener("click", function() {
    let locationURL = "https://maps.app.goo.gl/57BXMnH1TMzbQSbA9";

    if (navigator.share) {
        navigator.share({
            title: "Check out this location",
            text: "Find this place on Google Maps:",
            url: locationURL
        })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.log("Error sharing:", error));
    } else {
        alert("Your browser does not support sharing. Try copying the link manually.");
    }
});
//hei rui navbar ta scroll sukhng
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar"); // Select the navbar
        if (window.scrollY > 100) {
            navbar.classList.add("active"); // Add class when scrolled past 100px
        } else {
            navbar.classList.remove("active"); // Remove class when less than 100px
        }
    });
});
//hei rui arrow-top ta home page kho tat khng
document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', function(e) {
    // Get the hero section
    const heroSection = document.getElementById('hero');
    const scrollToTop = document.getElementById('scrollToTop');


    // console.log('e',e)
    
    // Get the position of the hero section
    const heroRect = heroSection.getBoundingClientRect();
    
    // Check if the hero section is in the viewport
    if (heroRect.top >= 0 && heroRect.top <= window.innerHeight) {
        console.log('Hero section is in view!');
        scrollToTop.style.display = "none";
        
        // You can perform any action here, like showing a button, adding a class, etc.
    } else {
        console.log('Hero section is out of view!');
        // You can perform actions here when the hero section is not in view
        scrollToTop.style.display = "block";
    }
});

// let reviews = []; // Store reviews

// function addReview() {
//     let reviewText = document.getElementById("reviewInput").value;

//     if (reviewText.trim() === "") {
//         alert("Please write a review before submitting!");
//         return;
//     }

//     if (reviews.length >= 100) {
//         alert("Review limit reached (100 reviews).");
//         return;
//     }

//     // Add review and update display
//     reviews.push(reviewText);
//     document.getElementById("reviewInput").value = ""; // Clear input
//     displayReviews();
// }

// function displayReviews() {
//     let reviewList = document.getElementById("reviewList");
//     reviewList.innerHTML = ""; // Clear previous reviews

//     reviews.forEach((review, index) => {
//         let div = document.createElement("div");
//         div.textContent = `${index + 1}. ${review}`;
//         reviewList.appendChild(div);
//     });
// }


//   // Load saved reviews on page load
//   document.addEventListener("DOMContentLoaded", loadReviews);

//   function addReview() {
//     let reviewInput = document.getElementById("reviewInput");
//     let reviewText = reviewInput.value.trim();

//     if (reviewText === "") {
//       alert("Please enter a review!");
//       return;
//     }

//     // Get existing reviews or create an empty array
//     let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

//     // Add new review
//     reviews.push(reviewText);

//     // Save to localStorage
//     localStorage.setItem("reviews", JSON.stringify(reviews));

//     // Clear input field
//     reviewInput.value = "";

//     // Refresh the displayed reviews
//     loadReviews();
//   }

//   function loadReviews() {
//     let reviewList = document.getElementById("reviewList");
//     reviewList.innerHTML = ""; // Clear existing content

//     // Get reviews from localStorage
//     let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

//     // Display each review
//     reviews.forEach((review, index) => {
//       let div = document.createElement("div");
//       div.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-2");
//       div.innerHTML = `
//         <span>${review}</span>
//         <button class="bg-danger text-white border-0 px-2 py-1 rounded-2" onclick="deleteReview(${index})">Delete</button>
//       `;
//       reviewList.appendChild(div);
//     });
//   }

//   function deleteReview(index) {
//     let reviews = JSON.parse(localStorage.getItem("reviews")) || [];

//     // Remove review from array
//     reviews.splice(index, 1);

//     // Save updated list back to localStorage
//     localStorage.setItem("reviews", JSON.stringify(reviews));

//     // Refresh displayed reviews
//     loadReviews();
//   }

