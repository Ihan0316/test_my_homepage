var click = document.querySelector("#click_change");
var isChanged = false;

click.onclick = function () {
    if (isChanged) {
        click.style.color = "black";
        click.style.fontSize = "16px";
    } else {
        click.style.color = "red";
        click.style.fontSize = "50px";
    }
    isChanged = !isChanged;
};
