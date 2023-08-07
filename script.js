const burger = document.getElementById('header__burger');
let header = document.getElementById('header');

burger.addEventListener('click', function(){
  header.classList.toggle('active')
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.content__items');

for (let elm of elements) {
  observer.observe(elm);
}
