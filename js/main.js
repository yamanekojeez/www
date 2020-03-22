/* alert("Hello World!"); */
var yobi = new Array("日", "月", "火", "水", "木", "金", "土");
var today = new Date();
var week = today.getDay();
document.write("本日は" + yobi[week] + "曜日!<br>");

var userAgent = window.navigator.userAgent.toLowerCase();
if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
	document.write("Internet Explorerをお使いですね");
} else if (userAgent.indexOf("edge") != -1) {
	document.write("Edgeをお使いですね");
} else if (userAgent.indexOf("chrome") != -1) {
	document.write("Google Chromeをお使いですね");
} else if (userAgent.indexOf("safari") != -1) {
	document.write("Safariをお使いですね");
} else if (userAgent.indexOf("firefox") != -1) {
	document.write("FireFoxをお使いですね");
} else if (userAgent.indexOf("opera") != -1) {
	document.write("Operaをお使いですね");
} else {
	document.write("そんなブラウザは知らん");
}

function ChangeParaToDate(){
	document.getElementByID("eid_date").innerHTML = Date();
}

