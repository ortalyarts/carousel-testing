const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset; 
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    // Setting margin to the slide
    let margin = 7.5;
    let newMargin = (35.625 * (newIndex - 1) + margin)*(-1);
    //console.log(newMargin+'rem');
    slides.style.marginLeft = newMargin+'rem';

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  })
})
