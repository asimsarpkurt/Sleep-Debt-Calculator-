//Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. 
//If we don’t sleep enough, we accumulate sleep debt. 
//In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
function getsleephours(day) {
    number = 8;
    switch (day) {
        case 'monday':
            return number
            break;
        case 'tuesday':
            return number
            break;
        case 'wednesday':
            return number
            break;
        case 'thursday':
            return number
            break;
        case 'friday':
            return number
            break;
        case 'saturday':
            return number
            break;
        case 'sunday':
            return number
            break;
        default:
            return 'error';
    }
}
console.log(getsleephours('monday'));

function getactualsleephours() {
    sum = getsleephours('monday') + getsleephours('tuesday') + getsleephours('wednesday') + getsleephours('thursday') + getsleephours('friday') + getsleephours('saturday') + getsleephours('sunday');
    return sum;
}
console.log(getactualsleephours());

function getidealsleephours() {
    let idealhours = 9;
    return idealhours * 7;
}
console.log(getidealsleephours());

function calculatesleepdebt() {
    const actualsleep = getactualsleephours();
    const idealsleep = getidealsleephours();
    if (actualsleep === idealsleep) {
        console.log('You got the perfect amount of sleep')
    } else if (actualsleep > idealsleep) {
        console.log('You got more sleep than needed because you slept ' + (actualsleep - idealsleep) + 'more than you should have this week.')
    } else if (actualsleep < idealsleep) {
        console.log('You should get some rest, your sleep debt is ' + (idealsleep - actualsleep) + ' less than you should have this week.')
    } else {
        console.log('Error, something went wrong!')
    }
}
calculatesleepdebt()