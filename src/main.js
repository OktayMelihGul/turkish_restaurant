/**
 * Restaurant Reviews Data
 * Contains customer reviews with:
 * - name: Customer name
 * - rating: Rating out of 5 stars
 * - comment: Customer's feedback about their experience
 * Mix of Turkish and international customers to reflect the restaurant's diverse clientele
 */
const reviews = [
  {
    name: "Mehmet Yılmaz",
    rating: 5,
    comment: "The Karnıyarık was incredible! Perfect blend of eggplant and meat filling."
  },
  {
    name: "Sophie Weber",
    rating: 4,
    comment: "Loved the Mercimek Çorbası, perfect starter for a cold day."
  },
  {
    name: "Ali Öztürk",
    rating: 5,
    comment: "Best Baklava in town! Perfectly sweet and flaky."
  },
  {
    name: "Zeynep Kaya",
    rating: 5,
    comment: "The Mantı was absolutely divine! Authentic Turkish flavors."
  },
  {
    name: "Marco Rossi",
    rating: 4,
    comment: "Great selection of Turkish dishes. The Hummus was exceptional."
  },
  {
    name: "Ayşe Demir",
    rating: 5,
    comment: "Perfect date night spot. The Tavuk Şiş was cooked to perfection."
  },
  {
    name: "Thomas Schmidt",
    rating: 3,
    comment: "Köfte was good but service was a bit slow during peak hours."
  },
  {
    name: "Fatma Yıldız",
    rating: 5,
    comment: "The Sigara Böreği was crispy and delicious. Great appetizer!"
  },
  {
    name: "Pierre Dubois",
    rating: 5,
    comment: "Their Sütlaç is outstanding. Best rice pudding I've ever had!"
  },
  {
    name: "Elif Şahin",
    rating: 4,
    comment: "Cozy atmosphere and friendly staff. The Sarma was perfectly seasoned."
  },
  {
    name: "Hans Müller",
    rating: 2,
    comment: "Long wait time for the Mantı. Taste was okay but not worth the wait."
  },
  {
    name: "Mustafa Çelik",
    rating: 5,
    comment: "Best Turkish food in the area! The Karnıyarık is a must-try."
  },
  {
    name: "Emma Thompson",
    rating: 5,
    comment: "Celebrated my anniversary here with amazing Tavuk Şiş and Baklava!"
  },
  {
    name: "Selin Aksoy",
    rating: 4,
    comment: "Love their appetizers. The Hummus and Sigara Böreği combo is perfect."
  },
  {
    name: "Ahmet Koç",
    rating: 5,
    comment: "The Köfte was juicy and flavorful. Will definitely return!"
  },
  {
    name: "Maria Garcia",
    rating: 3,
    comment: "Nice place but Mantı portions could be bigger for the price."
  },
  {
    name: "Berk Aydın",
    rating: 5,
    comment: "The Şekerpare is the best dessert here. So sweet and delicious!"
  },
  {
    name: "Leyla Özkan",
    rating: 5,
    comment: "Impeccable service and the Revani was perfectly moist!"
  },
  {
    name: "Andrea Conti",
    rating: 4,
    comment: "Great business dinner spot. Everyone loved the mixed grill platter."
  },
  {
    name: "Gül Erdoğan",
    rating: 5,
    comment: "Their Mercimek Çorbası is amazing. Perfect start to any meal!"
  },
  {
    name: "James Wilson",
    rating: 2,
    comment: "Köfte was a bit overcooked. Expected better for the price."
  },
  {
    name: "Deniz Yılmaz",
    rating: 5,
    comment: "Every dessert is amazing but the Baklava is exceptional!"
  },
  {
    name: "Mert Çetin",
    rating: 4,
    comment: "Solid choice for Turkish cuisine. The Sarma was delightful."
  },
  {
    name: "Nina Petrova",
    rating: 5,
    comment: "Best Karnıyarık I've had outside of Turkey! Absolutely authentic!"
  }
];

/**
 * Homepage Slideshow Functionality
 * Manages the automatic rotation of hero section background images
 * @returns {void}
 */
function initSlideshow() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;

  let currentSlide = 0;
  const totalSlides = slides.length;

  /**
   * Displays the slide at the specified index
   * @param {number} index - The index of the slide to show
   */
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  /**
   * Advances to the next slide in the rotation
   */
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  // Initialize automatic slideshow with 5-second intervals
  setInterval(nextSlide, 5000);
}

/**
 * Main Application Logic
 * Initializes all dynamic functionality when the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
  
  /**
   * Reviews Page Functionality
   * Handles the display of customer reviews and average rating
   */
  const reviewsContainer = document.getElementById('reviewsContainer');
  if (reviewsContainer) {
    // Calculate average rating from all reviews
    const avgRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length;
    
    // Create and display average rating card
    const averageHTML = `
      <div class="col-12 mb-4">
        <div class="card text-center">
          <div class="card-body">
            <h4>Average Rating</h4>
            <p class="text-warning display-4">${avgRating.toFixed(1)}</p>
            <p class="text-muted">${reviews.length} reviews</p>
          </div>
        </div>
      </div>
    `;
    reviewsContainer.innerHTML = averageHTML;

    // Generate individual review cards
    reviews.forEach(review => {
      const reviewHTML = `
        <div class="col-md-4 mb-4">
          <div class="card h-100 card-animate">
            <div class="card-body">
              <h5 class="card-title">${review.name}</h5>
              <p class="text-warning mb-2">${'★'.repeat(review.rating)}</p>
              <p class="card-text">${review.comment}</p>
            </div>
          </div>
        </div>
      `;
      reviewsContainer.innerHTML += reviewHTML;
    });
  }

  /**
   * Contact Form Handler
   * Manages form submission and user feedback
   */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }

  /**
   * Homepage Latest Review Display
   * Shows the most recent 5-star review on the homepage
   */
  const latestReviewContainer = document.getElementById('latestReview');
  if (latestReviewContainer) {
    const latestReview = reviews.find(review => review.rating === 5);
    if (latestReview) {
      latestReviewContainer.innerHTML = `
        <div class="card border-0 shadow-sm">
          <div class="card-body">
            <p class="text-warning mb-2">${'★'.repeat(latestReview.rating)}</p>
            <p class="card-text font-italic">"${latestReview.comment}"</p>
            <p class="card-title fw-bold mb-0">- ${latestReview.name}</p>
          </div>
        </div>
      `;
    }
  }

  /**
   * Scroll Animation Implementation
   * Uses Intersection Observer API to trigger animations when elements come into view
   */
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 } // Trigger when at least 10% of the element is visible
  );

  // Apply animations to elements with fade-in or card-animate classes
  document.querySelectorAll('.fade-in, .card-animate').forEach(el => {
    observer.observe(el);
  });

  // Initialize the homepage slideshow
  initSlideshow();
});