let btn = document.getElementById('btn');

window.onscroll = function () {
    if (scrollY >= 200) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none ';

    }
} 
btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior:"smooth"
    })
}

let scrollTimeout;

window.addEventListener('scroll', () => {
    document.body.classList.add('show-scrollbar'); 


    clearTimeout(scrollTimeout);

   
    scrollTimeout = setTimeout(() => {
        document.body.classList.remove('show-scrollbar');
    }, 1500);
});



