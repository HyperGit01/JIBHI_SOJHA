/* =========================================
   JIBHI & SOJHA — OUR LITTLE DIARY
   Main memories and interactions
========================================= */


/* =========================================
   1. IMAGE HOSTING
========================================= */

const REPOSITORY =
    "https://raw.githubusercontent.com/HyperGit01/JIBHI_SOJHA/main/";

function photo(filename) {
    return REPOSITORY + filename;
}


/* =========================================
   2. MEMORY COLLECTION
========================================= */

/*
   type: "photo" = Interactive Polaroid
   type: "note"  = Handwritten diary note

   To add a new photograph later, simply add
   another photo object to the appropriate day.
*/

const chapters = [

    {
        date: "28 OCTOBER",
        number: "01",
        title: "The beginning",
        subtitle: "And just like that, we were off...",

        memories: [

            {
                type: "note",
                time: "28 OCTOBER · NIGHT",
                text: "Leaving home, catching our bus, and beginning a little adventure that we had been waiting for."
            }

        ]
    },


    {
        date: "29 OCTOBER",
        number: "02",
        title: "Hello, Jibhi",
        subtitle: "New places, cold air and little adventures.",

        memories: [

            {
                type: "note",
                time: "29 OCTOBER · MORNING",
                text: "Reaching Oat Tunnel in the morning and continuing our journey through the mountains in Himachal Parivahan."
            },

            {
                type: "photo",
                image: "stayatjibhi.jpg",
                title: "Our little stay",
                date: "29 OCTOBER",
                storyTitle: "Finally, Jibhi!",
                message: "After all that travelling, we finally reached our stay. A new place, a new day and four days of adventure waiting for us. Thanks for the stay btw",
                alt: "Our stay in Jibhi",
                rotation: -3
            },

            {
                type: "photo",
                image: "riveraroundstay.JPG",
                title: "By the riverside",
                date: "29 OCTOBER",
                storyTitle: "Little river moments",
                message: "Playing by the riverside, enjoying the sound of the water and forgetting about everything else for a little while. but please dont jump again without prior notice",
                alt: "The riverside near our stay",
                rotation: 3
            },

            {
                type: "photo",
                image: "jibhimarket.jpg",
                title: "Jibhi after dark",
                date: "29 OCTOBER",
                storyTitle: "A little night out",
                message: "Our little trip to Jibhi market. Exploring the place, looking around and making another memory together.",
                alt: "Jibhi market",
                rotation: -2
            },

            {
                type: "note",
                time: "29 OCTOBER · NIGHT",
                text: "And then came the bonfire. The kind of evening that makes you wish the night would last just a little longer. and finally we are married..."
            }

        ]
    },


    {
        date: "30 OCTOBER",
        number: "03",
        title: "Into the mountains",
        subtitle: "The day of trails, heights and sunsets.",

        memories: [

            {
                type: "note",
                time: "30 OCTOBER · MORNING",
                text: "Starting the day with Mini Thailand. One more beautiful place added to our little adventure. Har jagah gussa"
            },

            {
                type: "note",
                time: "30 OCTOBER · MORNING",
                text: "Next stop: Jalori Pass. Higher roads, mountain views and that feeling of being somewhere far away from the usual routine."
            },

            {
                type: "photo",
                image: "trecking.JPG",
                title: "The big trek",
                date: "30 OCTOBER",
                storyTitle: "One step at a time",
                message: "Our evening trek towards Raghupur Fort. A little tiring, a little challenging, but definitely worth experiencing together.",
                alt: "Our trek to Raghupur Fort",
                rotation: 3
            },

            {
                type: "photo",
                image: "raghupurfortsunset.jpg",
                title: "Chasing sunsets",
                date: "30 OCTOBER",
                storyTitle: "A sky to remember",
                message: "Some views are difficult to describe. You just stand there, look around and wish you could save that exact moment forever. for me, it's your beautiful face",
                alt: "Sunset at Raghupur Fort",
                rotation: -3
            },

            {
                type: "note",
                time: "30 OCTOBER · NIGHT",
                text: "Camping at Raghupur Fort. A night away from the city, surrounded by mountains, with a sky full of stories. and hanuman chalisa"
            }

        ]
    },


    {
        date: "31 OCTOBER",
        number: "04",
        title: "Until next time",
        subtitle: "One last morning in the mountains.",

        memories: [

            {
                type: "photo",
                image: "raghupurfortsunrise.jpg",
                title: "A new morning",
                date: "31 OCTOBER",
                storyTitle: "Good morning, mountains",
                message: "Waking up to the sunrise in the mountains. A beautiful way to begin our last day here.",
                alt: "Sunrise at Raghupur Fort",
                rotation: -2
            },

            {
                type: "photo",
                image: "raghupurfort.JPG",
                title: "Raghupur Fort",
                date: "31 OCTOBER",
                storyTitle: "One more look",
                message: "Getting to experience Raghupur Fort in the morning, after the previous evening's trek. Some places deserve a second look.",
                alt: "Raghupur Fort",
                rotation: 3
            },

            {
                type: "note",
                time: "31 OCTOBER · MORNING",
                text: "Time to descend from the camping area. Leaving behind the mountains, carrying back a few more memories."
            },

            {
                type: "photo",
                image: "raghupurfortmandir.jpg",
                title: "A little peace",
                date: "31 OCTOBER",
                storyTitle: "A moment at the mandir",
                message: "You may never know what I wished for but we are returning again their in a few years because my wish will be fulfilled.",
                alt: "Mandir at Raghupur Fort",
                rotation: -3
            },

            {
                type: "note",
                time: "31 OCTOBER · DAY",
                text: "A visit to the Sojha mandir, followed by Ghar Café 1964. One last little stop before beginning our journey back."
            },

            {
                type: "note",
                time: "31 OCTOBER · THE JOURNEY HOME",
                text: "Back to Oat Tunnel, and from there, the bus to Delhi. The trip was over, but the memories were coming home with us."
            }

        ]
    }

];


