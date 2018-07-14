function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!

  if (someValue <= 400) {
    return "This one is on me!";
  } else if (someValue > 2000 && someValue < 2500) {
    return "I will gladly take your thirty bucks.";
  } else if (someValue > 2500){
    return "No can do."
  }
}

function ternaryCheckCity(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  if (someValue == "NYC") {
    return "Ok, sounds good.";
  } else {
    return "No go.";
  }
}

function switchOnCharmFromTip(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!

  switch (someValue) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
      break;
    default:
      return "Bye.";
  }
}
