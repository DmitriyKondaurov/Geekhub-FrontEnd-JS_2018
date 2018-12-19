let direction = ['north', 'east', 'south', 'west'];
let prevStep = '';
let i = 0;
while (i<200) {
    let k = 0;
    for (k = 0; k<direction.length; k++) {
        while (isFree(direction[k])){
            if (prevStep != direction[k]) {
                step(k);
                prevStep = direction[((k+2)%4)];
            }
            else break;
        }
        map();
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