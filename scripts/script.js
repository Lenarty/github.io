addedCheese=false;
addedTomatoes=false;
addedPickles=false;
addedOnion=false;
addedKetchup=false;
addedMayonnaise=false;
removedCheese =false;
removedTomatoes = false;
removedPickles = false;
removedOnion =false;
removedKetchup =false;
removedMayonnaise = false;

function addCheese(){
    document.getElementById("cheese").innerHTML = "Cheese added!";
    addedCheese=true;
    removedCheese=false;
    cheesePrice = 0.79;
    if (addedCheese == true)
    {
        document.getElementById("modal_cheese").innerHTML = "Added cheese! 0.79$ ";
       
    }
 
}
function addTomatoes(){
    document.getElementById("tomatoes").innerHTML = "Tomatoes added!";
    addedTomatoes=true;
    removedTomatoes=false;
    tomatoesPrice = 0.49;
    if (addedTomatoes == true)
    {
        document.getElementById("modal_tomatoes").innerHTML = "Added tomatoes! 0.49$ ";
    }
    
}
function addPickles(){
    document.getElementById("pickles").innerHTML = "Pickles added!";
    addedPickles=true;
    removedPickles=false;
    picklesPrice = 0.49;
    if (addedPickles == true)
    {
        document.getElementById("modal_pickles").innerHTML = "Added pickles! 0.49$ ";
    }
    
}
function addOnion(){
    document.getElementById("onion").innerHTML = "Onion added!";
    addedOnion=true;
    removedOnion=false;
    onionPrice= 0.49;
    if (addedOnion == true)
    {
        document.getElementById("modal_onion").innerHTML = "Added onion! 0.49$" ;
    }
    
}
function addKetchup(){
    document.getElementById("ketchup").innerHTML = "Ketchup added!";
    addedKetchup=true;
    removedKetchup=false;
    ketchupPrice = 0.59;
    if (addedKetchup == true)
    {
        document.getElementById("modal_ketchup").innerHTML = "Added ketchup! 0.59$ ";
    }
   
}
function addMayonnaise(){
    document.getElementById("mayonnaise").innerHTML = "Mayonnaise added!";
    addedMayonnaise=true;
    removedMayonnaise-false;
    mayonnaisePrice = 0.59;
    if (addedMayonnaise == true)
    {
        document.getElementById("modal_mayonnaise").innerHTML = "Added mayonnaise! 0.59$ ";
    }
   
}
function removeCheese(){
    document.getElementById("cheese").innerHTML = "You have removed cheese!";
    removedCheese=true;
    if(removedCheese == true)
    {
        document.getElementById("modal_cheese").innerHTML = "Removed cheese! ";
    }
}
function removeTomatoes(){
    document.getElementById("tomatoes").innerHTML = "You have removed tomatoes!";
    removedTomatoes=true;
    if(removedTomatoes == true)
    {
        document.getElementById("modal_tomatoes").innerHTML = "Removed tomatoes! ";
    }
}
function removePickles(){
    document.getElementById("pickles").innerHTML = "You have removed pickles!";
    removedPickles=true;
    if(removedPickles == true)
    {
        document.getElementById("modal_pickles").innerHTML = "Removed pickles! ";
    }
}

function removeOnion(){
    document.getElementById("onion").innerHTML = "You have removed onion!";
    removedOnion=true;
    if(removedOnion == true)
    {
        document.getElementById("modal_onion").innerHTML = "Removed onion! ";
    }
}
function removeKetchup(){
    document.getElementById("ketchup").innerHTML = "You have removed ketchup!";
    removedKetchup=true;
    if(removedKetchup == true)
    {
        document.getElementById("modal_ketchup").innerHTML = "Removed ketchup! ";
    }
}
function removeMayonnaise(){
    document.getElementById("mayonnaise").innerHTML = "You have removed mayonnaise!";
    removedMayonnaise=true;
    if(removedMayonnaise == true)
    {
        document.getElementById("modal_mayonnaise").innerHTML = "Removed mayonnaise! ";
    }
}
function total(){
    var price = 2.02;
    if(addedCheese == true && removedCheese == false)
    {
        price += cheesePrice;
    }
    if(addedTomatoes == true && removedTomatoes == false)
    {
        price += tomatoesPrice;
    }
    if(addedPickles == true && removedPickles == false)
    {
        price += picklesPrice;
    }
    if(addedOnion == true && removedOnion == false)
    {
        price += onionPrice;
    }
    if(addedKetchup == true && removedKetchup == false)
    {
        price += ketchupPrice;
    }
    if(addedMayonnaise == true && removedMayonnaise == false)
    {
        price += mayonnaisePrice;
    }
    document.getElementById("total").innerHTML ="Total: "+Math.round(price * 100)/100+"$";
    
}
function check(){
    value1 = document.getElementById("address").value;
    value2 = document.getElementById("phone").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton").removeAttribute("disabled");
    }
}
function check1(){
    value1 = document.getElementById("address1").value;
    value2 = document.getElementById("phone1").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton1").removeAttribute("disabled");
    }
}
function check2(){
    value1 = document.getElementById("address2").value;
    value2 = document.getElementById("phone2").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton2").removeAttribute("disabled");
    }
}
function check3(){
    value1 = document.getElementById("address3").value;
    value2 = document.getElementById("phone3").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton3").removeAttribute("disabled");
    }
}
function check4(){
    value1 = document.getElementById("address4").value;
    value2 = document.getElementById("phone4").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton4").removeAttribute("disabled");
    }
}
function check5(){
    value1 = document.getElementById("address5").value;
    value2 = document.getElementById("phone5").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton5").removeAttribute("disabled");
    }
}
function check6(){
    value1 = document.getElementById("address6").value;
    value2 = document.getElementById("phone6").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton6").removeAttribute("disabled");
    }
}
function check7(){
    value1 = document.getElementById("address7").value;
    value2 = document.getElementById("phone7").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton7").removeAttribute("disabled");
    }
}
function check8(){
    value1 = document.getElementById("address8").value;
    value2 = document.getElementById("phone8").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton8").removeAttribute("disabled");
    }
}
function check9(){
    value1 = document.getElementById("address9").value;
    value2 = document.getElementById("phone9").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton9").removeAttribute("disabled");
    }
}
function check10(){
    value1 = document.getElementById("address10").value;
    value2 = document.getElementById("phone10").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton10").removeAttribute("disabled");
    }
}
function check11(){
    value1 = document.getElementById("address11").value;
    value2 = document.getElementById("phone11").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton11").removeAttribute("disabled");
    }
}
function check12(){
    value1 = document.getElementById("address12").value;
    value2 = document.getElementById("phone12").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton12").removeAttribute("disabled");
    }
}


