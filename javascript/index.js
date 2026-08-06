const slides = [
    {
        image: "src/LOL.jpg",
        title: "League of Legends",
        text: "League of Legends is a 5v5 multiplayer online battle arena (MOBA) developed by Riot Games. Players choose from a wide variety of unique champions and work together to defeat the opposing team. The main objective is to destroy the enemy Nexus while fighting through lanes, defending objectives, and developing your champion throughout the match."
    },
    {
        image: "src/TFT.jpg",
        title: "Teamfight Tactics",
        text: "Teamfight Tactics (TFT) is an auto-battler strategy game developed by Riot Games. Players build teams by collecting and combining champions, items, and traits to create powerful strategies. Battles are automated, so success depends on smart team composition, positioning, resource management, and adapting to your opponents."
    },
    {
        image: "src/VAL.jpg",
        title: "Valorant",
        text: "VALORANT is a 5v5 tactical first-person shooter developed by Riot Games. Players choose from a roster of unique Agents, each with their own abilities, and compete in strategic rounds where teamwork, communication, and precise gunplay are key. Teams must attack or defend objectives while outsmarting their opponents to secure victory."
    },
    {
        image: "src/2xko.jpg",
        title: "2XKO",
        text: "2XKO is a free-to-play 2v2 fighting game developed by Riot Games. Players choose from League of Legends champions and team up with another player to battle opposing duos using unique abilities, combos, and tag-team mechanics. The game focuses on fast-paced combat, teamwork, and strategic character combinations."
    },
    {
        image: "src/wildrift.jpg",
        title: "Wild Rift",
        text: "League of Legends: Wild Rift is a mobile version of League of Legends, designed specifically for phones and tablets. Players choose from a large roster of champions and compete in fast-paced 5v5 matches, working together to destroy the enemy team’s base. Wild Rift keeps the core gameplay of League while offering shorter matches and controls optimized for mobile devices."
    },
    {
        image: "src/runeterra.jpg",
        title: "Legends of Runeterra",
        text: "Legends of Runeterra is a digital collectible card game set in the League of Legends universe. Players build decks using champions and characters from Runeterra and battle opponents through strategic card-based gameplay. Each match focuses on planning, adapting to your opponent, and making the most of your cards and abilities."
    }
];


let currentImage = 0;


// Elements
const image = document.getElementById("sliderImage");
const text = document.getElementById("sliderText");
const title = document.getElementById("sliderTitle");

const leftButton = document.getElementById("prev");
const rightButton = document.getElementById("next");


// Counter
const currentSlide = document.getElementById("currentSlide");
const totalSlides = document.getElementById("totalSlides");

totalSlides.textContent = slides.length;


// Update slider
function updateSlide(firstLoad = false) {

    const elements = [
        image,
        text,
    ];


    // Animation when changing slides
    if (!firstLoad) {
        elements.forEach(element => {
            element.classList.add("slide-change");
        });
    }


    setTimeout(() => {

        image.src = slides[currentImage].image;
        title.textContent = slides[currentImage].title;
        text.textContent = slides[currentImage].text;


        elements.forEach(element => {
            element.classList.remove("slide-change");
        });


        // Update number
        currentSlide.textContent = currentImage + 1;


    }, firstLoad ? 0 : 350);
}



// Previous button
leftButton.addEventListener("click", () => {

    currentImage--;

    if (currentImage < 0) {
        currentImage = slides.length - 1;
    }

    updateSlide();

});



// Next button
rightButton.addEventListener("click", () => {

    currentImage++;

    if (currentImage >= slides.length) {
        currentImage = 0;
    }

    updateSlide();

});



// Load first slide
updateSlide(true);