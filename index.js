document.addEventListener("DOMContentLoaded", function(event) {
    var texts = [
      "Chandni",
      "a Software Developer",
      "a Data Scientist",
      "a Front End Developer",
      "a Youtuber"
    ];
    var currentTextIndex = 0;
    var currentText = texts[currentTextIndex];
    var currentCharIndex = 0;
    var typingSpeed = 100; // milliseconds

    function typeText() {
      if (currentCharIndex < currentText.length) {
        var typingElement = document.getElementById("typing");
        typingElement.innerHTML += currentText.charAt(currentCharIndex);
        currentCharIndex++;
        setTimeout(typeText, typingSpeed);
      } else {
        setTimeout(eraseText, 1000);
      }
    }

    function eraseText() {
      if (currentCharIndex >= 0) {
        var typingElement = document.getElementById("typing");
        typingElement.innerHTML = currentText.substring(0, currentCharIndex);
        currentCharIndex--;
        setTimeout(eraseText, typingSpeed);
      } else {
        currentTextIndex = (currentTextIndex + 3) % texts.length;
        currentText = texts[currentTextIndex];
        setTimeout(typeText, 500);
      }
    }

    typeText();
  });
  
  var hamburger = document.querySelector('.hambur');
  // Get all .nav-items elements
  var navItems = document.querySelectorAll('.nav-items');

  // Add click event listener to the hamburger element
  hamburger.addEventListener('click', function() {
    // Toggle the display property of the .nav-items elements
    navItems.forEach(function(item) {
      item.classList.toggle('visible');
    });
  });
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });