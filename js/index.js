// Your code goes here
let text = document.querySelectorAll('.text-content');
text.forEach(x => { x.addEventListener("mouseover", () => {
    x.style.color = "red";
})});

text.forEach(x => { x.addEventListener("mouseleave", () => {
    x.style.color = "black";
})});

text.forEach(x => { x.addEventListener("copy", () => {
    x.style.color = "green";
})});

let navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach( x => {x.addEventListener("mouseover", () => {
    x.style.color = "red";
})})


navLinks.forEach( x => {x.addEventListener("mouseleave", () => {
    x.style.color = "black";
})})

navLinks.forEach( x => {x.addEventListener("click", () => {
    x.preventDefault();
})})

let images = document.querySelectorAll('img');
images.forEach(x => { x.addEventListener("mouseover", () => {
    x.style.transform = "scale(1.2)"; x.style.transition = "0.3s";
})});

images.forEach(x => { x.addEventListener("mouseleave", () => {
    x.style.transform = "scale(1.0)"; x.style.transition = "0.3s";
})});

let logo = document.querySelector(".logo-heading");
logo.addEventListener("dblclick", () => {
    logo.textContent = "all aboard!"
})

logo.addEventListener("click", () => {
    logo.textContent = "Fun Bus"
})

let body = document.querySelector("body");
body.addEventListener("keydown", () => {
    body.style.backgroundColor = "red";
})

body.addEventListener("keyup", () => {
    body.style.backgroundColor = "white";
})

body.addEventListener("dblclick", () => {
    body.style.backgroundColor = "pink";
})

body.addEventListener("click", () => {
    body.style.backgroundColor = "white";
})

let p = document.querySelectorAll("p");
p.forEach(x => {x.addEventListener("drag", () => {
    body.style.backgroundColor = "black";
})})

p.forEach(x => {x.addEventListener("click", () => {
    body.style.backgroundColor = "white";
})})

let titles = document.querySelectorAll("h4");
titles.forEach(x => {x.addEventListener("mousemove", () => {
    x.style.transform = "scale(1.2)";
})})

titles.forEach(x => {x.addEventListener("mouseout", () => {
    x.style.transform = "scale(1.0)";
})})

// text.forEach(x => {x.addEventListener("keydown", () => {
//     x.style.transform = "scale(1.2)";
// })})


// text.forEach(x => {x.addEventListener("keyup", () => {
//     x.style.transform = "scale(1.0)";
// })})

let contsec = document.querySelector(".content-section");
contsec.addEventListener("dblclick", (event) => {
    contsec.style.backgroundColor = "green";
    event.stopPropagation();
})

contsec.addEventListener("click", () => {
    contsec.style.backgroundColor = "white";
})