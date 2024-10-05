$('.landing-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    navText: ["<i class='fa-solid fa-angle-right'></i>", "<i class='fa-solid fa-angle-left'></i>"],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.testimonils-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    navText: ["<i class='fa-solid fa-angle-right'></i>", "<i class='fa-solid fa-angle-left'></i>"],
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
})






var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
  });


let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".three");
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}


let span = document.querySelector(".up");

window.onscroll = function() {
    console.log(this.scrollY);
    if (this.scrollY >= 300) {
        span.classList.add("show");
    } else {
        span.classList.remove("show");
    }
};

span.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}