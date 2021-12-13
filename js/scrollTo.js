const linkDown = document.querySelector('.link--down');
const secondSection = document.querySelector('.section--about');
const secondSectionY = secondSection.offsetTop;

let inervalID;

const trackScroll = () => {
    window.scrollBy(0, 30)
    if (window.pageYOffset >= secondSectionY) {
        clearInterval (intervalID)
    }
}

linkDown.addEventListener('click', (e) => {
    e.preventDefault()
    intervalID = setInterval(trackScroll, 10)
})