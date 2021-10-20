
function openCategory() {
	document.getElementById("category").style.display = "flex";
	document.getElementById("category").style.animation = "categoryFadeIn 0.6s ease-in-out";
}

function closeCategory() {
	document.getElementById("category").style.animation = "categoryFadeOut 0.6s forwards ease-in-out";
}