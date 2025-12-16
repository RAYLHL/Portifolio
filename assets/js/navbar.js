
const sections = document.querySelectorAll('section');
const menuItems = document.querySelectorAll('.lista-menu_item');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    menuItems.forEach(li => {
        li.classList.remove('active');
        const a = li.querySelector('a');
        if (a.getAttribute('href') === `#${current}`) {
            li.classList.add('active');
        }
    });
});
