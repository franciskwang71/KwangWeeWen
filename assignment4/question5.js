const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
let sumOfClose = 0;
// Loop through disneyData to calculate the sum of the closing prices by accessing the closing price using the 'close' property of each object
for (let i = 0; i < disneyData.length; i++) {
	sumOfClose += parseFloat(disneyData[i].close);
}
// Calculate the average closing price by dividing the sum by the number of entries in disneyData array
let disneyCloseAvg = sumOfClose / disneyData.length;
// Rounding disneyCloseAvg to 2 decimal places
disneyCloseAvg = Math.round(disneyCloseAvg * 100) / 100;
console.log("Average closing price of Disney is " + disneyCloseAvg);