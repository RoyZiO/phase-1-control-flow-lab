function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  let result
  if (rideDistance <= 400) {
    result = 'This one is on me!';
    return result;

  } else if (rideDistance > 2500) {
    result = 'No can do.';
    return result;

  } else if (rideDistance >= 2000) {
    result = 'I will gladly take your thirty bucks.';
    return result;
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!
  
  return cityName === 'NYC'? "Ok, sounds good." : "No go."
}
ternaryCheckCity(true);


function switchOnCharmFromTip(customerTip){
  // Write your code here!
  switch (customerTip) {
    case 'generous':
      return "Thank you so much."
      break;
    case 'not as generous':
      return "Thank you."
      break;
    default: 'If anything else.'
      return "Bye.";
  }
}