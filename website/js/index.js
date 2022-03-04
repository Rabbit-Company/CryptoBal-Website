updateTable();

function isCrypto(text){
	if(typeof(text) == 'undefined') return false;
	if(!text.match(/^[A-Za-z]+$/)) return false;
	if(!(text.length >= 3 && text.length <= 6)) return false;
	return true;
}

document.getElementById("start-btn").addEventListener('click', () => {
	let button = document.getElementById("graph-btn");
	if(button.ariaChecked == "false"){
		window.location = "monitor.html?graph=disabled";
		return;
	}
	window.location = "monitor.html";
});

document.getElementById("graph-btn").addEventListener('click', () => {
	let button = document.getElementById("graph-btn");
	let animation = document.getElementById("graph-animation");
	if(button.ariaChecked == "false"){
		button.ariaChecked = "true";
		button.className = "bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none";
		animation.className = "translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-gray-100 shadow transform ring-0 transition ease-in-out duration-200";
		return;
	}
	button.ariaChecked = "false";
	button.className = "bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none";
	animation.className = "translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-gray-100 shadow transform ring-0 transition ease-in-out duration-200";
});

document.getElementById("add-btn").addEventListener('click', () => {
	let crypto = document.getElementById("crypto").value;
	let amount = document.getElementById("amount").value;

	document.getElementById("crypto").value = "";
	document.getElementById("amount").value = "";

	if(typeof(crypto) == 'undefined') return;
	if(!crypto.match(/^[A-Za-z]+$/)) return;
	if(!(crypto.length >= 3 && crypto.length <= 6)) return;

	if(typeof(amount) == 'undefined') return;
	if(!IsNumeric(amount)) return;

	localStorage.setItem(crypto.toUpperCase(), amount);
	updateTable();
});

function updateTable(){
	let cryptos = Object.keys(localStorage).filter(isCrypto);
	let html = "";
	cryptos.forEach(crypto => {
		html += "<tr><td class='px-4 py-4 whitespace-nowrap'><div class='flex items-center'><div class='flex-shrink-0 h-10 w-10'><img class='h-10 w-10 rounded-full' src='images/cryptos/" + crypto + ".png'></div></div></td><td class='px-4 py-4 whitespace-nowrap text-sm text-gray-400'>" + crypto + "</td><td class='px-4 py-4 whitespace-nowrap text-sm text-gray-400'>" + localStorage.getItem(crypto) + "</td><td class='px-4 py-4 whitespace-nowrap text-left'><button id='remove-" + crypto + "' type='button' class='inline-flex items-center px-3 py-2 border border-gray-600 text-sm leading-4 font-medium rounded-md shadow-sm text-gray-400 bg-gray-700 hover:bg-gray-600 focus:outline-none'>Remove</button></td></tr>";
	});
	document.getElementById("cryptos").innerHTML = html;

	cryptos.forEach(crypto => {
		document.getElementById("remove-" + crypto).addEventListener('click', () => {
			localStorage.removeItem(crypto);
			updateTable();
		});
	});
}