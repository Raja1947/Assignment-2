document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".top-menu");
  const closeIcon = document.querySelector(".top-close");
  const nav = document.querySelector(".top-nav-list");
  const menuIcon2 = document.querySelector(".bottom-menu");
  const closeIcon2 = document.querySelector(".bottom-close");
  const nav2 = document.querySelector(".bottom-item");

  menuIcon.addEventListener("click", () => {
    nav.classList.add("active");
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
  });

  closeIcon.addEventListener("click", () => {
    nav.classList.remove("active");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  });
  menuIcon2.addEventListener("click", () => {
    nav2.classList.add("active");
    menuIcon2.style.display = "none";
    closeIcon2.style.display = "block";
  });

  closeIcon2.addEventListener("click", () => {
    nav2.classList.remove("active");
    menuIcon2.style.display = "block";
    closeIcon2.style.display = "none";
  });
});


new Splide('.splide', {
  type   : 'loop', 
  perPage: 3, 
  perMove: 1, 
  gap    : '20px', 
  autoplay: true, 
  pauseOnHover: true, 
  breakpoints: {
      1024: { perPage: 2 }, 
      600: { perPage:  1} 
  }
}).mount();