addedPepperoni=false;
addedTomatoes=false;
addedMushrooms=false;
addedOnion=false;
addedRuccola=false;
addedOlives=false;
removedPepperoni =false;
removedTomatoes = false;
removedMushrooms = false;
removedOnion =false;
removedRuccola =false;
removedOlives= false;

function addPepperoni(){
    document.getElementById("pepperoni").innerHTML = "Pepperoni added!";
    addedPepperoni=true;
    removedPepperoni=false;
    pepperoniPrice = 0.79;
    if (addedPepperoni == true)
    {
        document.getElementById("modal_pepperoni").innerHTML = "Added pepperoni! 0.79$ ";
       
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
function addMushrooms(){
    document.getElementById("mushrooms").innerHTML = "Mushrooms added!";
    addedMushrooms=true;
    removedMushrooms=false;
    mushroomsPrice = 0.49;
    if (addedMushrooms == true)
    {
        document.getElementById("modal_mushrooms").innerHTML = "Added mushrooms! 0.49$ ";
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
function addRuccola(){
    document.getElementById("ruccola").innerHTML = "Ruccola added!";
    addedRuccola=true;
    removedRuccola=false;
    ruccolaPrice = 0.59;
    if (addedRuccola == true)
    {
        document.getElementById("modal_ruccola").innerHTML = "Added ruccola! 0.59$ ";
    }
   
}
function addOlives(){
    document.getElementById("olives").innerHTML = "Olives added!";
    addedOlives=true;
    removedOlives-false;
    olivesPrice = 0.59;
    if (addedOlives == true)
    {
        document.getElementById("modal_olives").innerHTML = "Added olives! 0.59$ ";
    }
   
}
function removePepperoni(){
    document.getElementById("pepperoni").innerHTML = "You have removed pepperoni!";
    removedPepperoni=true;
    if(removedPepperoni== true)
    {
        document.getElementById("modal_pepperoni").innerHTML = "Removed pepperoni! ";
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
function removeMushrooms(){
    document.getElementById("mushrooms").innerHTML = "You have removed mushrooms!";
    removedMushrooms=true;
    if(removedMushrooms == true)
    {
        document.getElementById("modal_mushrooms").innerHTML = "Removed mushrooms! ";
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
function removeRuccola(){
    document.getElementById("ruccola").innerHTML = "You have removed ruccola!";
    removedRuccola=true;
    if(removedRuccola == true)
    {
        document.getElementById("modal_ruccola").innerHTML = "Removed ruccola! ";
    }
}
function removeOlives(){
    document.getElementById("olives").innerHTML = "You have removed olives!";
    removedOlives=true;
    if(removedOlives == true)
    {
        document.getElementById("modal_olives").innerHTML = "Removed olives! ";
    }
}
function total(){
    var price = 5;
    if(addedPepperoni == true && removedPepperoni == false)
    {
        price += pepperoniPrice;
    }
    if(addedTomatoes == true && removedTomatoes == false)
    {
        price += tomatoesPrice;
    }
    if(addedMushrooms == true && removedMushrooms == false)
    {
        price += mushroomsPrice;
    }
    if(addedOnion == true && removedOnion == false)
    {
        price += onionPrice;
    }
    if(addedRuccola == true && removedRuccola == false)
    {
        price += ruccolaPrice;
    }
    if(addedOlives == true && removedOlives == false)
    {
        price += olivesPrice;
    }
    document.getElementById("total").innerHTML ="Total: "+Math.round(price * 100)/100+"$";
    
}
function check13(){
    value1 = document.getElementById("address13").value;
    value2 = document.getElementById("phone13").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton13").removeAttribute("disabled");
    }
}

