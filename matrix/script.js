let alpha = [0,1]
let contain = document.querySelector('.contain')
for(let i=0;i < 130;i++){
    let random = Math.floor(Math.random() * alpha.length);
    contain.innerHTML+=`<div class="mat">${alpha[random]}</div>`
    let mat = document.querySelectorAll(".mat")
    mat[i].style.left=`${Math.random() * window.innerWidth}px`
    mat[i].style.top=`${Math.random() * window.innerHeight}px`
    mat[i].style.fontSize=`${Math.random() * 10}vmin`
    mat[i].style.animationDelay=`${Math.random() * 5}s`
}
let rgb = Math.random() * 360
let mat = document.querySelectorAll(".mat")
mat.forEach((m)=>{
    m.style.color=`hsl(${rgb},100%,50%)`
    m.style.textShadow=`0vmin 0vmin ${Math.random() * 5}vmin hsl(${rgb},100%,50%)`
})
setInterval(()=>{
    let mat = document.querySelectorAll(".mat")
    let rgb = Math.random() * 360
    mat.forEach((m)=>{
        m.style.color=`hsl(${rgb},100%,50%)`
        m.style.textShadow=`0vmin 0vmin ${Math.random() * 5}vmin hsl(${rgb},100%,50%)`
    })
},5000);