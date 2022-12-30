let sliderElement  = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")
let sizePassword= document.querySelector("#valor")
let password = document.querySelector("#password")
let ContainerPassword=document.querySelector("#container-password")

let charset='abcdefghijklmnopqrstuvwxyz123'
let novasenha=''

sizePassword.innerHTML=sliderElement.value

slider.oninput=function() {
    sizePassword.innerHTML=this.value
    
}
 
function generatePassword() {
    let pass=""
    for(let i =0,n=charset.length; i<sliderElement.value;++i){
        pass+= charset.charAt(Math.floor(Math.random()*n))
    }

    ContainerPassword.classList.remove("hide")
    password.innerHTML=pass
    novasenha=pass
}
function copyPassword() {
    alert("Senha copiada!")
    navigator.clipboard.writeText(novasenha)
    
}