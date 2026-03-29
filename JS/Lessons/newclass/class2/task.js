//re-write from tenary to if..else

//tenary
let sunn = true;
sunn 
    ? console.log("No need for a rain coat")
    : console.log("Go out with a rain coat");

//if..else
let sunny = false;
if (sunny) {
    console.log("No need for a rain coat");
} else {
    console.log("Go out with a rain coat")
}

//re-write from if,else..if and else to switch

//if,else..if and else
let weathe = 'sunny';
if (weathe === 'cloudy'){
    console.log('You need a jacket');
}else if(weathe === 'sunny'){
    console.log('Go out freely');
}else if(weathe === 'rainy'){
    console.log('You need an umbrella');
}else if(weathe === 'windy'){
    console.log('Wear goggles');
}else{
    console.log('weather is normal');
}


//switch
let weather = 'rainy';
switch (weather) {
    case 'cloudy':
        console.log('You need a jacket');
        break;
    case 'sunny':
        console.log('Go out freely');
        break;
    case 'rainy':
        console.log('You need an umbrella');
        break;
    case 'windy':
        console.log('Wear goggles');
        break;
    default:
        console.log('weather is normal');
        break;
}





