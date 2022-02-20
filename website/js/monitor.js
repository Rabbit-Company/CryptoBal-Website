var jsonPrices = fetchPrices();
var lastPrices = new Map();
var prices = new Map();

var lastTotal = 0;
var total = 0;

window.setInterval(function() {
	fetchPrices();
}, 5000);

function fetchPrices(){
	fetch("https://api.binance.com/api/v3/ticker/price")
	.then(response => {
		if (response.ok) return response.json();
	}).then(json => {
		jsonPrices = json;
		getPrices();
	}).catch();
}

function getPrices(){
	cryptos.forEach(crypto => {
		for(let i = 0; i < jsonPrices.length; i++){
			let symbol = crypto + "USDT"; 
			let symbol2 = jsonPrices[i].symbol;
			if(symbol != symbol2) continue;
			lastPrices.set(crypto, prices.get(crypto));
			prices.set(crypto, jsonPrices[i].price);
		}
	});
	updateAssets();
}

let cryptos = Object.keys(localStorage);

let html = "";
cryptos.forEach(crypto => {
	html += "<div class='relative bg-gray-700 pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'> <dt><div class='absolute p-2'><img class='h-10 w-10 rounded-full' src='images/cryptos/" + crypto + ".png' /></div><p class='ml-16 text-sm font-medium text-gray-400 truncate'>" + crypto + "</p> </dt> <dd class='ml-16 flex items-baseline'> <p class='flex items-baseline text-2xl font-semibold text-red-600'>$0.00</p><p class='ml-2 text-sm font-semibold text-gray-300'>" + localStorage.getItem(crypto) + "</p> </dd></div>";
});
document.getElementById("crypto-assets").innerHTML = html;

function updateAssets(){
	let html = "";
	lastTotal = total;
	total = 0;
	cryptos.forEach(crypto => {
		let amount = localStorage.getItem(crypto);
		let price = prices.get(crypto) * amount;
		total += price;
		if(lastPrices.get(crypto) <= prices.get(crypto)){
			html += "<div class='relative bg-gray-700 pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'> <dt><div class='absolute p-2'><img class='h-10 w-10 rounded-full' src='images/cryptos/" + crypto + ".png' /></div><p class='ml-16 text-sm font-medium text-gray-400 truncate'>" + crypto + " <span class='text-green-400'>$" + parseFloat(prices.get(crypto)) + "</span>" + "</p></dt><dd class='ml-16 flex items-baseline'><p class='flex items-baseline text-2xl font-semibold text-green-600'>$" + price.toFixed(2) + "</p><p class='ml-2 text-sm font-semibold text-gray-300'>" + amount + "</p> </dd></div>";
		}else{
			html += "<div class='relative bg-gray-700 pt-5 px-4 pb-5 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden'> <dt><div class='absolute p-2'><img class='h-10 w-10 rounded-full' src='images/cryptos/" + crypto + ".png' /></div><p class='ml-16 text-sm font-medium text-gray-400 truncate'>" + crypto + " <span class='text-red-400'>$" + parseFloat(prices.get(crypto)) + "</span>" + "</p></dt><dd class='ml-16 flex items-baseline'><p class='flex items-baseline text-2xl font-semibold text-red-600'>$" + price.toFixed(2) + "</p><p class='ml-2 text-sm font-semibold text-gray-300'>" + amount + "</p> </dd></div>";
		}
	});
	if(lastTotal <= total){
		document.getElementById("total").className = "text-2xl font-semibold text-green-600";
	}else{
		document.getElementById("total").className = "text-2xl font-semibold text-red-600";
	}
	document.getElementById("crypto-assets").innerHTML = html;
	document.getElementById("total").innerText = "$" + total.toFixed(2);
}