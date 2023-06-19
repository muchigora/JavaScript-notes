

var answer = window.prompt("Yupe YES, NO or MAYBE. Then click OK");
switch(answer){
    case 'YES':
        console.log("You said YES!");
        break;
    case 'MAYBE':
        console.log("You said MAYBE!");
        break;
    case 'NO':
        console.log("You said NO!");
        break;
    default:
        console.log("You rebel. you!");
        break;
}