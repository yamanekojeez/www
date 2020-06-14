/* js/main.js */
var yobi = new Array("日", "月", "火", "水", "木", "金", "土");
var today = new Date();
var week = today.getDay();
document.write("本日は" + yobi[week] + "曜日!<br>");

function checkBrowser() {
	var result = '不明';
	var agent = window.navigator.userAgent.toLowerCase();
	var version = window.navigator.appVersion.toLowerCase();

	if (agent.indexOf("msie") > -1) {
		if (version.indexOf("msie 6.") > -1) {
			result = 'IE6';
		} else if (version.indexOf("msie 7.") > -1) {
			result = 'IE7';
		} else if (version.indexOf("msie 8.") > -1) {
			result = 'IE8';
		} else if (version.indexOf("msie 9.") > -1) {
			result = 'IE9';
		} else if (version.indexOf("msie 10.") > -1) {
			result = 'IE10';
		} else {
			result = 'IE(バージョン不明)';
		}
	} else if (agent.indexOf("trident/7") > -1) {
		result = 'IE11';
	} else if (agent.indexOf("edge") > -1) {
		result = 'Edge';
	} else if (agent.indexOf("chrome") > -1) {
		result = 'Chrome';
	} else if (agent.indexOf("safari") > -1) {
		result = 'Safari';
	} else if (agent.indexOf("opera") > -1) {
		result = 'Opera';
	} else if (agent.indexOf("firefox") > -1) {
		result = 'Firefox';
	}
	return "お使いのブラウザは「" + result + "」です。";
}

function ChangeParaToDate() {
	document.getElementById("browser").innerHTML = checkBrowser();
}
function alt() {
	consolo.log("ようこそ艦隊司令部へ！\n提督を応援しています。");
}
