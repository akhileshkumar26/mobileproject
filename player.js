function openaudioplayer(){
    var player=document.getElementById("id2");
    
    player.style.display="block";
}

 




function for1(num){

    document.getElementById("number").value= document.getElementById("number").value+num;
}
function clean(){
    document.getElementById("number").value="";

}

function backspace(){
    var back =  document.getElementById("number").value;
    document.getElementById("number").value=back.substring(0,back.length-1);

}

musicFiles