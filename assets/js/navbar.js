const sections = document.querySelectorAll('section[id]');
const menuItems = document.querySelectorAll('.lista-menu_item');

// Distância do topo da viewport a partir da qual consideramos que "entramos" na seção (evita Home não marcar no topo)
const OFFSET_TOP_THRESHOLD = 120;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY || window.pageYOffset;
    let current = '';

    sections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        if (!sectionId) return;

        const sectionTop = section.offsetTop;

        // Se o scroll passou do início da seção (com threshold), esta seção é a atual
        if (scrollY + OFFSET_TOP_THRESHOLD >= sectionTop) {
            current = sectionId;
        }
    });

    // No topo da página: se nenhuma seção “pegou”, forçar a primeira (Home)
    if (!current && sections.length > 0) {
        current = sections[0].getAttribute('id') || 'home';
    }

    menuItems.forEach((li) => {
        li.classList.remove('active');
        const a = li.querySelector('a');
        if (a && a.getAttribute('href') === `#${current}`) {
            li.classList.add('active');
        }
    });
});
