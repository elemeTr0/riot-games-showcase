const sections = document.querySelectorAll(
    "#aboutSection, #gamesSection, #newsSection, #contactSection"
);

const dots = document.querySelectorAll(".sideDot");


function updateActiveDot() {

    let currentSection = "";

    const scrollPosition = window.scrollY + window.innerHeight / 3;


    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;


        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }

    });


    // Force footer active when reaching the bottom
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 10
    ) {
        currentSection = "contactSection";
    }


    dots.forEach(dot => {

        dot.classList.remove("active");

        if (dot.getAttribute("href") === "#" + currentSection) {
            dot.classList.add("active");
        }

    });

}


// Update when scrolling
window.addEventListener("scroll", updateActiveDot);


// Update when page loads
window.addEventListener("load", updateActiveDot);