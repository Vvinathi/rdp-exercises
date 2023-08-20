const accordionHeaders = document.querySelectorAll(".accordion-header");
const accordionContents = document.querySelectorAll(".accordion-content");

accordionHeaders.forEach((header, index) => {
  header.addEventListener("click", () => {
    header.classList.toggle("active");
    
    
    const arrow = header.querySelector(".accordion-arrow");
    arrow.classList.toggle("rotate-180");
    accordionContents[index].classList.toggle("hidden");
  });
});
