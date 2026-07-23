
let primeiroNike = document.querySelectorAll(".primeiroNike")
let segundoNike = document.querySelectorAll(".segundoNike")
let botoes = document.querySelectorAll(".botaoTenis")
let slide = document.querySelectorAll(".slide")
let slider = document.querySelector(".slider")
let img = document.querySelectorAll(".img")
let carregamento = document.querySelector("span")
let coresBG = ["vermelho","cinza","verde","marrom"]// utilizaremos os indice desse array para colocar no BG 
botoes.forEach((botao,index) =>{ // o index vai ser o indice do array dos botões de tenis
    botao.onclick = () =>{
        let slideAtivo = document.querySelector(".slide.active")
        slideAtivo.classList.remove("active");
        slide[index].classList.add("active");// quando eu clico no botão ele pega o slide com o indice do botão clicado e adiciona a class="active"
         let botãoTenisAtivo = document.querySelector(".botaoTenis.active");
         botãoTenisAtivo.classList.remove("active");
         botoes[index].classList.add("active")
        
        // aqui a lógica foi pegar cada indice do coresBG que coincide com a classe do slider, remover e depois adiconar o indice de coresBG como classe 
        coresBG.forEach(cor =>{
            slider.classList.remove(cor)
        })
         slider.classList.add(coresBG[index])

         
    }
}) 




function animarpagina() {
 //animações da section hero 
gsap.from(".containerPai",{
    opacity: 0,
    duration: 1
 })
}


   
    



const tl = gsap.timeline({
    
    onComplete(){
        animarpagina()
        gsap.to(".preload",{
            opacity:0,
            duration:.2,
            onComplete(){
                gsap.to(".preload",{
                    display:"none",
                })
            }
        })
    }
});


    
tl.to("#clipRect",{
    attr: { y: 0, height: 604 },
     duration: 7,
     ease:"ease-in-out",
      onUpdate() {
          carregamento.textContent = Math.round(tl.progress() * 100) + "%";
        }
}) 
    


 
let traco1 = document.querySelector(".traco1")
let traco2 = document.querySelector(".traco2")
let btHamb = document.querySelector(".iconham")
let menuEscondido = document.querySelector(".menuescondido")


 btHamb.addEventListener("click", ()=>{
    btHamb.classList.toggle("ativo")
    menuEscondido.classList.toggle("ativo")
}) 

window.addEventListener('mousemove', (event)=>{
    if(window.innerWidth > 900){
    let luz = document.querySelector(".luz")
    const posicaoCard = menuEscondido.getBoundingClientRect();
    let x1 = event.clientX - posicaoCard.left
    let y2 = event.clientY - posicaoCard.top
    luz.style.opacity = 1
    luz.style.transform = `translate(${x1-100}px, ${y2-100}px)`
    }
    
})





