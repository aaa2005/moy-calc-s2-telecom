function yo() {
    console.log("hi yo")
}


function math_like(exam,td,average,co){
    var a = parseFloat(document.getElementById(exam).value) ;
    var b = parseFloat(document.getElementById(td).value) ;
    if(!isNaN(a) && !isNaN(b)){
        document.getElementById(average).innerHTML = (((a*0.6)+(b*0.4))*co).toFixed(2);
        return (((a*0.6)+(b*0.4))*3).toFixed(2);
    }else{
        document.getElementById(average).innerHTML = "Subject average";
    }
}

function phy_like(exam,td,tp,average,co){
    var a = parseFloat(document.getElementById(exam).value) || null ;
    var b = parseFloat(document.getElementById(td).value) || null;
    var c = parseFloat(document.getElementById(tp).value) || null;
    if(!isNaN(a) && !isNaN(b) && !isNaN(c)){
        document.getElementById(average).innerHTML = ((((a*0.6)+(b*0.4))*co)+c).toFixed(2);
        return ((((a*0.6)+(b*0.4))*3)+c).toFixed(2);
    }else{
        document.getElementById(average).innerHTML = "Subject average";
    }
}

function en_like(exam,average,co){
    var a = parseFloat(document.getElementById(exam).value) ;
    if(!isNaN(a)){
        document.getElementById(average).innerHTML = (a*co).toFixed(2);
        return (a*co).toFixed(2);
    }else{
        document.getElementById(average).innerHTML = "Subject average";
    }
}
function all_s1(){
    document.getElementById("a1").pause();
    document.getElementById("a2").pause();
    document.getElementById("a3").pause();
    document.getElementById("a4").pause();
    document.getElementById("a5").pause();
    document.getElementById("a6").pause();
    document.getElementById("a7").pause();
  
    a = parseFloat(document.getElementById("math-g").innerHTML);
    b = parseFloat(document.getElementById("phy-g").innerHTML);
    c = parseFloat(document.getElementById("chemi-g").innerHTML);
    d = parseFloat(document.getElementById("info-g").innerHTML);
    e = parseFloat(document.getElementById("method-g").innerHTML);
    f = parseFloat(document.getElementById("st-g").innerHTML);
    
    h = parseFloat(document.getElementById("en-g").innerHTML);
    s1 = ((a + b + c + d + e + f + h) / 17).toFixed(2);
    //s1 =12.11;
    //s1 = 16.47;
    var c9 = document.getElementById("card9"); 
    var g_vd = document.getElementById("grade_vd");
    var fs = document.getElementById("fullscreenDiv");
    
    if(!isNaN(s1)){
        //document.getElementById("card9").style.backgroundImage = "url('img/skull.png')";
        document.getElementById("fullscreenDiv").style.display = "flex";
        document.getElementById("bt").style.opacity = 0.3;
        setTimeout(function() {
            document.getElementById("fullscreenDiv").style.display = "none";
            document.getElementById("bt").style.opacity = 0.2;
    }, 1000);
        
        document.getElementById("grade_vd").play;
        document.getElementById("Grade").innerHTML = s1;
        if (s1<10 && s1 >= 9) {
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/d04a013c-dc36-4efc-8a69-614441815bb8/9albi.jpg?v=1715993316085')";
            document.getElementById("a2").currentTime = 0;
            document.getElementById("a2").play();
            
        }
        if (s1>=10 && s1<11 ) {
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/d04a013c-dc36-4efc-8a69-614441815bb8/tbs.png?v=1715993408558')";
            document.getElementById("a3").currentTime = 0;
            document.getElementById("a3").play();
        }
        if (s1>=11 && s1<13 ) {
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/d04a013c-dc36-4efc-8a69-614441815bb8/fathi.jpg?v=1715993346025')";
            document.getElementById("a6").currentTime = 0;
            document.getElementById("a6").play();
        }
        if (s1>=13 && s1<=15.99) {
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/d04a013c-dc36-4efc-8a69-614441815bb8/3yn.jpg?v=1716003580614')";
            document.getElementById("a5").currentTime = 0;
            document.getElementById("a5").play();
        } 
        if (s1>=7 && s1<9) {
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/d04a013c-dc36-4efc-8a69-614441815bb8/byebye.jpg?v=1715993338535')";
            document.getElementById("a4").currentTime = 0;
            document.getElementById("a4").play();
        } 
        if (s1 < 7 && s1 > 0 ){
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/d04a013c-dc36-4efc-8a69-614441815bb8/amor2.jpg?v=1715993333075')";
            document.getElementById("a1").currentTime = 0;
            document.getElementById("a1").play();
        }
        
        if (s1 <= 20 && s1 > 16 ){
            document.getElementById("card9").style.backgroundImage = "url('https://cdn.glitch.global/d04a013c-dc36-4efc-8a69-614441815bb8/super.png?v=1716076863578')";
            //document.getElementById("card9").style.backgroundPosition = 'center';
            document.getElementById("a7").currentTime = 23;
            document.getElementById("a7").play();
        }
      
      
    }else{
        alert("Error, Enter all your notes!.");
        alert("!خطأ, يرجى إدخال كل علاماتك")
        document.getElementById("Grade").innerHTML = "Grade";
    }
    
}

setInterval(function() {
    math_like("math-e", "math-d", "math-g",3);
    phy_like("phy-e","phy-d","phy-p","phy-g",3);
    phy_like("chemi-e","chemi-d","chemi-p","chemi-g",3);
    math_like("info-e", "info-p", "info-g",2);
    en_like("method-e","method-g",1);
    en_like("st-e","st-g",1);
    
    en_like("en-e","en-g",2);
    //all_s1();
}, 2000);