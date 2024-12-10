let cookieCount = 0;
let cookiesPerSecond = 0;
let cookiesPerClick = 1;

function onCookieClick() {
    console.log("Cookie clicked");
    
    cookieCount += cookiesPerClick;

    updateUI();
}

function updateUI() {
    let countText = document.getElementById("cookie-count");
    countText.innerText = cookieCount;

    let perSecondText = document.getElementById("cookie-per-second");
    perSecondText.innerText = cookiesPerSecond;

}