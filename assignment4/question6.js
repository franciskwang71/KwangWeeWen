// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

let data = [];
// Loop through amdPrices to find the three lowest prices
for (let i = 0; i < 3; i++) {
    let lowest = amdPrices[0];
    let lowestIndex = 0;
    // Inner loop to find the lowest price in the current amdPrices array
    for (let j = 1; j < amdPrices.length; j++) {
        if (amdPrices[j] < lowest) { 
            lowest = amdPrices[j];
            lowestIndex = j; 
        }
    }
    //
    data.push(lowest); // Store the found lowest price in data array
    amdPrices.splice(lowestIndex, 1); // Remove the lowest price from the amdPrices array
}
console.log("The three lowest prices are " + data[0] + ", " + data[1] + ", and " + data[2]);