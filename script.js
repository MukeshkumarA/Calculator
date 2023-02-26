
let outputScreen = document.getElementById('screen');

function display(val){
    let str = outputScreen.value;
    if(str.length == 1 && (str['0'] == '*' || str[0] == '/' || str[0] == '+' || str[0] == '-'))
      alert('invalid.. pls delete');

    outputScreen.value += val;
}

function clr(){
    outputScreen.value = "";
}

function del(){
    let val = outputScreen.value;
    outputScreen.value = val.slice(0, -1);
}

function calculate(){

    try{
        if(outputScreen.value.length == 0) 
        outputScreen.value = "";

        else  
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err){
        alert('❌please clear and enter a valid expression');
    }
    /**
    try{
        outputScreen.value = eval(outputScreen.value);
    }
    catch(err)
    {
        alert('please enter a valid expression');
    }
    **/
}
