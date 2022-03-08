document.getElementById("main-menu-btn").addEventListener("click", () => {
    if(document.getElementById("mobile-menu").className == "sm:hidden hidden"){
        document.getElementById("mobile-menu").className = "sm:hidden";
        document.getElementById("main-menu-icon").innerHTML = "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />";
        return;
    }
    document.getElementById("mobile-menu").className = "sm:hidden hidden";
    document.getElementById("main-menu-icon").innerHTML = "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />";
});

function toggleSwitch(id){
    let button = document.getElementById(id + "-btn");
	let animation = document.getElementById(id + "-animation");
	if(button.ariaChecked == "false"){
		button.ariaChecked = "true";
		button.className = "bg-indigo-600 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none";
		animation.className = "translate-x-5 pointer-events-none inline-block h-5 w-5 rounded-full bg-gray-100 shadow transform ring-0 transition ease-in-out duration-200";
		return;
	}
	button.ariaChecked = "false";
	button.className = "bg-gray-700 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none";
	animation.className = "translate-x-0 pointer-events-none inline-block h-5 w-5 rounded-full bg-gray-100 shadow transform ring-0 transition ease-in-out duration-200";
}

function getSwitchState(id){
    let button = document.getElementById(id + "-btn");
    return (button.ariaChecked == "true") ? true : false;
}

function copyToClipboard(text){
    let textArea = document.createElement("textarea");
    textArea.value = text;

    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    document.execCommand('copy');

    document.body.removeChild(textArea);
}

const IsNumeric = (num) => /^-{0,1}\d*\.{0,1}\d+$/.test(num);