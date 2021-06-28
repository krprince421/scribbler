var edit1 = true ;
var save1 = false ; 
function fun(){
    edit1 = false ;
    save1 = true ;
        document.getElementById("myP").contentEditable = true;
        if( edit1 == true ){
        document.getElementById('edit').style.visibility = 'visible';
        }
        else{
            document.getElementById('edit').style.visibility = 'hidden';
        }
        if( save1 == false ){
            document.getElementById('save').style.visibility = 'hidden';
            }
            else{
                document.getElementById('save').style.visibility = 'visible';
            }

}

function fun2(){

    edit1 = true ;
    save1 = false ;

    var x = document.getElementById("myP").innerHTML ;
    document.getElementById("myP").contentEditable = false;
    document.getElementById("myP").innerHTML = x ;
    if( edit1 == true ){
        document.getElementById('edit').style.visibility = 'visible';
        }
        else{
            document.getElementById('edit').style.visibility = 'hidden';
        }
        if( save1 == false ){
            document.getElementById('save').style.visibility = 'hidden';
            }
            else{
                document.getElementById('save').style.visibility = 'visible';
            }
    
}
var like = 0 ;
var temp = true ;
function like11(){
    like++ ;
    temp = false ;
    if( temp == false ){ 
        document.getElementById('like12').style.visibility='hidden' ;
        document.getElementById('like13').style.visibility='visible' ;
    }
    document.getElementById("like-content").innerHTML= like + " people have liked this."  ;
}
var index = 0 ;
let arr = [] ;
function fun4(){
    arr[index] = document.getElementById("comment-1").value  ;
    arr[index++] += '<br/>'
    //document.getElementById("comm").innerHTML = JSON.stringify(arr, null, index ); 
    console.log( index ) ;
    document.getElementById("comm").innerHTML = arr ;
    

   
    
}
    
