$(".menu__btn").on("click", function () {
  $(this).toggleClass("active").next().toggleClass("active")
});
let $slideItems = $(".carousel-slide"),
  $nextBtn = $(".next.carousel-control"),
  $prevBtn = $(".prev.carousel-control"),
  currentSlide = 0,
  gotoSlide = e => {
    $slideItems[currentSlide].classList.toggle("active"), currentSlide = (e + $slideItems.length) % $slideItems.length, $slideItems[currentSlide].classList.toggle("active")
  },
  nextSlide = () => {
    gotoSlide(currentSlide + 1)
  },
  prevSlide = () => {
    gotoSlide(currentSlide - 1)
  },
  slideInterval = setInterval(nextSlide, 5e3),
  nextClickHandler = () => {
    nextSlide(), clearInterval(slideInterval), slideInterval = setInterval(nextSlide, 5e3)
  },
  prevClickHandler = () => {
    prevSlide(), clearInterval(slideInterval), slideInterval = setInterval(nextSlide, 5e3)
  };
$nextBtn.on("click", nextClickHandler), $prevBtn.on("click", prevClickHandler);