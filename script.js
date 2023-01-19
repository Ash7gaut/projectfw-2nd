
// Partie Home


gsap.fromTo(".news", {
    opacity:0,
    y: 100,
}, {
    y: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".news",
        start: "top 80%",
        end: "bottom 80%",


    },

})


// Partie Actualité


gsap.to(".rose", {
    autoAlpha:1,
    transition:1.5,
    scrollTrigger: {
        trigger: ".rose",
        // markers: true,
        start: "top 75%",
        end: "bottom 90%",
    }

})

gsap.to(".godance", {
    autoAlpha:1,
    transition:1.5,
    scrollTrigger: {
        trigger: ".rose",
        // markers: true,
        start: "top 75%",
        end: "bottom 90%",
    }

})


// Partie Encadré par les meilleurs


gsap.fromTo(".thebest", {
    opacity:0,
    y:-550,
}, {
    y: 0,
    opacity:1,
    duration:1.2,
    scrollTrigger: {
        trigger: ".photo-1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})



gsap.fromTo(".photo-1", {
    opacity:0,
    x: -450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-6",
        start: "top 80%",
        end: "bottom 80%",

    },

})

gsap.fromTo(".photo-2", {
    opacity:0,
    x: -450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-6",
        start: "top 80%",
        end: "bottom 80%",

    },
 

})

gsap.fromTo(".photo-3", {
    opacity:0,
    x: -450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-6",
        start: "top 80%",
        end: "bottom 80%",

    },
})

gsap.fromTo(".photo-4", {
    opacity:0,
    x: 450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-9",
        start: "top bottom",
        end: "bottom 80%",

    },
})

gsap.fromTo(".photo-5", {
    opacity:0,
    x: 450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-9",
        start: "top bottom",
        end: "bottom 80%",

    },
})

gsap.fromTo(".photo-6", {
    opacity:0,
    x: 450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-9",
        start: "top bottom",
        end: "bottom 80%",

    },
})

gsap.fromTo(".photo-7", {
    opacity:0,
    x: -450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-9",
        start: "top bottom",
        end: "bottom 80%",

    },
})

gsap.fromTo(".photo-8", {
    opacity:0,
    x: -450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-9",
        start: "top bottom",
        end: "bottom 80%",

    },
})

gsap.fromTo(".photo-9", {
    opacity:0,
    x: -450,
}, {
    x: 0,
    duration:1.5, 
    opacity:1,
    scrollTrigger: {
        trigger: ".photo-9",
        start: "top bottom",
        end: "bottom 80%",

    },
})


// Partie Choisis ton plan


gsap.fromTo(".choosetitle", {
    opacity:0,
    x:-50,
    y:-50,
}, {
    x: 0,
    y: 0,
    opacity:1,
    duration:1.2,
    scrollTrigger: {
        trigger: "#mensuel",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.to(".bgblue", {
    scale:1.14,
    transition:4.5,
    scrollTrigger: {
        trigger: ".choosetitle",
        // markers: true,
        start: "top 75%",
        end: "bottom 90%",
    }

})

gsap.to("#monthly", {
    backgroundColor: "#E1E1E1",
    transition:5,

})


// Partie Vibz aussi sur mobile


gsap.to(".vibzmobile", {
    autoAlpha: 1,
    duration:4,
    scrollTrigger: {
        trigger: ".vibzmobile"
    }

})

gsap.fromTo(".apples", {
    x: -250,
}, {
    x: 0,
    duration:2.5, 
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
    duration:2.5, 
    scrollTrigger: {
        trigger: ".apples",
        start: "top 80%",
        end: "bottom 80%",
    },
})



gsap.to(".undertitle1", {
    autoAlpha: 1,
    duration:4,
    scrollTrigger: {
        trigger: ".vibzmobile"
    }

})


gsap.fromTo(".undertitle", {
    opacity:0,
    x:50,
    y:50,
}, {
    x: 0,
    y: 0,
    opacity:1,
    duration:1.2,
    scrollTrigger: {
        trigger: "#mensuel",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})


// Logo entreprise + Avis/Commentaires


gsap.to(".logoentr", {
    autoAlpha: 1,
    duration:4.5,
    scrollTrigger: {
        trigger: ".logoentr"
    }

})

gsap.fromTo("#star1", {
    opacity:0,
    x:-50,
    y:-50,
}, {
    x: 0,
    y: 0,
    opacity:1,
    duration:1.2,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star2", {
    opacity:0,
    x:-50,
    y:-50,
}, {
    x: 0,
    y: 0,
    duration:1.2,
    delay:0.3,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star3", {
    opacity:0,
    x:-50,
    y:-50,
}, {
    x: 0,
    y: 0,
    duration:1.2,
    delay:0.6,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star4", {
    opacity:0,
    x:-50,
    y:-50,
}, {
    x: 0,
    y: 0,
    duration:1.2,
    delay:0.9,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star5", {
    opacity:0,
    x:-50,
    y:-50,
}, {
    x: 0,
    y: 0,
    duration:1.2,
    delay:1.2,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star6", {
    opacity:0,
    x:72,
}, {
    x: 0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star7", {
    opacity:0,
    x:36,
}, {
    x: 0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star8", {
    opacity:0,
    x:0,
}, {
    x: 0,
    duration:1.5,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})


gsap.fromTo("#star9", {
    opacity:0,
    x:-36,
}, {
    x: 0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star10", {
    opacity:0,
    x:-72,
}, {
    x: 0,
    duration:2,
    opacity:1,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star11", {
    opacity:0,
    x:50,
    y:-50,
}, {
    x: 0,
    y: 0,
    opacity:1,
    duration:1.2,
    delay:1.2,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star12", {
    opacity:0,
    x:50,
    y:-50,
}, {
    x: 0,
    y: 0,
    opacity:1,
    duration:1.2,
    delay:0.9,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star13", {
    opacity:0,
    x:50,
    y:-50,
}, {
    x: 0,
    y: 0,
    opacity:1,
    duration:1.2,
    delay:0.6,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star14", {
    opacity:0,
    x:50,
    y:-50,
}, {
    x: 0,
    y: 0,
    opacity:1,
    duration:1.2,
    delay:0.3,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})

gsap.fromTo("#star15", {
    opacity:0,
    x:50,
    y:-50,
}, {
    x: 0,
    y: 0,
    opacity:1,
    duration:1.2,
    scrollTrigger: {
        trigger: ".comm1",
        start: "top bottom",
        end: "bottom 80%",
        // markers: true,
    }
})