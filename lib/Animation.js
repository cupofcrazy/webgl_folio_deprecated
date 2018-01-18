import 'gsap'

export const Animation = {
    bio: document.querySelectorAll('.bio'),
    skills: document.querySelectorAll('.skills'),
    introTl() {
        let tl = new TimelineMax();
        tl.from(this.bio, 1, {
            y: 30,
            autoAlpha: 0,
            ease: Quart.ease
        })
        tl.from(this.skills, 1, {
            y: 30,
            autoAlpha: 0,
            ease: Quart.ease
        })
    },
    load() {
        let loader = document.querySelector('.loader')
        let main = document.querySelector('#main')
        let char = Array.from(document.querySelectorAll('.text__load span.char'));
        let canvas = document.querySelector('canvas')
        let tl = new TimelineMax({ delay: 1 });

        tl.staggerFrom(char, 1, { y: 20, autoAlpha: 0, ease: Cubic.easeInOut }, .1)
            .staggerTo(char, 1, { y: -20, autoAlpha: 0, ease: Cubic.easeInOut }, .1, 2)
            .from(canvas, 1, { autoAlpha: 0 })
            .from(main, 1, { autoAlpha: 0 })
            .to(loader, 1, { autoAlpha: 0 })

    }
}
   
