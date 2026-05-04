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

//Scroll trigger - Bounce in (Card)

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll_sequence_bounce-in",
        start: "top 70%",
    }
});

tl.fromTo(".scroll_sequence_bounce-in",
    {
        opacity: 0,
        y: 40,
    },
    {
        opacity: 1,
        y: 0,
        ease: "power3.out",
        stagger: 0.6,
    }
);