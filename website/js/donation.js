document.getElementById("btc-qr").addEventListener("click", () => {
  copyToClipboard('bc1qchcpkcy6ga3dxwufvxuaf6qpdg4c6ryemmqfle');
  alert('Bitcoin address copied to your clipboard!');
});

document.getElementById("eth-qr").addEventListener("click", () => {
  copyToClipboard('0x16620E8f37520E25CED7915A4f538b97Fcd3E76C');
  alert('Ethereum address copied to your clipboard!');
});

document.getElementById("iota-qr").addEventListener("click", () => {
  copyToClipboard('iota1qp7uzm3506rpkdu0rc29tx486x4mlxpsk9wjh87e9j4z7k00p4rfwsnsqu9');
  alert('IOTA address copied to your clipboard!');
});

document.getElementById("xmr-qr").addEventListener("click", () => {
  copyToClipboard('42SrwsGtg6mHErAKAjnkJbR4qziJ1ndBoid9s53cwEozN4xM9Ro3FKGGaqfCtdjJ1LFpRVCn8M26cURV76QDM6rX6s1m2zj');
  alert('Monero address copied to your clipboard!');
});

document.getElementById("dash-qr").addEventListener("click", () => {
  copyToClipboard('XfJRUp2xGBwjtpSSicr21ep21xBL5dpvEf');
  alert('Dash address copied to your clipboard!');
});

document.getElementById("zec-qr").addEventListener("click", () => {
  copyToClipboard('t1dVuXeSvuMrVPRcJ7hVNP7CLuvZoH8PbKz');
  alert('Zcash address copied to your clipboard!');
});