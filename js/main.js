alert("Hello World!");
let yobi = new Array("日","月","火","水","木","金","土");
let today = new Date();
let week = today.getDay();

document.write( "本日は" + yobi[week] + "曜日!");
