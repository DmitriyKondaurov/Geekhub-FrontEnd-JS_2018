let direction = ['north', 'east', 'south', 'west'];
let i = 0;
let k = 0;
while (i<121) {
    if (isFree(direction[(k+3)%4])) {
        k = (k+3)%4;
        step(k);
        map();
    }
    else {
        while (!(isFree(direction[(k+3)%4]))){
            if (isFree(direction[k])) {
                step(k);
                map();
            }
            else {
                k = (k+1)%4;
                break;
            }
        }
    }
    i++;
}

function step(x) {
    switch (x) {
        case 0:
            north();
            break;
        case 1:
            east();
            break;
        case 2:
            south();
            break;
        case 3:
            west();
            break;
        default:
            console.log('step to nowhere!!!');
    }
}