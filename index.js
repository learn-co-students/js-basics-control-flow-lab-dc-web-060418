// Write your code in this file!
function scuberGreetingForFeet(distance) {
    if (distance <= 400) {
        return "This one is on me!"
    } else if (distance > 2000 && distance <=2500) {
        return "I will gladly take your thirty bucks."
    }
    else{
        return 'No can do.'
    }
}

function ternaryCheckCity(city) {
    let return_str;
    (city === "NYC") ? return_str =  "Ok, sounds good." : return_str =  "No go."
    return return_str
}

function switchOnCharmFromTip(tip) {
    switch (tip) {
        case "generous":
            return "Thank you so much."
        case "not as generous":
            return "Thank you."
        default:
            return "Bye."
    }
}