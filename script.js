function navSlide() {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.classList.toggle("rotate-burger");

    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = "";
        }
        else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
        }
    });
}

function addDetails(language) {
    const text = {
      web: "I studied HTML, CSS and JavaScript for my military service in the Israel Defense Forces.",
      other:
        "I studied C ++, C # and java as part of my degree studies in software engineering. In C # and java I also did projects that can be seen in the projects section.",
    };

    document.getElementById("details").innerHTML = text[language];
  }

function copyPhonNumber() {
    const myNumber = "058-7706513";
  
    navigator.clipboard.writeText(myNumber);
  }

document.addEventListener("scroll", () => {
    const btn = document.querySelector(".up-btn");
    if (this.scrollY > 500){
        btn.classList.add("show");
    }
    else {
        btn.classList.remove("show");
    }
  });

document.querySelector(".up-btn")
.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

  