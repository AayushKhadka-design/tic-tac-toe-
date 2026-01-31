let winCond = [[0,1,2],[3,4,5],[6,7,8],
               [0,3,6],[1,4,7],[2,5,8],
               [0,4,8],[2,4,6]]

               let turnO = true;
            
let btn = document.querySelectorAll(".box");
let msg_section = document.querySelector(".msg");
let p = document.createElement("p");
btn.forEach(element => {
   
    element.addEventListener("click",()=>{
        if(turnO){
            element.textContent = "O";
            turnO = false;
            element.disabled = true;
            element.classList.add("boxO");

        }
        else{
            element.textContent = "X"
            turnO = true;
              element.disabled = true;
               element.classList.add("boxX");
        }
        checkWinner();
        if(checkDraw()){
            p.innerText = "Its a draw"
            p.classList.add("msg_display")
           msg_section.prepend(p)
            
        }
    })

});

function checkWinner(){
    winCond.forEach(e => {
        

        let winPos1 = btn[e[0]].textContent;
        let winPos2 = btn[e[1]].textContent;
        let winPos3 = btn[e[2]].textContent;
        if(winPos1 != "" && winPos2 != "" && winPos3 != "" ){
            if(winPos1 === winPos2 &&  winPos2 ===winPos3){
                p.classList.add("msg_display")
                   p.innerText = `${winPos1} won the game`
           msg_section.prepend(p)
                btn.forEach(element => {
                    element.disabled = true;
                });
            }
        }
       
      
})

}
function checkDraw(){
    for(let i = 0; i < btn.length; i++){
        if(btn[i].textContent === ""){
           return false;
        }
    }
    return true;
}

let play_again = document.getElementById("play_again");
play_again.addEventListener("click",()=>{
    btn.forEach(element => {
    element.textContent = "" ;
    element.disabled = false;
    msg_section.innerText  =""
    let  trunO = true;
    });
})