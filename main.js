import "./output.css";
const swiper_client = new Swiper(".swiper_pengguna", {
  loop: true,
  centeredSlides: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 100,
    },
  },
  autoplay: {
    delay: 5000,
  },
  scale: 2,
  navigation: {
    nextEl: ".swiper_pengguna_button_next",
    prevEl: ".swiper_pengguna_button_prev",
  },
  pagination: {
    el: ".swiper_pengguna_pagination",
    clickable: true,
  },
});

const testimoni_client = [
  {
    name: "alan-lee",
    desk: `Analisis kinerja keuangan yang disediakan oleh layanan ini sungguh luar biasa. Saya dapat dengan cepat mengidentifikasi tren dan mengambil tindakan yang diperlukan. Hal ini membantu perusahaan kami berkembang lebih efisien.<b>"PT Jaya Bersama - Alan lee”</b>`,
  },
  {
    name: "anisa-wati",
    desk: `Analisis kinerja keuangan yang disediakan oleh layanan ini sungguh luar biasa. Saya dapat dengan cepat mengidentifikasi tren dan mengambil tindakan yang diperlukan. Hal ini membantu perusahaan kami berkembang lebih efisien.<b>"PT Jaya Bersama - Anisa Wati"</b>`,
  },
  {
    name: "jhon-doe",
    desk: `Analisis kinerja keuangan yang disediakan oleh layanan ini sungguh luar biasa. Saya dapat dengan cepat mengidentifikasi tren dan mengambil tindakan yang diperlukan. Hal ini membantu perusahaan kami berkembang lebih efisien.<b>"PT Jaya Bersama - Jhon Doe"</b>`,
  },
  {
    name: "tomy-william",
    desk: `Analisis kinerja keuangan yang disediakan oleh layanan ini sungguh luar biasa. Saya dapat dengan cepat mengidentifikasi tren dan mengambil tindakan yang diperlukan. Hal ini membantu perusahaan kami berkembang lebih efisien.<b>"PT Jaya Bersama - Tomy Wiliam"</b>`,
  },
];

swiper_client.on("slideChange", function () {
  const p = document.querySelector(".swiper_pengguna__text");
  // Mendapatkan indeks slide yang aktif
  var activeIndex = swiper_client.activeIndex;

  // Mendapatkan element HTML dari slide yang aktif
  var activeSlide = swiper_client.slides[activeIndex];
  // Lakukan sesuatu dengan slide yang aktif
  testimoni_client.forEach((data) => {
    if (activeSlide.getAttribute("data-nama") === data.name) {
      p.innerHTML = data.desk;
    }
  });
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Nabar Menu
const menu = document.querySelector(".navbar__menubar");
const menu_list = document.querySelector(".navbar__menu_mobile");

menu.addEventListener("click", () => {
  menu_list.classList.toggle("active");
});

const eduworkhover = document.getElementById("eduworkhover");
const hisochover = document.getElementById("hisochover");
const upscalehover = document.getElementById("upscalehover");
const siskohover = document.getElementById("siskohover");
const mydoithover = document.getElementById("mydoithover");

const defaulthoverkonten = document.getElementById("defaulthoverkonten");
const eduworkhoverkonten = document.getElementById("eduworkhoverkonten");
const hisochoverkonten = document.getElementById("hisochoverkonten");
const upscalehoverkonten = document.getElementById("upscalehoverkonten");
const siskohoverkonten = document.getElementById("siskohoverkonten");
const mydoithoverkonten = document.getElementById("mydoithoverkonten");

eduworkhover.classList.add("bg-gray-200");

eduworkhover.addEventListener("mouseover", function () {
  eduworkhoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  hisochoverkonten.classList.add("hidden");
  upscalehoverkonten.classList.add("hidden");
  siskohoverkonten.classList.add("hidden");
  mydoithoverkonten.classList.add("hidden");
  eduworkhover.classList.add("bg-gray-200");
  hisochover.classList.remove("bg-gray-200");
  upscalehover.classList.remove("bg-gray-200");
  siskohover.classList.remove("bg-gray-200");
  mydoithover.classList.remove("bg-gray-200");
});
// eduworkhover.addEventListener("mouseout", function () {
//   eduworkhoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });

hisochover.addEventListener("mouseover", function () {
  hisochoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  eduworkhoverkonten.classList.add("hidden");
  upscalehoverkonten.classList.add("hidden");
  siskohoverkonten.classList.add("hidden");
  mydoithoverkonten.classList.add("hidden");
  eduworkhover.classList.remove("bg-gray-200");
  hisochover.classList.add("bg-gray-200");
  upscalehover.classList.remove("bg-gray-200");
  siskohover.classList.remove("bg-gray-200");
  mydoithover.classList.remove("bg-gray-200");
});
// hisochover.addEventListener("mouseout", function () {
//   hisochoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });

upscalehover.addEventListener("mouseover", function () {
  upscalehoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  eduworkhoverkonten.classList.add("hidden");
  hisochoverkonten.classList.add("hidden");
  siskohoverkonten.classList.add("hidden");
  mydoithoverkonten.classList.add("hidden");
  eduworkhover.classList.remove("bg-gray-200");
  hisochover.classList.remove("bg-gray-200");
  upscalehover.classList.add("bg-gray-200");
  siskohover.classList.remove("bg-gray-200");
  mydoithover.classList.remove("bg-gray-200");
});
// upscalehover.addEventListener("mouseout", function () {
//   upscalehoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });

siskohover.addEventListener("mouseover", function () {
  siskohoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  eduworkhoverkonten.classList.add("hidden");
  upscalehoverkonten.classList.add("hidden");
  hisochoverkonten.classList.add("hidden");
  mydoithoverkonten.classList.add("hidden");
  eduworkhover.classList.remove("bg-gray-200");
  hisochover.classList.remove("bg-gray-200");
  upscalehover.classList.remove("bg-gray-200");
  siskohover.classList.add("bg-gray-200");
  mydoithover.classList.remove("bg-gray-200");
});
// siskohover.addEventListener("mouseout", function () {
//   siskohoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });

mydoithover.addEventListener("mouseover", function () {
  mydoithoverkonten.classList.remove("hidden");
  defaulthoverkonten.classList.remove("flex");
  defaulthoverkonten.classList.add("hidden");
  eduworkhoverkonten.classList.add("hidden");
  upscalehoverkonten.classList.add("hidden");
  siskohoverkonten.classList.add("hidden");
  hisochoverkonten.classList.add("hidden");
  eduworkhover.classList.remove("bg-gray-200");
  hisochover.classList.remove("bg-gray-200");
  upscalehover.classList.remove("bg-gray-200");
  siskohover.classList.remove("bg-gray-200");
  mydoithover.classList.add("bg-gray-200");
});
// mydoithover.addEventListener("mouseout", function () {
//   mydoithoverkonten.classList.add("hidden");
//   defaulthoverkonten.classList.add("flex");
//   defaulthoverkonten.classList.remove("hidden");
// });
