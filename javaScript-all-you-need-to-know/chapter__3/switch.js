// switch(switch will run based on this) {
//   case: different value
//   output
//   break;
// }

let defaultMessage = "Today is";
let day = new Date();
let today = day.getDay();
console.log(today);

switch (today) {
  case 0:
    console.log(`${defaultMessage} Sunday`);
    break;
  case 1:
    console.log(`${defaultMessage} Monday`);
    break;
  case 2:
    console.log(`${defaultMessage} Tuesday`);
    break;
  case 3:
    console.log(`${defaultMessage} Wednesday`);
    break;
  case 4:
    console.log(`${defaultMessage} Thursday`);
    break;
  case 5:
    console.log(`${defaultMessage} Friday`);
    break;
  case 6:
    console.log(`${defaultMessage} Saturday`);

  default:
    break;
}

