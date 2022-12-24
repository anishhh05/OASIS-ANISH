let outputstream = document.getElementById("outscreen");
function DIS(n){
    outscreen.value += n;
}

function CAL(){
    try{
        outscreen.value = eval(outscreen.value);
    } catch (error) {
        alert("!!!Invalid!!!");
    }
}

function CLEAR() {
    outscreen.value = "";
}
function DEL() {
    outscreen.value=outscreen.value.slice(0, -1);
}