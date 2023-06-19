ilosc = 6;
i = 0;
function galeria() {
	document.getElementById('obraz').src = i + '.jpg';
	if (i < ilosc - 1) {
		i++
	} else {
		i = 0
	}
	setTimeout('galeria()', 3000)
}
window.onload = function () {
	for (x = 1; x <= ilosc; x++) {
		new Image().src = x + '.jpg'
	}
	galeria()
}