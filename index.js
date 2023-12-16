function scuberGreetingForFeet(rideddistance){
  if(rideddistance <=400){
    return "This one is on me!";
  
 
  }else if(rideddistance>=2000 && rideddistance<2500){
     return "I will gladly take your thirty bucks.";

  }else if(rideddistance >2500){
    return 'No can do.'



  }
}


  


function ternaryCheckCity(city){
  // if (city==='NYC'){
  //   return "OK, sounds good."
  // }else {
  //   return 'No go.'


  // }
return city ==="NYC"?"Ok, sounds good.":"No go."
  
  
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye."



  }

  // Write your code here!
}
