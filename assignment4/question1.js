const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];
let amd52wHigh = 0;
// Write your code below
// Loop through amdPrices to find the highest price by comparing each price with amd52wHigh
for (let i = 0; i < amdPrices.length; i++) {
    if (amdPrices[i] > amd52wHigh) {
        amd52wHigh = amdPrices[i];
    }
}

console.log("AMD 52-week high is " + amd52wHigh);