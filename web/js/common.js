//Start-Fade in

gsap.fromTo(".start_fade-in",
    { opacity: 0 }, //FROM
    {
        delay: 0.5,
        opacity: 1,
        duration: 1.2,
    } //TO
);

//Start-Float in

gsap.fromTo(".start_float-in",
    {
        opacity: 0,
        y: 30,
    },
    {
        delay: 0.5,
        opacity: 1,
        y: 0,
        duration: 1,
    }
);

//Scroll trigger - Fade in (Section)

gsap.fromTo(".section_scroll_fade-in",
    { opacity: 0 },
    {
        opacity: 1,
        duration: 1.2,
        scrollTrigger: {
            trigger: ".section_scroll_fade-in",
            start: "top 70%",
        }
    }
);