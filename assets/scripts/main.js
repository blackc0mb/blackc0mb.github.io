//Show-hide declarations
let show_about = document.getElementById('text-about'),
link_about = document.getElementById('link-about'),
about_divider = document.getElementById("about-divider");

//Toggle language declarations
//let check_lang = document.getElementById("check-lang");
let link_toggle_lang = document.getElementById("link-toggle-lang");

let label_en = {
   l_blog: "Blog & Notes",
   l_password: "Password Generator",
   l_about: "About",
   l_about_content: "Hello, my name is Tonatiuh Morales and currently I work mainly with SAP platforms for several years, also I'm a developer in my free time (at least I try it). </br>Thanks for visiting!"
};

let label_es = {
   l_blog: "Notas / Blog",
   l_password: "Generador de contraseñas",
   l_about: "Sobre mi",
   l_about_content: "Hola, mi nombre es Tonatiuh Morales y actualmente trabajo principalmente con plataformas SAP desde hace ya varios años, también le hago un poco al desarrollo de software en mi tiempo libre (al menos lo intento).</br>Gracias por visitar!"
};

//Show-hide de about section
show_about.classList.add('visuallyhidden');

link_about.addEventListener('click', function () {
   if (show_about.classList.contains('hidden')) {
      show_about.classList.remove('hidden');
      about_divider.classList.remove('hidden');
      setTimeout(function () {
         show_about.classList.remove('visuallyhidden');
      }, 20);
   } else {
      show_about.classList.add('visuallyhidden');
      show_about.addEventListener('transitionend', function (e) {
         show_about.classList.add('hidden');
         about_divider.classList.add('hidden');
      }, {
         capture: false,
         once: true,
         passive: false
      });
   }
}, false);

//Toggle language function
// check_lang.addEventListener('click', function () {
//    let lang = {};
//    let myLabels = document.querySelectorAll("[id^='l_']");
//    let current_lang = "";

//    current_lang = check_lang.checked === true ? "en" : "es";

//    switch (current_lang) {
//       case "es":
//          lang = label_es;
//          break;

//       case "en":
//          lang = label_en;
//          break;
//    };

//    for (let i = 0; i < myLabels.length; i++) {
//       myLabels[i].innerHTML = lang[myLabels[i].id];
//    };

// });

link_toggle_lang.addEventListener('click', function () {
   let lang = {};
   let myLabels = document.querySelectorAll("[id^='l_']");
   let current_lang = "es";

   current_lang = link_toggle_lang.innerHTML.includes("English") === true ? "en" : "es";

   switch (current_lang) {
      case "es":
         link_toggle_lang.innerHTML = 'English';
         lang = label_es;
         break;

      case "en":
         link_toggle_lang.innerHTML = 'Español';
         lang = label_en;
         break;
   };

   for (let i = 0; i < myLabels.length; i++) {
      myLabels[i].innerHTML = lang[myLabels[i].id];
   };

});

// const show_about = document.getElementById("text-about");
// const link_about = document.getElementById("link-about");
// const about_divider = document.getElementById("about-divider");

// show_about.style.display = "none";
// about_divider.style.display = "none";

// link_about.addEventListener('click', (ev) => {
//    if (show_about.style.display === "none") {
//       show_about.style.display = "block";
//       about_divider.style.display = "block";
      
//       show_about.style.transition = "all 1s ease-in-out";
//    } else {
//       show_about.style.display = "none";
//       about_divider.style.display = "none";      
//    }
// });