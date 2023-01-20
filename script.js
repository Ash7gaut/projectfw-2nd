// Body 
$(".change").on("click", function () {
    if ($("body").hasClass("dark")) {
        $("body").removeClass("dark");
        $(".change").text("LIGHT");
        $(".star_orange").attr("src", "images/star.svg")
    } else {
        $("body").addClass("dark");
        $(".change").text("DARK");
        $(".star_orange").attr("src", "images/star_orange.svg")
    }
});


gsap.fromTo("#text-white", {
    opacity: 0,
    x: -1000,
}, {
    x: 0,
    opacity: 1,
    duration: 2,
})

gsap.fromTo(".p-white", {
    opacity: 0,
    x: -1000,
}, {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 0.7,
})

gsap.fromTo(".btn-try", {
    opacity: 0,
    x: -1000,
}, {
    x: 0,
    opacity: 1,
    duration: 2,
    delay: 0.7,
})


gsap.fromTo(".news", {
    opacity: 0,
    y: 100,
}, {
    y: 0,
    duration: 1.5,
    opacity: 1,
    delay: 3,
    scrollTrigger: {
        trigger: ".p-white",
        start: "top 80%",
        end: "bottom 80%",


    },

})


// Partie Actualité


gsap.to(".rose", {
    autoAlpha: 1,
    transition: 1.5,
    scrollTrigger: {
        trigger: ".rose",
        // markers: true,
        start: "top 75%",
        end: "bottom 90%",
    }

})


gsap.to(".godance", {
    autoAlpha: 1,
    transition: 1.5,
    scrollTrigger: {
        trigger: ".rose",
        // markers: true,
        start: "top 75%",
        end: "bottom 90%",
    }

})


// Partie Encadré par les meilleurs


gsap.fromTo(".thebest", {
    opacity: 0,
    y: -550,
}, {
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".photo-1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})



gsap.fromTo(".photo-1, .photo-2, .photo-3", {
    opacity: 0,
    x: -450,
}, {
    x: 0,
    duration: 1.5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".photo-6",
        start: "top 80%",
        end: "bottom 80%",

    },

})



gsap.fromTo(".photo-4, .photo-5, .photo-6", {
    opacity: 0,
    x: 450,
}, {
    x: 0,
    duration: 1.5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".photo-9",
        start: "top bottom",
        end: "bottom 80%",

    },
})

gsap.fromTo(".photo-7, .photo-8, .photo-9", {
    opacity: 0,
    x: -450,
}, {
    x: 0,
    duration: 1.5,
    opacity: 1,
    scrollTrigger: {
        trigger: ".photo-9",
        start: "top 80%",
        end: "bottom 80%",

    },

})


// Partie Choisis ton plan

document.addEventListener("DOMContentLoaded", function (event) {
    gsap.to("#tablet", {

        motionPath: {
            path: "#svg path",
            align: "#svg path",
            alignOrigin: [0.5, 0.5],
        },
        ease: "none",
        scrollTrigger: {
            trigger: "#tablet",
            start: "top 65%",
            end: "bottom 90%",
            scrub: 1,
        },
    });
});




const timeline = gsap.timeline({ repeat: -1 });
timeline.to(".bgblue", {
    scale: 1.05,
    duration: 3.5,
})
timeline.to(".bgblue", {
    scale: 1,
    duration: 3.5,
})



gsap.to(".bgblue", {
    y: -50,
    scrollTrigger: {
        trigger: ".starta",
        start: "top 60%",
        end: "bottom 30%",
        scrub: 1,
    }

})


gsap.to("#monthly", {
    backgroundColor: "#E1E1E1",
    transition: 5,

})



// Partie Vibz aussi sur mobile


gsap.to(".vibzmobile", {
    autoAlpha: 1,
    duration: 4,
    scrollTrigger: {
        trigger: ".vibzmobile"
    }

})

gsap.fromTo(".apples", {
    x: -250,
}, {
    x: 0,
    duration: 1.8,
    scrollTrigger: {
        trigger: ".apples",
        start: "top 80%",
        end: "bottom 80%",
    },

})

