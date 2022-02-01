document.getElementById("nav-toggle").addEventListener("click",toggleMenu)
function toggleMenu(){
    const menu=document.querySelector(".navbar-collapse")
    menu.classList.toggle("hidden")
}
