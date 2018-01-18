import Scene from '../lib/webgl_'
import { Animation } from '../lib/Animation'
import Smooth from '../lib/Smooth'

const scene = new Scene({
    el: document.querySelector('.container')
});

const smooth = new Smooth({
    smoothContainer: true,
    smoothSection: document.querySelector('.scroll__container')
});
smooth.init();
smooth.start()

window.onload = () => {
    document.body.classList.add('loaded')
    Animation.load();
}
