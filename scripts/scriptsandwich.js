addedCheese=false;
addedTomatoes=false;
addedCucumber=false;
addedLettuce=false;
addedKetchup=false;
addedMayonnaise=false;
removedCheese =false;
removedTomatoes = false;
removedCucumber = false;
removedLettuce =false;
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
function addCucumber(){
    document.getElementById("cucumber").innerHTML = "Cucumber added!";
    addedCucumber=true;
    removedCucumber=false;
    cucumberPrice = 0.49;
    if (addedCucumber == true)
    {
        document.getElementById("modal_cucumber").innerHTML = "Added cucumber! 0.49$ ";
    }
    
}
function addLettuce(){
    document.getElementById("lettuce").innerHTML = "Lettuce added!";
    addedLettuce=true;
    removedLettuce=false;
    lettucePrice= 0.49;
    if (addedLettuce == true)
    {
        document.getElementById("modal_lettuce").innerHTML = "Added lettuce! 0.49$" ;
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
function removeCucumber(){
    document.getElementById("cucumber").innerHTML = "You have removed cucumber!";
    removedCucumber=true;
    if(removedCucumber == true)
    {
        document.getElementById("modal_cucumber").innerHTML = "Removed cucumber! ";
    }
}

function removeLettuce(){
    document.getElementById("lettuce").innerHTML = "You have removed lettuce!";
    removedLettuce=true;
    if(removedLettuce == true)
    {
        document.getElementById("modal_lettuce").innerHTML = "Removed lettuce! ";
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
    if(addedCucumber == true && removedCucumber == false)
    {
        price += cucumberPrice;
    }
    if(addedLettuce == true && removedLettuce == false)
    {
        price += lettucePrice;
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
function check14(){
    value1 = document.getElementById("address14").value;
    value2 = document.getElementById("phone14").value;
    if(value1.length > 0 && value2.length > 0)
    {
        document.getElementById("submitbutton14").removeAttribute("disabled");
    }
}
