AOS.init();

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


