let main = document.querySelector(".main")
let cover = document.querySelector(".cover")
let divExtra = document.querySelector(".divExtra")
let anime1 = document.querySelector(".anime01")
let anime2 = document.querySelector(".anime02")
let anime3 = document.querySelector(".anime03")
let h1 = document.querySelector(".h01")
let p1 = document.querySelector(".p01")
let logo = document.querySelector(".logo")
let cardees = document.querySelectorAll(".cardees")
let topp = document.querySelector(".topp")
let middel = document.querySelector(".middel")
let bottom = document.querySelector(".bottom")
// let esc = document.querySelectorAll(".esc")
let selecte = " "



let card1 = document.getElementById("card1")
let escCard1 = document.querySelector(".escCard1")
card1.onclick = ()=>{
    card1.classList.replace("cardees","showSingleCard")
    card1.classList.remove("cardees") 
    // card1.classList.add("showSingleCard")
    for (let carde of cardees) {
        carde.classList.replace("cardees","unActive")  
                
    }  
} 
escCard1.onclick = ()=>{
    card1.classList.replace("showSingleCard","cardees1")
    for (let carde of cardees) {
        carde.classList.replace("unActive","cardees1")  
        setInterval(() => {
            carde.classList.add("cardees") 
            // card1.classList.remove("cardees") 
            carde.classList.remove("cardees1") 
            // carde.classList.remove("showSingleCard")
            // carde.classList.remove("unActive")
            
        }, 100);
                
    }  
}







let card2 = document.getElementById("card2")
let escCard2 = document.querySelector(".escCard2")
card2.onclick = ()=>{
    card2.classList.replace("cardees","showSingleCard")
    for (let carde of cardees) {
        carde.classList.replace("cardees","unActive")  
                
    }  
} 
escCard2.onclick = ()=>{
    card2.classList.replace("showSingleCard","cardees1")
    for (let carde of cardees) {
        carde.classList.replace("unActive","cardees1")  
                
    }  
}


/////event


// for(let i = 0 ; i< cardees.length ; i++ ){
//     cardees[i].onclick = showCard  
// }

main.onmouseover = start
for(let i = 0 ; i< esc.length ; i++ ){
    esc[i].onclick = escCard  
}






////function

function start() {
    cover.classList.add("darker")
    divExtra.classList.add("divExtraShow")  
    setInterval(()=>{
        anime1.classList.replace('anime01',"anime1")  
    },5000)
    setInterval(()=>{
        anime2.classList.replace("anime02","anime2") 
    },7000)
    setInterval(()=>{
        anime3.classList.replace("anime03","anime3") 
    },10000)
    setInterval(()=>{
        h1.classList.add("unActive")
        p1.classList.add("unActive")
        logo.classList.add("unActive")
        topp.classList.replace("topp","topph")
        middel.classList.replace("middel","middelh")
        bottom.classList.replace("bottom","bottomh")
    },20000)  
}
// function showCard() {
//     for (let carde of cardees) {
//         carde.classList.replace("cardees","unActive")  
        
//     }   
//     this.classList.remove("cardees","unActive")
//     this.classList.add("showSingleCard") 
      
// }
// function escCard() {
//     for(let i = 0 ; i< cardees.length ; i++ ){
//         cardees[i].onclick = showCard2 
//     } 
// }
// function showCard2(){
//     for (let carde of cardees) {
//         this.classList.add("showSingleCard")
//         this.classList.replace("showSingleCard","cardees")
//         carde.classList.add("cardees")
//         carde.classList.remove("unActive")
//         carde.classList.replace("showSingleCard","cardees")
//     } 
// }

