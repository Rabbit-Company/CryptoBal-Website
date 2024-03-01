document.getElementById("btc-qr").addEventListener("click", () => {
	copyToClipboard('bc1qjcj60rdve5nys72fy42f4yv6s8t34s7x3nh03d');
	alert('Bitcoin address copied to your clipboard!');
});

document.getElementById("eth-qr").addEventListener("click", () => {
	copyToClipboard('0xa4B2b80A4d5C577e1Ddb41096c2BD85D4A6e0bb7');
	alert('Ethereum address copied to your clipboard!');
});

document.getElementById("iota-qr").addEventListener("click", () => {
	copyToClipboard('iota1qrdx8hnpk9sdgswus5tj4hlgstjnqhsk7pfvvfp45v0y3wt22tjpjf347tp');
	alert('IOTA address copied to your clipboard!');
});

document.getElementById("xmr-qr").addEventListener("click", () => {
	copyToClipboard('8BmrgB8NGWhe8TSjNJDNMKgHrvxEQP1ZUDTWMNWA8CnKMpQjBjZhje1DPMmkbdNyMZESZDvHgMyufe5KPtLgy41Q8MTWnBE');
	alert('Monero address copied to your clipboard!');
});

document.getElementById("dash-qr").addEventListener("click", () => {
	copyToClipboard('XfJRUp2xGBwjtpSSicr21ep21xBL5dpvEf');
	alert('Dash address copied to your clipboard!');
});

document.getElementById("zec-qr").addEventListener("click", () => {
	copyToClipboard('t1MGdKL7jcX9dGRThSyXBrkgy8wX6XH577i');
	alert('Zcash address copied to your clipboard!');
});