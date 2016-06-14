function average(arr) {
    return Math.round(arr.reduce(function(a,b){return a + b;}) / arr.length);
}

var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(average(scores));

scores = [40, 65, 77, 82, 80 ,54 ,73 ,63 ,95 ,49];
console.log(average(scores));
