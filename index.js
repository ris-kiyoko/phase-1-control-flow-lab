function scuberGreetingForFeet(distance){
if (distance <= 400){
  return 'This one is on me!'
} else if (distance > 400 && distance < 2000){
  return 'That will be twenty bucks.'
} else if (distance > 2500){
  return 'No can do.'
} else if (distance > 2000){
  return 'I will gladly take your thirty bucks.'
}
}




function ternaryCheckCity(city){
return (city === "NYC") ? "Ok, sounds good." : "No go."
}




function switchOnCharmFromTip(money){
 //  if money === "generous"  // "Thank you so much. "
 // if money === "not as generous" // "Thank you."
 // if money === "thanks for everything" // "Bye."
 
switch(money){
  case "generous":
    return "Thank you so much."
  case "not as generous":
    return "Thank you."
  case "thanks for everything":
    return "Bye."
}



  // Write your code here!

}