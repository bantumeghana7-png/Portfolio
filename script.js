/* =====================================================
   MEGHANA PORTFOLIO
   INTERACTIONS
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");


menuBtn.addEventListener(
    "click",
    () => {

        navMenu.classList.toggle("open");

    }
);


/* Close mobile menu after clicking */

document
    .querySelectorAll("#navMenu a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navMenu.classList.remove("open");

            }
        );

    });


/* =====================================================
   SCROLL REVEAL
===================================================== */

const sections =
    document.querySelectorAll(".section");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


sections.forEach(section => {

    revealObserver.observe(section);

});


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const navLinks =
    document.querySelectorAll(
        "#navMenu a"
    );


const sectionElements =
    document.querySelectorAll(
        "main section"
    );


const navObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    navLinks.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                    });


                    const activeLink =
                        document.querySelector(
                            `#navMenu a[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },

        {
            threshold: 0.45
        }

    );


sectionElements.forEach(section => {

    navObserver.observe(section);

});


/* =====================================================
   BACK TO TOP
===================================================== */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            topBtn.classList.add("show");

        }

        else {

            topBtn.classList.remove("show");

        }

    }
);


topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);


/* =====================================================
   SYSTEM STATUS
===================================================== */

const missionText =
    document.querySelector(".mission");


const missions = [

    "BUILD SOMETHING GREAT_",

    "LEARN SOMETHING NEW_",

    "SOLVE REAL PROBLEMS_",

    "KEEP BUILDING_"

];


let missionIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeMission() {

    const current =
        missions[missionIndex];


    if (!deleting) {

        characterIndex++;

        missionText.innerHTML =
            current.substring(
                0,
                characterIndex
            ) +
            '<span class="typing-cursor">_</span>';


        if (
            characterIndex >=
            current.length
        ) {

            deleting = true;

            setTimeout(
                typeMission,
                1800
            );

            return;

        }

    }

    else {

        characterIndex--;

        missionText.innerHTML =
            current.substring(
                0,
                characterIndex
            ) +
            '<span class="typing-cursor">_</span>';


        if (characterIndex <= 0) {

            deleting = false;

            missionIndex =
                (missionIndex + 1) %
                missions.length;

        }

    }


    setTimeout(
        typeMission,
        deleting ? 45 : 75
    );

}


setTimeout(
    typeMission,
    1500
);


/* =====================================================
   CURSOR GLOW
===================================================== */

const cursorGlow =
    document.createElement("div");


cursorGlow.style.position =
    "fixed";

cursorGlow.style.width =
    "180px";

cursorGlow.style.height =
    "180px";

cursorGlow.style.borderRadius =
    "50%";

cursorGlow.style.pointerEvents =
    "none";

cursorGlow.style.zIndex =
    "-1";

cursorGlow.style.background =
    "radial-gradient(circle, rgba(0,180,255,0.08), transparent 70%)";

cursorGlow.style.transform =
    "translate(-50%, -50%)";


document.body.appendChild(
    cursorGlow
);


window.addEventListener(
    "mousemove",
    event => {

        cursorGlow.style.left =
            event.clientX + "px";

        cursorGlow.style.top =
            event.clientY + "px";

    }
);


/* =====================================================
   PROJECT CARD TILT
===================================================== */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 800) {
                return;
            }


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) *
                -2;


            const rotateY =
                ((x - centerX) /
                    centerX) *
                2;


            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";

        }
    );

});


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%c BANTU MEGHANA ",
    "background:#062653;color:#00e5ff;font-size:18px;font-weight:bold;padding:8px;"
);

console.log(
    "%c Welcome to my portfolio. Keep building. 🚀 ",
    "color:#8eb8df;font-size:13px;"
);