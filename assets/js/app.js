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


const teamMembers = document.querySelectorAll('.row .team-member');
const teamModal = document.querySelector('.team-modal');
const modalClose = document.querySelector('.modal-close');
let memberInfo = {};

teamMembers.forEach(member => {
    member.addEventListener('click', () => {
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

