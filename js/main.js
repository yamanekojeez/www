/* alert("Hello World!"); */
let yobi = new Array("日","月","火","水","木","金","土");
let today = new Date();
let week = today.getDay();
document.write( "本日は" + yobi[week] + "曜日!");

/* document.getElementById("view_brs").innerHTML = browser();
function browser() {
        let agent = window.navigator.userAegnt.toLowerCase();
        if(agent.indexOf('msie') > -1) {
            brs = 'InternetExplorer';
        } else if(agent.indexOf('edge') > -1) {
            brs = 'Edge';
        } else if(agent.indexOf('chrome') > -1) {
            brs = 'Chrome';
        } else if(agent.indexOf('safari') > -1) {
            brs = 'Safari';
        } else if(agent.indexOf('firefox') > -1) {
            brs = 'Safari';
        } else {
            brs = '不明なブラウザ';
        }
    return "あなたは<font color='#FF0000'>" + brs + "</font>を使っています。";
} */
