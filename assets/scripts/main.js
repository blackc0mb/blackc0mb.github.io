//Show-hide declarations
let show_about = document.getElementById('text-about'),
link_about = document.getElementById('link-about'),
about_divider = document.getElementById("about-divider")

//Toggle language declarations
let link_toggle_lang = document.getElementById("l_link_toggle_lang")

//Show-hide de about section
show_about.classList.add('visuallyhidden')

link_about.addEventListener('click', function () {
   if (show_about.classList.contains('hidden')) {
      show_about.classList.remove('hidden')
      about_divider.classList.remove('hidden')
      setTimeout(function () {
         show_about.classList.remove('visuallyhidden')
      }, 20)
   } else {
      show_about.classList.add('visuallyhidden')
      show_about.addEventListener('transitionend', function (e) {
         show_about.classList.add('hidden')
         about_divider.classList.add('hidden')
      }, {
         capture: false,
         once: true,
         passive: false
      })
   }
}, false)

//Switch English/Spanish
link_toggle_lang.addEventListener('click', function () {
   let lang = {}
   let myLabels = document.querySelectorAll("[id^='l_']")

   lang = retLanguage(link_toggle_lang.innerHTML)

   for (let i = 0; i < myLabels.length; i++) {
      myLabels[i].innerHTML = lang[myLabels[i].id]
   }

})

function retLanguage(lang) {
   const language = {
      'English': {
         l_blog: "Blog & Notes",
         l_hashnode: "Hashnode Blog",
         l_password: "Password Generator",
         l_about: "About",
         l_about_content: "Hello 👋, my name is Tonatiuh Morales and currently I work 💻 mainly with SAP platforms for several years, also I'm a developer in my free time (at least I try it). </br>Thanks for visiting! 🙌",
         l_link_toggle_lang: "Español"
      },
      'Español': {
         l_blog: "Notas & Blog",
         l_hashnode: "Blog en Hashnode",
         l_password: "Generador de contraseñas",
         l_about: "Sobre mi",
         l_about_content: "Hola 👋, mi nombre es Tonatiuh Morales y actualmente trabajo 💻 principalmente con plataformas SAP desde hace ya varios años, también le hago un poco al desarrollo de software en mi tiempo libre (al menos lo intento).</br>Gracias por visitar! 🙌",
         l_link_toggle_lang: "English"
      } 
   }

   return language[lang]
}