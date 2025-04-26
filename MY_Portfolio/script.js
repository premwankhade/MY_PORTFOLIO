// Typing Effect
var typed = new Typed(".typing", {
    strings: ["Web Developer", "UI/UX Designer", "Problme Slover"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Particle Background
particlesJS("particles-js", {
    particles: {
        number: {
            value: 60,
            density: { enable: true, value_area: 800 }
        },
        color: { value: "#ff0000" },
        shape: {
            type: "square",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: {
            value: 0.5,
            random: false
        },
        size: {
            value: 5,
            random: true
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

const toggleBtn = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    toggleBtn.classList.toggle('open');
  });