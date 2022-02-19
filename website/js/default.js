document.getElementById("main-menu-btn").addEventListener("click", () => {
    if(document.getElementById("mobile-menu").className == "sm:hidden hidden"){
        document.getElementById("mobile-menu").className = "sm:hidden";
        document.getElementById("main-menu-icon").innerHTML = "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M6 18L18 6M6 6l12 12' />";
        return;
    }
    document.getElementById("mobile-menu").className = "sm:hidden hidden";
    document.getElementById("main-menu-icon").innerHTML = "<path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 6h16M4 12h16M4 18h16' />";
});

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