var ca = 0
var cb = 0
var rotate = 0

function sc(x){
    return document.getElementById(x)
}

function a(){
    ca++
    sc('ha').innerHTML = ca
}

function b(){
    cb++
    sc('hb').innerHTML = cb
}

function da(){
    ca-=2
    sc('ha').innerHTML = ca
}

function db(){
    cb-=2
    sc('hb').innerHTML = cb
}

function r(){
    sc('ha').style.rotate = rotate+90+'deg'
    sc('hb').style.rotate = rotate+90+'deg'
    rotate+=90
}
