console.log("FAANG portfolio loaded 🚀");

// ------------------
// THEME TOGGLE
// ------------------
const btn = document.getElementById("themeToggle");

btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
});

// ------------------
// SMOOTH REVEAL
// ------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".card, section").forEach(el => {
  observer.observe(el);
});

// ------------------
// ACTIVE NAV HIGHLIGHT
// ------------------
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let fromTop = window.scrollY;

  document.querySelectorAll("section").forEach(section => {
    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      links.forEach(link => link.classList.remove("active"));
      let activeLink = document.querySelector(`nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add("active");
    }
  });
});


const text = "Aspiring Cloud & Security Engineer focused on AWS, networking, and real-world infrastructure systems";
const typingElement = document.getElementById("typing");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

window.addEventListener("load", typeWriter);