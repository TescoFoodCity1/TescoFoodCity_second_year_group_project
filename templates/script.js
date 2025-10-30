//------------------------------------------------------------------------------
// Example: Capture search input
document.querySelector(".search-bar button").addEventListener("click", () => {
  let query = document.querySelector(".search-bar input").value;
  alert("You searched for: " + query);
  // Later: You can redirect or filter products dynamically
});


//------------------------------------------------------------------------------
// ====== SIMPLE CART FUNCTIONALITY ======

// Select all add-to-cart buttons
const cartButtons = document.querySelectorAll(".add-cart");

// Simulate cart array
let cart = [];
//--------------------------------------------------------------------------------
// ===== TOP ADVERTISEMENT CAROUSEL =====
// Add click event to each button
cartButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Item added to cart!");
    // Here you can push product into cart array
    cart.push("Product");
    console.log("Cart:", cart);
  });
});

// Get all slides
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let slideInterval;

// Function to show a slide
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

// Show first slide
showSlide(currentIndex);

// Function to go to next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Function to go to previous slide
function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

// ✅ Auto-play slides every 5 seconds
function startAutoPlay() {
  slideInterval = setInterval(nextSlide, 5000); // 5000ms = 5s
}

// ✅ Stop auto-play (when user interacts)
function stopAutoPlay() {
  clearInterval(slideInterval);
  startAutoPlay(); // restart timer
}

// Event listeners for buttons
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  stopAutoPlay(); // reset autoplay when clicked
});

document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  stopAutoPlay(); // reset autoplay when clicked
});

// Start auto-play when page loads
startAutoPlay();

//--------------------------------------------------------------------------

// =====BOTTOUM ADVERTISEMENT CAROUSEL =====
let adsSlides = document.querySelectorAll(".ads-slide");
let adsDots = document.querySelectorAll(".dot");
let adsIndex = 0;
let adsInterval;

// Show slide + update dots
function showAdsSlide(index) {
  adsSlides.forEach(slide => slide.classList.remove("active"));
  adsDots.forEach(dot => dot.classList.remove("active"));
  
  adsSlides[index].classList.add("active");
  adsDots[index].classList.add("active");
}

// Next slide
function nextAdsSlide() {
  adsIndex = (adsIndex + 1) % adsSlides.length;
  showAdsSlide(adsIndex);
}

// Prev slide
function prevAdsSlide() {
  adsIndex = (adsIndex - 1 + adsSlides.length) % adsSlides.length;
  showAdsSlide(adsIndex);
}

// Auto-play every 4s
function startAdsAutoPlay() {
  adsInterval = setInterval(nextAdsSlide, 4000);
}

// Stop & restart autoplay when manually clicked
function resetAdsAutoPlay() {
  clearInterval(adsInterval);
  startAdsAutoPlay();
}

// Buttons
document.querySelector(".ads-next").addEventListener("click", () => {
  nextAdsSlide();
  resetAdsAutoPlay();
});
document.querySelector(".ads-prev").addEventListener("click", () => {
  prevAdsSlide();
  resetAdsAutoPlay();
});

// ✅ Dot clicks
adsDots.forEach(dot => {
  dot.addEventListener("click", () => {
    adsIndex = parseInt(dot.getAttribute("data-index"));
    showAdsSlide(adsIndex);
    resetAdsAutoPlay();
  });
});

// Start carousel
showAdsSlide(adsIndex);
startAdsAutoPlay();
