const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const faderInAll = document.querySelectorAll('.fade-in')
const faderUpAll = document.querySelectorAll('.fade-up')

const appearOptions = {
    threshold: 1,
    rootMargin: '0px 0px -50px 0px'
};


const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        }else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    })
}, appearOptions);

faderInAll.forEach(fader => {
    appearOnScroll.observe(fader);
})

faderUpAll.forEach(fader => {
    appearOnScroll.observe(fader);
})



navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})
