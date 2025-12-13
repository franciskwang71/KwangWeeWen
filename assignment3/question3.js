const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below
let requiredData = Number(disneyData.open) - Number(disneyData.high) + Number(disneyData.low) - Number(disneyData.close);
requiredData = Number(requiredData.toFixed(2));
console.log(requiredData);