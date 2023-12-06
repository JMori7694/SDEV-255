function add_N_first_integers(n) {
    var total = 0;
    for (var i = 0; i <= n; i++) total +=i;
    return total;
}

var total_10 = add_N_first_integers(10);
console.log("Total of the first 10 integers = " + total_10);

var total_25 = add_N_first_integers(25);
console.log("Total of the first 25 integers = " + total_25);

var total_100 = add_N_first_integers(100);
console.log("Total of the first 100 integers = " + total_100);