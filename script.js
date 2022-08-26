var a;
function show_hide(){
    if(a==1){
        document.getElementById('s_h').style.display="none";
        document.getElementById('btn1').innerHTML="Show More";
        return a=0;
    }
    else{
        document.getElementById('s_h').style.display="flex";
        document.getElementById('btn1').innerHTML="Hide";
        return a=1;
    }
}
function par1(){
    if(a==1){
        document.getElementById('p1').style.display="none";
        document.getElementById('btn6').innerHTML="READ MORE";
        return a=0;
    }
    else{
        document.getElementById('p1').style.display="flex";
        document.getElementById('btn6').innerHTML="HIDE";
        return a=1;
    }
}
function par3(){
    if(a==1){
        document.getElementById('p2').style.display="none";
        document.getElementById('btn2').innerHTML="READ MORE";
        return a=0;
    }
    else{
        document.getElementById('p2').style.display="flex";
        document.getElementById('btn2').innerHTML="HIDE";
        return a=1;
    }
}
function par5(){
    if(a==1){
        document.getElementById('p3').style.display="none";
        document.getElementById('btn3').innerHTML="READ MORE";
        return a=0;
    }
    else{
        document.getElementById('p3').style.display="flex";
        document.getElementById('btn3').innerHTML="HIDE";
        return a=1;
    }
}