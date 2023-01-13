const starContainer = document.querySelector('.stars__container');
const stars = document.querySelectorAll('.star');
let finalRating = -1;

function colorStars(index) {
    for(let i = 0; i < stars.length; i++) {
        if(i <= index) {
            stars[i].classList.add("active");
        }
        else {
            stars[i].classList.remove("active");
        }
    }
}

stars.forEach((star, i) => {
    star.addEventListener("mouseenter", () => {
        colorStars(i);
    })

    star.addEventListener("click", () => {
        finalRating = i;
    })
})

starContainer.addEventListener("mouseleave", () => {
    colorStars(finalRating);
});