// Import AOS library
//import AOS from "aos"
//import "aos/dist/aos.css"

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
  })
})

function calculateEMI() {
  const loan = +document.getElementById("loanAmount").value;
  const rate = +document.getElementById("interestRate").value;
  const years = +document.getElementById("loanTerm").value;

  // Basic validation
  if (!loan || !rate || !years) {
    document.getElementById("emiResult").innerText = "Please enter all fields.";
    return;
  }

  const monthlyRate = rate / 1200; // Convert annual % to monthly decimal
  const months = years * 12;

  // EMI formula
  const emi = (loan * monthlyRate * (1 + monthlyRate) ** months) /
              ((1 + monthlyRate) ** months - 1);

  // Display formatted result
  document.getElementById("emiResult").innerText =
    `Monthly EMI: ₹${emi.toFixed(2)}`;
}

// Mobile Navigation Toggle
const hamburger = document.getElementById("hamburger")
const navMenu = document.getElementById("nav-menu")

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active")
      hamburger.classList.remove("active")
    })
  })
}

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar")
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
      navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      navbar.style.boxShadow = "none"
    }
  }
})

// Contact Form Handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(contactForm)
    const data = Object.fromEntries(formData)

    // Simple validation
    if (!data.name || !data.email || !data.message) {
      alert("Please fill in all required fields.")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector(".submit-btn")
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Sending..."
    submitBtn.disabled = true

    // Simulate API call
    setTimeout(() => {
      alert("Thank you for your message! We'll get back to you soon.")
      contactForm.reset()
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 2000)
  })
}

// Newsletter Form Handling
const newsletterForm = document.querySelector(".newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const emailInput = newsletterForm.querySelector('input[type="email"]')
    const email = emailInput.value.trim()

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.")
      return
    }

    // Simulate subscription
    const submitBtn = newsletterForm.querySelector("button")
    const originalText = submitBtn.textContent

    submitBtn.textContent = "Subscribing..."
    submitBtn.disabled = true

    setTimeout(() => {
      alert("Thank you for subscribing to our newsletter!")
      emailInput.value = ""
      submitBtn.textContent = originalText
      submitBtn.disabled = false
    }, 1500)
  })
}

// Property Card Interactions
document.querySelectorAll(".learn-more-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const propertyCard = this.closest(".property-card")
    const propertyTitle = propertyCard.querySelector("h3").textContent
    alert(
      `More information about "${propertyTitle}" would be displayed here. This would typically open a detailed property page.`,
    )
  })
})

// Blog Card Interactions
document.querySelectorAll(".read-more-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const blogCard = this.closest(".blog-card")
    const blogTitle = blogCard.querySelector("h3").textContent
    alert(`"${blogTitle}" would open in a full blog post page. This is a demo interaction.`)
  })
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Directions button interaction
const directionsBtn = document.querySelector(".directions-btn")
if (directionsBtn) {
  directionsBtn.addEventListener("click", () => {
    // In a real application, this would open Google Maps or similar
    alert("This would open directions to our office in your preferred maps application.")
  })
}

// Social media link interactions
document.querySelectorAll(".social-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault()
    const platform = this.textContent.trim()
    alert(`This would open our ${platform} page. Social media links are demo placeholders.`)
  })
})

// Add loading states and animations
function addLoadingState(element, duration = 2000) {
  const originalText = element.textContent
  element.style.opacity = "0.7"
  element.style.pointerEvents = "none"

  setTimeout(() => {
    element.style.opacity = "1"
    element.style.pointerEvents = "auto"
  }, duration)
}

// Intersection Observer for additional animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observe elements for custom animations
document.querySelectorAll(".feature-card, .value-card, .property-card, .blog-card").forEach((el) => {
  observer.observe(el)
})

// Add custom CSS for additional animations
const style = document.createElement("style")
style.textContent = `
    .animate-in {
        animation: slideInUp 0.6s ease-out forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`
document.head.appendChild(style)

console.log("Munish Associate website loaded successfully!")
