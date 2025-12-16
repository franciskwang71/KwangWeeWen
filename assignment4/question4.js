const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
let closeSum = 0;
// Loop through msftData to calculate the sum of the closing prices by accessing the closing price at index 3 of each inner array
for (let i = 0; i < msftData.length; i++) {
	closeSum += msftData[i][3];
}
// Calculate the average closing price by dividing the sum by the number of entries in msftData array
let msftCloseAvg = closeSum / msftData.length;
// Format msftCloseAvg to 2 decimal places
msftCloseAvg = msftCloseAvg.toFixed(2);
console.log("Average closing price of MSFT is " + msftCloseAvg);