gsap.fromTo(".googlep", {
    x: 250,
}, {
    x: 0,
    duration: 1.8,
    scrollTrigger: {
        trigger: ".apples",
        start: "top 80%",
        end: "bottom 80%",
    },
})



gsap.fromTo(".undertitle", {
    opacity: 0,
    x: 50,
    y: 50,
}, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    scrollTrigger: {
        trigger: "#monthly",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo(".choosetitle, #trigger_undertitle", {
    opacity: 1,
    y: -75,
}, {
    y: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: "#trigger_undertitle",
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
    },
})


gsap.fromTo(".choosetitle, #trigger_undertitle", {
    opacity: 1,
    y: -75,
}, {
    y: 0,
    opacity: 0,
    scrollTrigger: {
        trigger: "#trigger_undertitle",
        start: "top 50%",
        end: "bottom top",
        scrub: 1,
    },
})



// Logo entreprise + Avis/Commentaires




gsap.to(".logoentr", {
    autoAlpha: 1,
    duration: 4.5,
    scrollTrigger: {
        trigger: ".logoentr"
    }

})

// Premier commentaire/avis

gsap.fromTo(".comm1", {
    opacity: 0,
    y: 300,
}, {
    y: 0,
    opacity: 1,
    duration: 1.3,
    scrollTrigger: {
        trigger: ".trigger-comm",
    }
})


gsap.fromTo("#star1", {
    opacity: 0,
    x: -50,
    y: -50,
}, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 0.5,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star2", {
    opacity: 0,
    x: -50,
    y: -50,
}, {
    x: 0,
    y: 0,
    duration: 1.2,
    delay: 0.8,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star3", {
    opacity: 0,
    x: -50,
    y: -50,
}, {
    x: 0,
    y: 0,
    duration: 1.2,
    delay: 1.1,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star4", {
    opacity: 0,
    x: -50,
    y: -50,
}, {
    x: 0,
    y: 0,
    duration: 1.2,
    delay: 1.4,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star5", {
    opacity: 0,
    x: -50,
    y: -50,
}, {
    x: 0,
    y: 0,
    duration: 1.2,
    delay: 1.7,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})


// Deuxieme commentaire/avis

gsap.fromTo(".comm2", {
    opacity: 0,
    y: 300,
}, {
    y: -100,
    delay: 0.4,
    opacity: 1,
    duration: 1.3,
    scrollTrigger: {
        trigger: ".trigger-comm",
    }
})

gsap.fromTo("#star6", {
    opacity: 0,
    x: 72,
}, {
    x: 0,
    duration: 2,
    delay: 1.2,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star7", {
    opacity: 0,
    x: 36,
}, {
    x: 0,
    duration: 2,
    delay: 1.2,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star8", {
    opacity: 0,
    x: 0,
}, {
    x: 0,
    duration: 1.5,
    delay: 1.2,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})


gsap.fromTo("#star9", {
    opacity: 0,
    x: -36,
}, {
    x: 0,
    duration: 2,
    delay: 1.2,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star10", {
    opacity: 0,
    x: -72,
}, {
    x: 0,
    duration: 2,
    delay: 1.2,
    opacity: 1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})


// Troisième commentaire/avis

gsap.fromTo(".comm3", {
    opacity: 0,
    y: 300,
}, {
    y: 0,
    delay: 0.7,
    opacity: 1,
    duration: 1.3,
    scrollTrigger: {
        trigger: ".trigger-comm",
    }
})

gsap.fromTo("#star11", {
    opacity: 0,
    x: 50,
    y: -50,
}, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 2.4,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star12", {
    opacity: 0,
    x: 50,
    y: -50,
}, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 2.1,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star13", {
    opacity: 0,
    x: 50,
    y: -50,
}, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 1.8,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star14", {
    opacity: 0,
    x: 50,
    y: -50,
}, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: 1.2,
    delay: 1.5,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star15", {
    opacity: 0,
    x: 50,
    y: -50,
}, {
    x: 0,
    y: 0,
    opacity: 1,
    delay: 1.2,
    duration: 1.2,
    scrollTrigger: {
        trigger: ".trigger-comm",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})