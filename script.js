function Logout(element){
    element.innerText = "Logout"
}


// function Logout(element){
//     if(element == "Login"){
//         element.innerText = "Logout"
//     }
//     else{
//         element.innetText = "Login"
//     }
//     return element
// }

function remove(element){
    element.remove();
}

function hitLike(){
    var popup = document.getElementById("pop")
    popup.style.visibility = "visible";
}
