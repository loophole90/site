// для плавних появлень div/head
let Header = document.getElementById("header")

let options = {
    root: null,
    rootMargin: '5px',
    threshold: 0.5
}

let callback = function(ccc, observer){
    ccc.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }
    });
}

let observer = new IntersectionObserver(callback, options);

let targets = document.querySelectorAll('.anim');
targets.forEach(target => {
    observer.observe(target);
});
