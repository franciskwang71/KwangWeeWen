const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
let amd7dsum = 0;
// Loop through amdPrices to calculate the sum of the prices
for (let i = 0; i < amdPrices.length; i++) {
    amd7dsum += amdPrices[i];
}
// Calculate the 7-day Simple Moving Average (SMA) by dividing the sum by the number of prices by the length of amdPrices array
let amd7dSMA = amd7dsum / amdPrices.length;
// Format amd7dSMA to 2 decimal places
amd7dSMA = amd7dSMA.toFixed(2);

let count = 0;
// Loop through amdPrices to count the number of days AMD price was above the 7-day SMA by comparing each price with amd7dSMA
for (let i = 0; i < amdPrices.length; i++) {
    if (amdPrices[i] > amd7dSMA) {
        count++;
    };
}
console.log("Number of days AMD was above the 7-day SMA is: " + count);