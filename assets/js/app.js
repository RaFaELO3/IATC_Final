/*======================================
    Animation
======================================*/

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {       
            entry.target.classList.add(entry.target.dataset.anime)
            setTimeout(() => {
                entry.target.classList.remove('animation-start')
            },1200)
        }
    });
});

const animations = document.querySelectorAll('.animation-start'); 

animations.forEach(animation => {
    observer.observe(animation);
})

/*======================================
    Welcome Slider
======================================*/

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function showSlides(n) {
    var slides = document.getElementsByClassName("slide");

    if (n > slides.length) {
        slideIndex = 1
    }
    else if (n < 1) {
        slideIndex = slides.length
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("show");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("show");
}

/*======================================
    Counters
======================================*/

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('value');
        const data = +counter.innerText;
        const time = 0.0003;

        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);
        } else {
            counter.innerText = value;
        }
    }
    animate();
});

/*======================================
    Modal
======================================*/

const teamMembers = document.querySelectorAll('.row .team-member');
const teamModal = document.querySelector('.team-modal');
const modalClose = document.querySelector('.modal-close');

teamMembers.forEach(member => {
    member.children[5].addEventListener('click', () => {
        document.querySelector('.team-modal img').src = member.children[0].children[0].src;
        document.querySelector('.team-modal .team-name').innerText = member.children[1].innerText;
        document.querySelector('.team-modal .team-job').innerText = member.children[2].innerText;
        document.querySelector('.team-modal .description').innerText = member.children[3].innerText;
        toggleModal();
    })
})

modalClose.addEventListener('click', () => {
    toggleModal();
})

function toggleModal() {
    if (document.body.style.overflow != 'hidden') {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
    teamModal.classList.toggle('modal-active');
}