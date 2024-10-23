for(; ;) {
  let rand = Math.round(Math.random() * 10 + 1)
  if(rand === 9) {
    console.log('Winnder Winner Chicken Dinner');
    break;
  } else {
    console.log("Your rand is"+ " " + rand);
  }
}