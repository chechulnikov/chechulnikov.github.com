function startParticles () {
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
                image: { src: "img/github.svg", width: 100, height: 100 }
            },
            opacity: {
                value: 0.3866823443998136,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 2,
                random: true,
                anim: {
                    enable: true,
                    speed: 4.795204795204795,
                    size_min: 0.1,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 112.2388442605866,
                color: "#ffffff",
                opacity: 0.04008530152163807,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "top",
                random: true,
                straight: true,
                out_mode: "out",
                bounce: false,
                attract: { enable: true, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "bubble" },
                onclick: { enable: false, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 0.1 } },
                bubble: {
                    distance: 167.83216783216784,
                    size: 2,
                    duration: 1.118881118881119,
                    opacity: 1,
                    speed: 3
                },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

}
