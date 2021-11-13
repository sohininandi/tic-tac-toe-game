var count=0;
var gotWinner="";
function write1(event){
    console.log(event);
    count++;
    if(count%2==1){
        document.getElementById(event).innerHTML='X';
    }
    
    else{
      document.getElementById(event).innerHTML='O';  
    }
    document.getElementById(event).classList.add('centerClassed');
    document.getElementById(event).style.pointerEvents='none';
    let crossReturn=crosswise()
    let rowReturn= rowWise();
    let columnReturn= columnWise();
    if(crossReturn||rowReturn||columnReturn) {
       document.getElementById(event).classList.add('centerClassed');
        document.getElementById('congratulation').innerHTML= gotWinner + " won !!!!"
       document.getElementById('tictacTable').style.display='none';
       document.getElementById('congratulation').style.display='Block';
       
       }
        
    else if(count===9){
        window.alert('draw game!!!!')
    }
    
}

function crosswise(){
    if(document.getElementById('A1').innerHTML===document.getElementById('B2').innerHTML && document.getElementById('B2').innerHTML === document.getElementById('C3').innerHTML&& document.getElementById('C3').innerHTML !=="-"){
           gotWinner=document.getElementById('C3').innerHTML;  
           return true;
       }
    else if(document.getElementById('A3').innerHTML===document.getElementById('B2').innerHTML && document.getElementById('B2').innerHTML === document.getElementById('C1').innerHTML&& document.getElementById('C3').innerHTML !=="-"){
       gotWinner=document.getElementById('C1').innerHTML;  
           return true; 
    }
    
    else return false;
}
function rowWise(){
   for(let j=1; j<=3; j++){
       if(document.getElementById('A'+j).innerHTML===document.getElementById('B'+j).innerHTML && document.getElementById('B'+j).innerHTML === document.getElementById('C'+j).innerHTML&& document.getElementById('C'+j).innerHTML !=="-"){
           gotWinner=document.getElementById('C'+j).innerHTML
       }
       
   }
    if(gotWinner!=="" && gotWinner!==undefined)
        return true;
    else
        return false;
}
function columnWise(){
    var array=['A','B','C'];

    for(let j=0; j<array.length; j++){
        if(document.getElementById(array[j]+1).innerHTML===document.getElementById(array[j]+2).innerHTML && document.getElementById(array[j]+2).innerHTML === document.getElementById(array[j]+3).innerHTML&& document.getElementById(array[j]+3).innerHTML !=="-"){
                gotWinner=document.getElementById(array[j]+3).innerHTML;
            }
        
        
    }
    
    if(gotWinner!=="" && gotWinner!==undefined)
        return true;
    else
        return false;
        
}