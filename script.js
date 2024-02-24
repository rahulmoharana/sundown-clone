var elemC = document.querySelector("#elem-con");
var fixed = document.querySelector("#fixed-image");
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"

})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"

})
var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
    })
})

var stic = document.querySelector(".stic");
var gg = document.querySelector("#gg")
var ff = document.querySelector("#ff")
var ww = document.querySelector("#ww")
var rr = document.querySelector(".rr")
var para = document.querySelector(".ll p")

gg.addEventListener("click",function(){
     var img = gg.getAttribute("data-image");
     rr.style.backgroundImage = `url(${img})`;
     para.innerHTML = "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings."
     ww.style.color = "#423c37"
     ff.style.color = "#423c37"
     gg.style.color = "white"
     stic.style.top = "0%"
     

})
ff.addEventListener("click",function(){
    var img = ff.getAttribute("data-image");
    rr.style.backgroundImage = `url(${img})`;
    para.innerHTML = "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need."
    ww.style.color = "#423c37"
    ff.style.color = "white"
    gg.style.color = "#423c37"
    stic.style.top = "33.33%"

})
ww.addEventListener("click",function(){
    var img = ww.getAttribute("data-image");
    rr.style.backgroundImage = `url(${img})`
    para.innerHTML = "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    ww.style.color = "white"
    ff.style.color = "#423c37"
    gg.style.color = "#423c37"
    stic.style.top = "66.66%"

})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
var loader = document.querySelector("#loader")
setTimeout(function(){
    loader.style.top = "-100%"
},3400)

