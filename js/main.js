alert("Hello World");
document.getElementById("view_brs").innerHTML = browser();
//ブラウザの判定
function browser() {
	var brs;
	if (document.all) {
		//Internet Explorer
		brs = "Internet Explorer";
	} else {
		//その他のブラウザ
		brs = "Internet Explorer以外のブラウザ";
	}
	return "あなたは<font color='#FF0000'>" + brs + "</font>を使っています。";
}
</script>
