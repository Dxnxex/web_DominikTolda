
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
    const nav = document.getElementById('navigace');

    if (window.scrollY < lastScrollY) {
        nav.classList.remove('hide');

        } else {

        nav.classList.add('hide');
    }
    lastScrollY = window.scrollY;


        //Nechat zobrazené při <#
        if (window.scrollY <= 500) {
            nav.classList.remove('hide');
        }
});

