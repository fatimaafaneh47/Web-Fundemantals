function accept(id){
    var element= document.querySelector(id);
    element.remove();
}
function ignore(id){
    var element= document.querySelector(id);
    element.remove();
}

function changeName() {
    var userName = document.querySelector(".card-body h1");
    userName.innerText= "Fatima";
}
var count = 2;
var add =document.querySelector(".badge");
function addNumbers(){
    count++;
add.innerText= count;
}

