const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentlyActive = 1;

next.addEventListener('click', () => {
    currentlyActive++;
    if(currentlyActive > circles.length) {
        currentlyActive = circles.length;
}
update()
})

prev.addEventListener('click', () => {
    currentlyActive--;
    if(currentlyActive < circles.length) {
        currentlyActive = circles.length;
    }
    update()
})

function update() {
    circles.forEach((circle,idx) =>{
        if(idx < currentlyActive) {
            circle.classList.add('active')
    } else {
        circle.classList.remove('active')
    }
})

    const actives = document.querySelectorAll('.active');

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if(currentlyActive) {
        prev.disabled = true;
    } else if ( currentlyActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }

}
