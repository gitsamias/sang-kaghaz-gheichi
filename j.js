function ax(){
    const a = document.getElementById("d1").getElementsByTagName("img")
    const b = Math.floor(Math.random()*3)
    for(let i=0;i<a.length - 2;i++){
        if(b==0){
            a[0].style.display = "block"
            a[1].style.display = "none"
            a[2].style.display = "none"
            document.getElementById("pcsp").innerHTML = eval(document.getElementById("pcsp").innerHTML)+ 0;
            document.getElementById("usersp").innerHTML = eval(document.getElementById("usersp").innerHTML)+ 0;
        }
        else if(b==1){
            a[0].style.display = "none"
            a[1].style.display = "block"
            a[2].style.display = "none"
            document.getElementById("pcsp").innerHTML = eval(document.getElementById("pcsp").innerHTML) + 1;
        }
        else if(b==2){
            a[0].style.display = "none"
            a[1].style.display = "none"
            a[2].style.display = "block"
            document.getElementById("usersp").innerHTML = eval(document.getElementById("usersp").innerHTML) + 1;
        }
        else{
            alert(b)
        }
    }
}
function axedo(){
    const a = document.getElementById("d1").getElementsByTagName("img")
    const b = Math.floor(Math.random()*3)
    for(let i=0;i<a.length - 2;i++){
        if(b===0){
            a[0].style.display = "block"
            a[1].style.display = "none"
            a[2].style.display = "none"
            document.getElementById("usersp").innerHTML = eval(document.getElementById("usersp").innerHTML) + 1;
        }
        else if(b===1){
            a[0].style.display = "none"
            a[1].style.display = "block"
            a[2].style.display = "none"
            document.getElementById("pcsp").innerHTML = eval(document.getElementById("pcsp").innerHTML) + 0;
            document.getElementById("usersp").innerHTML = eval(document.getElementById("usersp").innerHTML) + 0;
        }
        else if(b===2){
            a[0].style.display = "none"
            a[1].style.display = "none"
            a[2].style.display = "block"
            document.getElementById("pcsp").innerHTML = eval(document.getElementById("pcsp").innerHTML) + 1;
        }
        else{
            alert(b)
        }
    }
}
function axese(){
    const a = document.getElementById("d1").getElementsByTagName("img")
    const b = Math.floor(Math.random()*3)
    for(let i=0;i<a.length - 2;i++){
        if(b===0){
            a[0].style.display = "block"
            a[1].style.display = "none"
            a[2].style.display = "none"
            document.getElementById("pcsp").innerHTML = eval(document.getElementById("pcsp").innerHTML) + 1;
        }
        else if(b===1){
            a[0].style.display = "none"
            a[1].style.display = "block"
            a[2].style.display = "none"
            document.getElementById("usersp").innerHTML = eval(document.getElementById("usersp").innerHTML) + 1;
        }
        else if(b===2){
            a[0].style.display = "none"
            a[1].style.display = "none"
            a[2].style.display = "block"
            document.getElementById("pcsp").innerHTML = eval(document.getElementById("pcsp").innerHTML) + 0;
            document.getElementById("usersp").innerHTML = eval(document.getElementById("usersp").innerHTML) + 0;
        }
        else{
            alert(b)
        }
    }
}