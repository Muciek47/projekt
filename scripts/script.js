const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide(i) {
    index = (i + slides.length) % slides.length;
    slider.style.transform = `translateX(${-index * 100}%)`;
}

setInterval(() => showSlide(index + 1), 5000);

function navigate(section) {
    if (section === 'start') {
        window.location.href = "../index.html";
    } else if (section === 'ai') {
        window.location.href = "../subpages/ai.html";
    } else if (section === 'metaverse') {
        window.location.href = "../subpages/metaverse.html";
    } else if (section == 'symulacje'){
        window.location.href = "../subpages/symulacje.html";
    } else if (section == 'vr'){
        window.location.href = "../subpages/vr.html";
    }
}

function showDetails(index) {
    const details = document.querySelectorAll(".details");
    details.forEach((detail, i) => {
        detail.style.display = i === index ? "block" : "none";
    });
}

document.addEventListener("scroll", () => {
    document.querySelectorAll(".scroll-effect").forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.classList.add("visible");
        }
    });
});