/* =========================================
   3. DOM ELEMENTS
========================================= */

const openDiaryButton = document.getElementById("openDiary");

const diary = document.getElementById("diary");

const chaptersContainer = document.getElementById("chapters");

const progressFill = document.getElementById("progressFill");

const progressText = document.getElementById("progressText");

const letterButton = document.getElementById("letterButton");

const letterContent = document.getElementById("letterContent");

const backToTopButton = document.getElementById("backToTop");


/* =========================================
   4. CREATE POLAROIDS
========================================= */

function createPolaroid(memory, index) {

    const wrapper = document.createElement("div");

    wrapper.className = "polaroid-wrap";

    if (memory.rotation !== undefined) {
        wrapper.style.transform =
            `rotate(${memory.rotation}deg)`;
    }

    const button = document.createElement("button");

    button.className = "polaroid";

    button.type = "button";

    button.setAttribute("aria-pressed", "false");

    button.setAttribute(
        "aria-label",
        `View the memory: ${memory.title}. Tap to flip.`
    );


    /* FRONT OF POLAROID */

    const front = document.createElement("div");

    front.className = "polaroid-face polaroid-front";


    const imageContainer = document.createElement("div");

    imageContainer.className = "polaroid-image";


    const img = document.createElement("img");

    img.src = photo(memory.image);

    img.alt = memory.alt || memory.title;

    img.loading = "lazy";

    img.decoding = "async";


    /*
       If an image fails to load, show a
       friendly placeholder instead of
       displaying a broken-image icon.
    */

    img.addEventListener("error", function () {

        imageContainer.classList.add("image-error");

        img.remove();

        const fallback = document.createElement("div");

        fallback.className = "image-fallback";

        fallback.innerHTML = `
            <span>♡</span>
            <small>PHOTO COMING SOON</small>
        `;

        imageContainer.appendChild(fallback);

    }, { once: true });


    imageContainer.appendChild(img);


    const caption = document.createElement("div");

    caption.className = "polaroid-caption";


    const title = document.createElement("strong");

    title.textContent = memory.title;


    const date = document.createElement("span");

    date.textContent = memory.date;


    caption.appendChild(title);

    caption.appendChild(date);


    const hint = document.createElement("div");

    hint.className = "tap-hint";

    hint.textContent = "TAP TO FLIP ↻";


    front.appendChild(imageContainer);

    front.appendChild(caption);

    front.appendChild(hint);


    /* BACK OF POLAROID */

    const back = document.createElement("div");

    back.className = "polaroid-face polaroid-back";


    const backTop = document.createElement("div");

    backTop.className = "back-top";

    backTop.textContent = "A LITTLE MEMORY · ♡";


    const backContent = document.createElement("div");

    backContent.className = "back-content";


    const backTitle = document.createElement("h3");

    backTitle.textContent = memory.storyTitle;


    const message = document.createElement("p");

    message.textContent = memory.message;


    backContent.appendChild(backTitle);

    backContent.appendChild(message);


    const footer = document.createElement("div");

    footer.className = "back-footer";

    footer.textContent = "With love, always ♡";


    back.appendChild(backTop);

    back.appendChild(backContent);

    back.appendChild(footer);


    button.appendChild(front);

    button.appendChild(back);


    /* FLIP INTERACTION */

    button.addEventListener("click", function () {

        const flipped = button.classList.toggle("flipped");

        button.setAttribute(
            "aria-pressed",
            String(flipped)
        );

        button.setAttribute(
            "aria-label",
            flipped
                ? `Close memory: ${memory.title}`
                : `View the memory: ${memory.title}. Tap to flip.`
        );

    });


    wrapper.appendChild(button);

    return wrapper;
}


