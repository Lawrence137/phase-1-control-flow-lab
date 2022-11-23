function scuberGreetingForFeet(value){
  if (value <= 400){
    return 'This one is on me!'
  }
  else if (value > 2000 && value < 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (value > 2500){
    return 'No can do.'
  }
}

function ternaryCheckCity(city){

let result
 result = city == 'NYC' ? 'Ok, sounds good.' : 'No go.'
 return result
 }

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  switch(tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
      break;
      }
}
