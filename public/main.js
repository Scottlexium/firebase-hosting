const nav = document.getElementById('nav_div');
window.addEventListener('scroll', (e)=>{
    if (window.pageYOffset > 5) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
})