/* =========================================
   5. CREATE TEXT NOTES
========================================= */

function createNote(memory) {

    const note = document.createElement("div");

    note.className = "memory-note";


    const time = document.createElement("span");

    time.textContent = memory.time;


    const text = document.createElement("p");

    text.textContent = memory.text;


    note.appendChild(time);

    note.appendChild(text);


    return note;
}


/* =========================================
   6. BUILD THE COMPLETE DIARY
========================================= */

function renderChapters() {

    chaptersContainer.innerHTML = "";


    chapters.forEach((chapter) => {

        const section = document.createElement("section");

        section.className = "chapter";

        section.id = `chapter-${chapter.number}`;


        /* Chapter heading */

        const heading = document.createElement("div");

        heading.className = "chapter-heading";


        const date = document.createElement("div");

        date.className = "chapter-date";

        date.textContent = chapter.date;


        const number = document.createElement("div");

        number.className = "chapter-number";

        number.textContent = chapter.number;


        const title = document.createElement("h2");

        title.textContent = chapter.title;


        const subtitle = document.createElement("p");

        subtitle.textContent = chapter.subtitle;


        heading.appendChild(date);

        heading.appendChild(number);

        heading.appendChild(title);

        heading.appendChild(subtitle);


        /* Memory collection */

        const grid = document.createElement("div");

        grid.className = "polaroid-grid";


        chapter.memories.forEach((memory, index) => {

            if (memory.type === "photo") {

                grid.appendChild(
                    createPolaroid(memory, index)
                );

            } else {

                grid.appendChild(
                    createNote(memory)
                );

            }

        });


        section.appendChild(heading);

        section.appendChild(grid);


        chaptersContainer.appendChild(section);

    });

}


/* =========================================
   7. OPEN THE DIARY
========================================= */

openDiaryButton.addEventListener("click", function () {

    diary.classList.remove("hidden");

    openDiaryButton.textContent = "Diary opened ♡";

    openDiaryButton.disabled = true;

    diary.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


/* =========================================
   8. JOURNEY PROGRESS
========================================= */

let ticking = false;

function updateProgress() {

    const scrollTop = window.scrollY;

    const scrollable =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = scrollable > 0
        ? Math.min(100, (scrollTop / scrollable) * 100)
        : 0;

    progressFill.style.width = `${progress}%`;


    const chapterElements =
        document.querySelectorAll(".chapter");

    let currentChapter = "THE BEGINNING";

    chapterElements.forEach((chapter) => {

        const rect = chapter.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.55) {

            const dateElement =
                chapter.querySelector(".chapter-date");

            if (dateElement) {
                currentChapter = dateElement.textContent;
            }

        }

    });

    if (letterContent && !letterContent.classList.contains("hidden")) {
        if (
            document.getElementById("finalLetter")
                .getBoundingClientRect().top < window.innerHeight * 0.7
        ) {
            currentChapter = "THE LAST PAGE";
        }
    }

    progressText.textContent = currentChapter;

    ticking = false;

}

window.addEventListener("scroll", function () {

    if (!ticking) {

        window.requestAnimationFrame(updateProgress);

        ticking = true;

    }

}, { passive: true });


/* =========================================
   9. OPEN THE FINAL LETTER
========================================= */

letterButton.addEventListener("click", function () {

    const isHidden = letterContent.classList.contains("hidden");

    letterContent.classList.toggle("hidden");

    letterButton.textContent = isHidden
        ? "Close your little letter ↑"
        : "Open your little letter ♡";


    if (isHidden) {

        setTimeout(() => {

            letterContent.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 100);

    }

});


/* =========================================
   10. BACK TO THE BEGINNING
========================================= */

backToTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   11. INITIALISE
========================================= */

renderChapters();

console.log(
    "Our Jibhi & Sojha diary is ready ♡"
);
