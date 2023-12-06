var tab = ["Element 1", "Element 2", "Element 3", "Element 4", "Element 5"];
console.log("inition tab =", tab);
tab = tab.filter(function(element, index) {
    if (index >= 2) return true;
});
console.log("\nfinal tab =", tab);